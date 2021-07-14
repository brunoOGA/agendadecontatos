import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';

import {
  Container,
  Form,
  Fields,
  Label,
  LabelIcon,
  LabelText,
} from './styles';

export function FormGroup() {
  const navigation = useNavigation();
  return (
    <Container>
      <Form>
        <Fields>
          <Label>
            <LabelIcon name="group" size={32} />
            <LabelText>Nome</LabelText>
          </Label>
          <Input placeholder="Nome" />
        </Fields>

        <Button type="success" onPress={() => navigation.goBack()} title="Adicionar" />
      </Form>
    </Container>
  )
}