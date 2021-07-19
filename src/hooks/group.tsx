import React, {
  useEffect,
  useState,
  useContext,
  ReactNode,
  createContext
} from 'react';
import { Alert } from 'react-native';
import firebase from 'firebase';

interface GroupProviderProps {
  children: ReactNode;
}

interface Group {
  name: string;
}

interface GroupData extends Group {
  id: string;
}

interface IGroupContextData {
  group: GroupData;
  groups: GroupData[];
  setGroup(group: GroupData): void;
  createGroup(group: Group): Promise<void>;
  deleteGroup(group: GroupData): Promise<void>;
  findGroupById(id: String): void;
  watchGroups(): Promise<void>;
}

export const GroupContext = createContext({} as IGroupContextData);

function GroupProvider({ children }: GroupProviderProps) {
  const [group, setGroup] = useState<GroupData>({} as GroupData);
  const [groups, setGroups] = useState<GroupData[]>([] as GroupData[]);

  useEffect(() => {
    watchGroups();
  }, [])

  async function createGroup(group: GroupData): Promise<void> {
    const { currentUser } = firebase.auth();

    if (currentUser) {
      const response = await firebase
        .database()
        .ref(`/users/${currentUser.uid}/groups`)
        .push({ name: group.name })
    }

    await watchGroups();
  }

  async function watchGroups(): Promise<void> {
    const { currentUser } = firebase.auth();

    if (currentUser) {
      const groupsRef = firebase
        .database()
        .ref(`/users/${currentUser.uid}/groups`)

      await groupsRef.once('value').then(snapshot => {
        const groups = snapshot.val();

        if (groups) {
          const keys = Object.keys(groups);
          const listGroupWithId = keys.map(key => {
            return { id: key, name: groups[key].name }
          })
          setGroups([...listGroupWithId])
        } else {
          setGroups([]);
        }
      })
    }
  }

  async function deleteGroup(group: GroupData): Promise<void> {
    new Promise((resolve, reject) => {
      Alert.alert('Exclusão', `Deseja excluir o grupo: ${group.name}?`,
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
                  await firebase.database().ref(`/users/${currentUser.uid}/groups/${group.id}`).remove();

                  await watchGroups();

                  resolve(true);
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

  function findGroupById(id: string) {
    const auxGroups = groups;

    const findGroup = auxGroups.find(element => element.id === id);

    if (!findGroup) {
      return;
    }

    setGroup(findGroup);
  }

  return (
    <GroupContext.Provider value={{
      groups,
      group,
      setGroup,
      createGroup,
      deleteGroup,
      watchGroups,
      findGroupById,
    }}>
      {children}
    </GroupContext.Provider>
  )
}

function useGroup() {
  const context = useContext(GroupContext);

  return context;
}

export { GroupProvider, useGroup };