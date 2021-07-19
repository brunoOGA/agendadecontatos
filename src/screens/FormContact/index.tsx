import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '../../components/Form/Button';
import { InputForm } from '../../components/Form/InputForm';
import { useFieldArray } from 'react-hook-form';
import { GroupSelectButton } from '../../components/Form/GroupSelectButton';
import { Label } from '../../components/Form/Label';
import { searchCEP } from '../../utils/searchCep';
import { useGroup } from '../../hooks/group';
import { useContact } from '../../hooks/contact';

import {
  Container,
  Error,
  ContactInformation,
  ContactInformationIcon,
  ContactInformationText,
  ContactInformationAddButton,
  ContactInformationAddButtonIcon,
  Information,
  ContactInformationRemoveButton,
  ContactInformationRemoveButtonIcon,
  ContactInformationSearchButton,
  ContactInformationSearchButtonIcon,
  Address,
  Form,
  Fields,
  Divider,
} from './styles';

interface Address {
  cep: string;
  city: string;
  street: string;
  district: string;
  number: number;
}

interface Phone {
  number: string;
}

interface FormData {
  name: string;
  phones: Phone[];
  addresses: Address[];
}

const schemaAddress = Yup.object().shape({
  cep: Yup
    .string()
    .length(9, 'CEP é composto por 9 dígitos')
    .required('O CEP é obrigatório'),
  city: Yup
    .string()
    .required('O cidade é obrigatório'),
  street: Yup
    .string()
    .required('O logradouro é obrigatório'),
  district: Yup
    .string()
    .required('O bairro é obrigatório'),
  number: Yup
    .number()
    .typeError("Informe um valor numérico")
    .required('O número é obrigatório'),
});

const schemaPhone = Yup.object().shape({
  number: Yup
    .string()
    .min(13, ({ min }) => `O telefone deve ter pelo menos ${min} caracteres`)
    .required('O telefone é obrigatório'),
});

const schema = Yup.object().shape({
  name: Yup
    .string()
    .min(3, ({ min }) => `O nome deve ter pelo menos ${min} caracteres`)
    .required('É necessário um nome'),
  addresses: Yup
    .array()
    .of(schemaAddress),
  phones: Yup
    .array()
    .of(schemaPhone),
});

export function FormContact() {
  const { goBack, navigate } = useNavigation();
  const { group, setGroup } = useGroup();
  const { createContact } = useContact();
  const [error, setError] = useState('')

  const { handleSubmit, control, getValues, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const phonesFields = useFieldArray({
    control,
    name: "phones"
  })

  const addressesFields = useFieldArray({
    control,
    name: "addresses"
  })

  function handleRegister(form: FormData) {
    if (!group.id) {
      setError('Selecione um grupo');
      return;
    }
    createContact(form);
    setGroup({
      id: '',
      name: ''
    });
    goBack();
  }

  async function handleSearchCEP(index: number) {
    const addresses = getValues("addresses");

    const address = await searchCEP(addresses[index].cep);
    
    if (address) {
      addressesFields.update(index, {
        ...address
      })
    }
  }

  useEffect(() => {
    if (group.id) {
      setError('');
    }
  }, [group])

  return (
      <Container>
        <Form>
          <Fields showsVerticalScrollIndicator={false}>
            <Divider>
              <Label icon="users" title="Grupo" />
              <GroupSelectButton
                title={group.name}
                onPress={() => navigate("GroupSelect")}
              />
              {error.length !== 0 && <Error>{error}</Error>}
            </Divider>
            <Divider>
              <Label title="Nome" icon="user" />
              <InputForm
                placeholder="Nome"
                control={control}
                name="name"
                error={errors.name && errors.name.message}
              />
            </Divider>
            <Divider>
              <ContactInformation>
                <ContactInformationIcon name="phone" size={32} />
                <ContactInformationText>
                  Telefone
                </ContactInformationText>
                <ContactInformationAddButton onPress={() => phonesFields.append({
                  number: "",
                })}>
                  <ContactInformationAddButtonIcon name="plus" size={32} />
                </ContactInformationAddButton>
              </ContactInformation>

              {phonesFields.fields.map((phone, index) => {
                return (
                  <Information key={phone.id}>
                    <ContactInformationRemoveButton onPress={() => phonesFields.remove(index)}>
                      <ContactInformationRemoveButtonIcon name="minus" size={32} />
                    </ContactInformationRemoveButton>
                    <InputForm
                      mask="phone"
                      maxLength={15}
                      placeholder="Telefone"
                      keyboardType="phone-pad"
                      control={control}
                      name={`phones[${index}].number`}
                      error={errors?.phones?.[index]?.number
                        && errors.phones[index].number.message}
                    />
                  </Information>
                );
              })}
            </Divider>
            <Divider>
              <ContactInformation>
                <ContactInformationIcon name="location" size={32} />
                <ContactInformationText>
                  Endereço
                </ContactInformationText>
                <ContactInformationAddButton onPress={() => addressesFields.append({
                  cep: "",
                  city: "",
                  street: "",
                  district: "",
                  number: "",
                })}>
                  <ContactInformationAddButtonIcon name="plus" size={32} />
                </ContactInformationAddButton>
              </ContactInformation>

              {addressesFields.fields.map((address, index) => {
                return (
                  <Address key={address.id}>
                    <Information>
                      <ContactInformationRemoveButton onPress={() => addressesFields.remove(index)}>
                        <ContactInformationRemoveButtonIcon name="minus" size={32} />
                      </ContactInformationRemoveButton>
                      <View style={{ flex: 1 }}>
                        <InputForm
                          mask="cep"
                          maxLength={9}
                          placeholder="CEP"
                          keyboardType="numeric"
                          control={control}
                          name={`addresses[${index}].cep`}
                          error={errors?.addresses?.[index]?.cep
                            && errors.addresses[index].cep.message}
                        />
                      </View>
                      <ContactInformationSearchButton onPress={() => handleSearchCEP(index)}>
                        <ContactInformationSearchButtonIcon name="search" size={32} />
                      </ContactInformationSearchButton>
                    </Information>
                    <InputForm
                      placeholder="Cidade"
                      control={control}
                      name={`addresses[${index}].city`}
                      error={errors?.addresses?.[index]?.city
                        && errors.addresses[index].city.message}
                    />
                    <InputForm
                      placeholder="Bairro"
                      control={control}
                      name={`addresses[${index}].district`}
                      error={errors?.addresses?.[index]?.district
                        && errors.addresses[index].district.message}
                    />
                    <InputForm
                      placeholder="Logradouro"
                      control={control}
                      name={`addresses[${index}].street`}
                      error={errors?.addresses?.[index]?.street
                        && errors.addresses[index].street.message}
                    />
                    <InputForm
                      keyboardType="numeric"
                      placeholder="Número"
                      control={control}
                      name={`addresses[${index}].number`}
                      error={errors?.addresses?.[index]?.number
                        && errors.addresses[index].number.message}
                    />
                  </Address>
                );
              })}
            </Divider>
          </Fields>

          <Button
            type="success"
            onPress={handleSubmit(handleRegister)}
            title="Adicionar"
          />
        </Form>
      </Container>
  )
}