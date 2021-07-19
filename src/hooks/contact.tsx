import React, {
  useEffect,
  useState,
  useContext,
  ReactNode,
  createContext
} from 'react';
import { Alert } from 'react-native';
import firebase from 'firebase';
import { sendEmail } from '../utils/sendEmail';
import { useGroup } from './group';

interface ContactProviderProps {
  children: ReactNode;
}

interface Address {
  cep: string;
  city: string;
  street: string;
  district: string;
  number: number;
}

interface Phone {
  number: string;
}

interface Contact {
  name: string;
  phones: Phone[];
  addresses: Address[];
}

interface ContactData extends Contact {
  id: string;
}

interface GroupId {
  groupId: string;
}

interface IContactContextData {
  contact: ContactData;
  contacts: ContactData[];
  createContact(contact: Contact): Promise<void>;
  watchContacts(groupId?: GroupId): Promise<void>;
  deleteContact(contact: ContactData): Promise<void>;
  findContactById(id: string): void;
}

export const ContactContext = createContext({} as IContactContextData);

function ContactProvider({ children }: ContactProviderProps) {
  const { group, groups } = useGroup();
  
  const [contact, setContact] = useState<ContactData>({} as ContactData);
  const [contacts, setContacts] = useState<ContactData[]>([] as ContactData[]);

  useEffect(() => {
    watchContacts();
  }, [groups]);

  async function createContact(contact: Contact) {
    const { currentUser } = firebase.auth();

    if (currentUser) {
      await firebase
        .database()
        .ref(`/users/${currentUser.uid}/groups/${group.id}/contacts`)
        .push(contact)
      if(currentUser.email) {
        await sendEmail({ email: currentUser.email, contactName: contact.name });
      }
    }

    await watchContacts();
  }

  async function watchContacts(groupId?: GroupId): Promise<void> {
    const { currentUser } = firebase.auth();

    if (currentUser) {
      setContacts([]);
      if (groupId?.groupId) {
        var contactsRef = firebase.database()
          .ref(`/users/${currentUser.uid}/groups/${groupId?.groupId}/contacts`);

        await contactsRef.once('value').then(snapshot => {
          const contacts = snapshot.val();
          if (contacts) {
            const keys = Object.keys(contacts);
            const listContactWithId = keys.map(key => {
              return { ...contacts[key], id: key }
            });
            setContacts(oldState => [...oldState, ...listContactWithId]);
          }
        })
      } else {
        groups.forEach(async group => {
          var contactsRef = firebase.database()
            .ref(`/users/${currentUser.uid}/groups/${group.id}/contacts`);

          await contactsRef.once('value').then(snapshot => {
            const contacts = snapshot.val();
            if (contacts) {
              const keys = Object.keys(contacts);
              const listContactWithId = keys.map(key => {
                return { ...contacts[key], id: key }
              });
              setContacts(oldState => [...oldState, ...listContactWithId]);
            }
          })
        })
      }
    }
  }

  async function deleteContact(contact: ContactData): Promise<void> {
    new Promise((resolve, reject) => {
      Alert.alert('Exclusão', `Deseja excluir o grupo: ${contact.name}?`,
        [
          {
            text: 'Não',
            onPress: () => {
              resolve(false);
            },
            style: 'cancel'
          },
          {
            text: 'Sim',
            onPress: async () => {
              const { currentUser } = firebase.auth();

              try {
                if (currentUser) {
                  const groupsRef = firebase
                    .database()
                    .ref(`/users/${currentUser.uid}/groups`)

                  await groupsRef.once('value').then(snapshot => {
                    const groups = snapshot.val();

                    if (groups) {
                      const keys = Object.keys(groups);
                      const listGroupWithId = keys.map(key => {
                        return { id: key, ...groups[key] }
                      });

                      listGroupWithId.forEach(async element => {
                        if (element.contacts) {
                          const keys = Object.keys(element.contacts)
                          const contactsWithId = keys.map(key => {
                            return { id: key }
                          })

                          const findContact = contactsWithId.find(element => element.id === contact.id)

                          if (findContact) {
                            await firebase
                              .database()
                              .ref(`/users/${currentUser.uid}/groups/${element.id}/contacts/${contact.id}`)
                              .remove();

                            await watchContacts();

                            resolve(true);
                          }
                        }
                      });
                    }
                  })
                }
              }
              catch (e) {
                reject(e);
              }
            },
          }
        ],
        { cancelable: false }
      )
    })
  }

  function findContactById(id: string) {
    const auxContacts = contacts;

    const findContact = auxContacts.find(element => element.id === id);

    if (!findContact) {
      return;
    }

    setContact(findContact);
  }

  return (
    <ContactContext.Provider value={{
      contact,
      contacts,
      createContact,
      watchContacts,
      deleteContact,
      findContactById,
    }}>
      {children}
    </ContactContext.Provider>
  )
}

function useContact() {
  const context = useContext(ContactContext);

  return context;
}

export { ContactProvider, useContact };