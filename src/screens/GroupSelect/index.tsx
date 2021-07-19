import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from '../../components/Form/Button';
import { useGroup } from '../../hooks/group';

import {
  Container,
  Header,
  Title,
  Group,
  Icon,
  Name,
  Separator,
  Section,
} from './styles';

export function GroupSelect() {
  const { goBack, navigate } = useNavigation();
  const { group, findGroupById, groups } = useGroup();

  function handleSelectGroup(id: string) {
    findGroupById(id);
    goBack()
  }

  return (
    <Container>
      <Header>
        <Title>Grupo</Title>
      </Header>
      <Section>
        <Button
          title="Criar novo grupo"
          onPress={() => navigate("FormGroup")}
          type="success"
        />
      </Section>

      <FlatList
        data={groups}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Group
            onPress={() =>  handleSelectGroup(item.id)}
            isActive={group.id === item.id}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Group>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Section>
        <Button
          title="Cancelar"
          onPress={() => goBack()}
          type="attention"
        />
      </Section>
    </Container>
  )
}