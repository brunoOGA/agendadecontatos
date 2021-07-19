import React, { useState, useEffect } from 'react';
import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AddButton } from '../../components/AddButton';
import { ListItem } from '../../components/ListItem';
import { SearchBar } from '../../components/SearchBar';
import { useAuth } from '../../hooks/auth';
import { useGroup } from '../../hooks/group';
import { useContact } from '../../hooks/contact';

import {
  Container,
  Header,
  HeaderInfo,
  Title,
  TitleText,
  SignOutButton,
  SignOutIcon,
  Separator,
  Groups,
  GroupButton,
  GroupCircleIcon,
  AddGroupIcon,
  GroupButtonText,
  InitialLetter,
  InitialLetterText,
  ContactsList,
  NewContacts,
  NewContactsTitle
} from './styles';
import { GroupSelectButton } from '../../components/Form/GroupSelectButton';
import { Button } from '../../components/Form/Button';
import { generateContacts } from '../../utils/generateContacts';

export function Dashboard() {
  const navigation = useNavigation();
  const { group, groups, deleteGroup } = useGroup();
  const { createContact, contacts, watchContacts, deleteContact } = useContact();
  const [flagGroups, setFlagGroups] = useState(true);
  const [filter, setFilter] = useState("");
  const [contactList, setContactList] = useState([...contacts]);

  const { signOut } = useAuth();

  useEffect(() => {
    setContactList([...contacts])
  }, [contacts])

  function handleFilter(value: string) {
    setFilter(value);

    const filterList = contacts.filter((item) => (
      item.name.toUpperCase().includes(value.toUpperCase()
      )));

    setContactList([...filterList]);
  }

  async function handleRegisterContacts() {
    const list = await generateContacts(5);

    list.forEach(async (contact) => {
      await createContact(contact);
    });

    watchContacts({groupId: group.id});
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <Container>
        <Header>
          <Title>
            <TitleText>Contatos</TitleText>
            <SignOutButton onPress={signOut}>
              <SignOutIcon name="logout" size={32} />
            </SignOutButton>
          </Title>
          <HeaderInfo>
            <SearchBar
              value={filter}
              onChangeText={(value) => handleFilter(value)}
              onFocus={() => {
                setFilter('')
                setFlagGroups(false)
              }}
              onBlur={() => setFlagGroups(true)}
            />
          </HeaderInfo>
        </Header>
        {flagGroups &&
          <Groups>
            <GroupButton onPress={() => navigation.navigate('FormGroup')}>
              <GroupCircleIcon>
                <AddGroupIcon name="plus" />
              </GroupCircleIcon>
              <GroupButtonText>
                Criar grupo
              </GroupButtonText>
            </GroupButton>
            <GroupButton onPress={() => watchContacts()}>
              <InitialLetter>
                <InitialLetterText>
                  T
                </InitialLetterText>
              </InitialLetter>
              <GroupButtonText>
                Todos
              </GroupButtonText>
            </GroupButton>
            {groups.map(item => {
              return (
                <GroupButton
                  key={item.id}
                  onPress={() => watchContacts({ groupId: item.id })}
                  onLongPress={() => deleteGroup(item)}
                >
                  <InitialLetter>
                    <InitialLetterText>
                      {item.name[0].toUpperCase()}
                    </InitialLetterText>
                  </InitialLetter>
                  <GroupButtonText>
                    {item.name}
                  </GroupButtonText>
                </GroupButton>
              );
            })}
          </Groups>
        }
        {contacts.length ?
          <ContactsList
            flag={flagGroups}
            data={contactList}
            keyExtractor={item => item.id}
            style={{ paddingHorizontal: 16 }}
            renderItem={({ item }) => (
              <ListItem
                onPress={() => navigation.navigate('Contact', { id: item.id })}
                onLongPress={() => deleteContact(item)}
                name={item.name} />
            )}
            contentContainerStyle={{ paddingBottom: 24 }}
            ItemSeparatorComponent={() => <Separator />}
          />
          :
          <NewContacts>
            <NewContactsTitle> Completar lista com API </NewContactsTitle>
            <GroupSelectButton
              title={group.name}
              onPress={() => navigation.navigate("GroupSelect")}
            />
            <Button 
              title="Gerar Contatos" 
              type="success"
              onPress={async () => await handleRegisterContacts()}
              style={{
                marginTop: 32
              }}
            />
          </NewContacts>
        }
        <AddButton onPress={() => navigation.navigate('FormContact')} />
      </Container>

    </TouchableWithoutFeedback>
  )
}


