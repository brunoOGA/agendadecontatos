import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { groups } from '../../utils/groups';
import { Button } from '../../components/Form/Button';

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
import { useNavigation } from '@react-navigation/native';

interface Group {
  id: string;
  name: string;
}
export function GroupSelect() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <Title>Grupo</Title>
      </Header>
      <Section>
        <Button
          title="Criar novo grupo"
          onPress={() => navigation.navigate("FormGroup")}
          type="success"
        />
      </Section>

      <FlatList
        data={groups}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Group
            onPress={() => navigation.goBack()}
            isActive={true}
            // isActive={group.id === item.id}
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
          onPress={() => navigation.goBack()}
          type="attention"
        />
      </Section>
    </Container>
  )
}