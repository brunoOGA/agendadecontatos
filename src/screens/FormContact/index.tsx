import React, { useState } from 'react';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
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
  Label,
  LabelIcon,
  LabelText,
  Form,
  Fields,
  Divider,
} from './styles';
import { Modal } from 'react-native';
import { GroupSelectButton } from '../../components/Form/CategorySelectButton';
import { GroupSelect } from '../GroupSelect';
import { useNavigation } from '@react-navigation/native';

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

export function FormContact() {
  const [group, setGroup] = useState({
    id: 'todos',
    name: 'Todos',
  });
  const [phones, setPhones] = useState<Phone[]>([]);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [groupModalOpen, setGroupModalOpen] = useState(false);

  const navigation = useNavigation();

  function handleOpenSelectGroupModal() {
    setGroupModalOpen(true);
  }

  function handleCloseSelectGroupModal() {
    setGroupModalOpen(false);
  }

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
      <Form>
        <Fields showsVerticalScrollIndicator={false}>
          <Divider>
            <Label>
              <LabelIcon name="group" size={32} />
              <LabelText>Grupo</LabelText>
            </Label>
            <GroupSelectButton
              title={group.name}
              // onPress={handleOpenSelectGroupModal}
              onPress={() => navigation.navigate("GroupSelect")}
            />
          </Divider>
          <Divider>
            <Label>
              <LabelIcon name="user" size={32} />
              <LabelText>Nome</LabelText>
            </Label>
            <Input placeholder="Nome" />
          </Divider>
          <Divider>
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
          </Divider>
          <Divider>
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

                  <Input placeholder="Logradouro" />
                  <Input placeholder="Bairro" />
                  <Input placeholder="Cidade" />
                  <Input placeholder="Número" keyboardType="numeric" />
                </Address>

              );
            })}
          </Divider>
        </Fields>

        <Button type="success" onPress={() => {}} title="Adicionar" />
      </Form>

      {/* <Modal visible={groupModalOpen}>
        <GroupSelect
          group={group}
          setGroup={setGroup}
          closeSelectGroup={handleCloseSelectGroupModal}
        />
      </Modal> */}
    </Container>
  )
}