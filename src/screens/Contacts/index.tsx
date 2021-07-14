import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { AddButton } from '../../components/AddButton';
import { ListItem } from '../../components/ListItem';
import { SearchBar } from '../../components/SearchBar';
import { contacts } from '../../utils/contacts';
import { groups } from '../../utils/groups';

import {
  Container,
  Header,
  HeaderInfo,
  Title,
  Separator,
  Groups,
  GroupButton,
  GroupCircleIcon,
  AddGroupIcon,
  GroupButtonText,
  InitialLetter,
  InitialLetterText,
  ContactsList,
} from './styles';


export function Contacts() {
  const navigation = useNavigation();

  return (
      <Container>
        <Header>
          <Title>
            Contatos
          </Title>
          <HeaderInfo>
            <SearchBar />
          </HeaderInfo>
        </Header>
        <Groups>
          <GroupButton onPress={() => navigation.navigate('FormGroup')}>
            <GroupCircleIcon>
              <AddGroupIcon name="plus" />
            </GroupCircleIcon>
            <GroupButtonText>
              Criar grupo
            </GroupButtonText>
          </GroupButton>
          {groups.map(item => {
            return (
              <GroupButton key={item.id}>
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

        <ContactsList
          data={contacts}
          keyExtractor={item => item.id}
          style={{ paddingHorizontal: 16 }}
          renderItem={({ item }) => (
            <ListItem onPress={() => navigation.navigate('Contact')} 
            name={item.name} />
          )}
          contentContainerStyle={{ paddingBottom: 24 }}
          ItemSeparatorComponent={() => <Separator />}
        />
        <AddButton onPress={() => navigation.navigate('FormContact')} />
      </Container>
  )
}