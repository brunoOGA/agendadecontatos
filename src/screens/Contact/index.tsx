import React from 'react';

import {
  Container,
  Label,
  LabelIcon,
  LabelText,
  Divider,
  Text,
  Phones,
  Addresses,
  Address,
} from './styles';

export function Contact() {
  return (
    <Container contentContainerStyle={{ paddingBottom: 24 }}>
      <Divider>
        <Label>
          <LabelIcon name="person" size={32} />
          <LabelText>Nome</LabelText>
        </Label>
        <Text>Bruno</Text>
      </Divider>
      <Divider>
        <Label>
          <LabelIcon name="group" size={32} />
          <LabelText>Grupo</LabelText>
        </Label>
        <Text>Familia</Text>
      </Divider>
      <Divider>
        <Label>
          <LabelIcon name="phone" size={32} />
          <LabelText>Telefone</LabelText>
        </Label>
        <Phones>
          <Text>1499999999</Text>
          <Text>1499999999</Text>
        </Phones>
      </Divider>
      <Divider>
        <Label>
          <LabelIcon name="location-on" size={32} />
          <LabelText>Endereço</LabelText>
        </Label>
        <Addresses>
          <Address>
            <Text>CEP: 11111111</Text>
            <Text>Logradouro: Rua avenida</Text>
            <Text>Bairro: Bairro cidade</Text>
            <Text>Cidade: Cidade numero</Text>
            <Text>Número: 444</Text>
          </Address>
          <Address>
            <Text>CEP: 11111111</Text>
            <Text>Logradouro: Rua avenida</Text>
            <Text>Bairro: Bairro cidade</Text>
            <Text>Cidade: Cidade numero</Text>
            <Text>Número: 444</Text>
          </Address>
        </Addresses>
      </Divider>
    </Container >
  )
}