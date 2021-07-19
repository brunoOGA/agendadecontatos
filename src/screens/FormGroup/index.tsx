
import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '../../components/Form/Button';
import { InputForm } from '../../components/Form/InputForm';
import { useGroup } from '../../hooks/group';
import { Label } from '../../components/Form/Label';

import {
  Container,
  Form,
  Fields,
} from './styles';

interface FormData {
  name: string;
}

const schema = Yup.object().shape({
  name: Yup
    .string()
    .min(3, ({ min }) => `O nome deve ter pelo menos ${min} caracteres`)
    .required('É necessário um nome'),

});


export function FormGroup() {
  const { createGroup } = useGroup();
  const { goBack } = useNavigation();
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  async function handleRegister(form: FormData) {
    await createGroup(form);
    goBack();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <Container>
        <Form>
          <Fields>
            <Label title="Nome" icon="users"/>
            <InputForm
              placeholder="Nome"
              control={control}
              name="name"
              error={errors.name && errors.name.message}
            />
          </Fields>

          <Button
            type="success"
            onPress={handleSubmit(handleRegister)}
            title="Adicionar"
          />
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  )
}