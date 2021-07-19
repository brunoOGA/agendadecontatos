import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useEffect } from 'react';

import { Label } from '../../components/Form/Label';
import { useContact } from '../../hooks/contact';

import {
  Container,
  Divider,
  Text,
  Phones,
  Addresses,
  Address,
} from './styles';

interface Props {
  id: string
}

export function Contact() {
  const { findContactById, contact } = useContact();
  const [loading, isLoading] = useState(true);

  const routes = useRoute();

  const { id } = routes.params as Props;

  useEffect(() => {
    findContactById(id);
    isLoading(false)
  }, [])

  if (loading) {
    return <AppLoading />
  }

  return (
    <Container contentContainerStyle={{ paddingBottom: 24 }}>
      <Divider>
        <Label title="Nome" icon="user" />
        <Text>{contact.name}</Text>
      </Divider>
      <Divider>
        <Label icon="users" title="Grupo" />
        <Text>Familia</Text>
      </Divider>
      {
        (contact.phones && contact.phones.length !== 0) && (
          <Divider>
            <Label icon="phone" title="Telefone" />
            <Phones>
              {
                contact.phones.map(phone => (
                  <Text key={phone.number}>- {phone.number}</Text>
                ))
              }
            </Phones>
          </Divider>
        )
      }
      {
        (contact.addresses && contact.addresses.length !== 0) && (
          <Divider>
            <Label icon="location" title="Endereço" />
            <Addresses>
              {
                contact.addresses.map(address => (
                  <Address key={address.cep}>
                    <Text>CEP: {address.cep}</Text>
                    <Text>Logradouro: {address.street}</Text>
                    <Text>Bairro: {address.district}</Text>
                    <Text>Cidade: {address.city}</Text>
                    <Text>Número: {address.number}</Text>
                  </Address>
                ))
              }
            </Addresses>
          </Divider>
        )
      }
    </Container >
  )
}