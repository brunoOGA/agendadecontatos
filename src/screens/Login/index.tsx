import React from 'react';
import { useState } from 'react';
import { AddButton } from '../../components/AddButton';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import { ListItem } from '../../components/ListItem';
import { SearchBar } from '../../components/SearchBar';
import uuid from 'react-native-uuid';

import {
  Container,
  ContactInformation,
  ContactInformationIcon,
  ContactInformationText,
  ContactInformationAddButton,
  ContactInformationAddButtonIcon,
  Information,
  ContactInformationRemoveButton,
  ContactInformationRemoveButtonIcon,
  Address,
} from './styles';

interface Address {
  id: string;
  cep: string;
  city: string;
  street: string;
  district: string;
  number: number;
}

interface Phone {
  id: string;
  number: string;
}

interface Contact {
  name: string;
  phones: Phone[];
  addresses: Address[];
}

export function Login() {
  const [contact, setContact] = useState<Contact>({
    name: '',
    addresses: [],
    phones: []
  });

  const [phones, setPhones] = useState<Phone[]>([]);
  const [addresses, setAddresses] = useState<Address[]>([]);

  function handleAddPhone() {
    setPhones(oldState => [...oldState, {
      id: String(uuid.v4()),
      number: ''
    }]);
  }

  function handleRemovePhone(id: string) {
    const auxPhones = phones;

    const index = auxPhones.findIndex(phone => phone.id === id);

    auxPhones.splice(index, 1);

    setPhones([...auxPhones]);
  }

  function handleAddAddress() {
    setAddresses(oldState => [...oldState, {
      id: String(uuid.v4()),
      cep: '',
      city: '',
      district: '',
      street: '',
      number: 0,
    }]);
  }

  function handleRemoveAddress(id: string) {
    const auxAddresses = addresses;

    const index = auxAddresses.findIndex(address => address.id === id);

    auxAddresses.splice(index, 1);

    setAddresses([...auxAddresses]);
  }


  return (
    <Container>
      <SearchBar placeholder="Buscar por contato" />
      <ListItem onPress={() => { }} name="Bruno Arruda" />
      <Button onPress={() => { }} title="Salvar" />

      <ContactInformation>
        <ContactInformationIcon name="phone" size={32} />
        <ContactInformationText>
          Telefone
        </ContactInformationText>
        <ContactInformationAddButton onPress={() => handleAddPhone()}>
          <ContactInformationAddButtonIcon name="plus" size={32} />
        </ContactInformationAddButton>
      </ContactInformation>

      {phones.map(phone => {
        return (
          <Information key={phone.id}>
            <Input placeholder="Telefone" keyboardType="phone-pad" style={{ flex: 1 }} />
            <ContactInformationRemoveButton onPress={() => handleRemovePhone(phone.id)}>
              <ContactInformationRemoveButtonIcon name="minus" size={32} />
            </ContactInformationRemoveButton>
          </Information>
        );
      })}

      <ContactInformation>
        <ContactInformationIcon name="location-on" size={32} />
        <ContactInformationText>
          Endereço
        </ContactInformationText>
        <ContactInformationAddButton onPress={() => handleAddAddress()}>
          <ContactInformationAddButtonIcon name="plus" size={32} />
        </ContactInformationAddButton>
      </ContactInformation>

      {addresses.map(address => {
        return (
          <Address key={address.id}>
            <Information>
              <Input placeholder="CEP" keyboardType="numeric" style={{ flex: 1 }} />
              <ContactInformationRemoveButton onPress={() => handleRemoveAddress(address.id)}>
                <ContactInformationRemoveButtonIcon name="minus" size={32} />
              </ContactInformationRemoveButton>
            </Information>

            <Input placeholder="Logradouro" keyboardType="numeric" />
            <Input placeholder="Bairro" keyboardType="numeric" />
            <Input placeholder="Cidade" keyboardType="numeric" />
            <Input placeholder="Número" keyboardType="numeric" />
          </Address>

        );
      })}
      <AddButton onPress={() => { }} />
    </Container>
  )
}