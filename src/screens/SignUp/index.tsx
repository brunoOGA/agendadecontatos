import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { InputForm } from '../../components/Form/InputForm';
import { Label } from '../../components/Form/Label';
import { Button } from '../../components/Form/Button';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Form,
  Fields,
  FormTitle,
  Title,
  Divider,
  Footer,
  FooterText,
  FooterLink,
  FooterLinkText,
} from './styles';

interface FormData {
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  email: Yup
    .string()
    .email("Por favor insira um email válido")
    .required('É necessário um endereço de e-mail'),
  password: Yup
    .string()
    .min(8, ({ min }) => `A senha deve ter pelo menos ${min} caracteres`)
    .required('Senha requerida'),
});

export function SignUp() {
  const { createUserWithEmailAndPassword } = useAuth();
  const { goBack } = useNavigation();
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function handleRegister(form: FormData) {
    createUserWithEmailAndPassword(form.email, form.password);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <Container>
        <Form>
          <Divider>
            <Title>
              Agenda de Contatos
            </Title>
          </Divider>
          <Fields>
            <Divider>
              <FormTitle>
                Criar conta
              </FormTitle>
            </Divider>
            <Divider>
              <Label title="E-mail" icon="mail" />
              <InputForm
                keyboardType="email-address"
                placeholder="E-mail"
                autoCapitalize="none"
                control={control}
                name="email"
                error={errors.email && errors.email.message}
              />
            </Divider>
            <Divider>
              <Label title="Senha" icon="lock" />
              <InputForm
                placeholder="Senha"
                secureTextEntry={true}
                control={control}
                name="password"
                error={errors.password && errors.password.message}
              />
            </Divider>
            <Divider>
              <Footer>
                <FooterText >Você já tem uma conta? </FooterText>
                <FooterLink onPress={() => goBack()}>
                  <FooterLinkText>Fazer login</FooterLinkText>
                </FooterLink>
              </Footer>
            </Divider>
          </Fields>

          <Button type="success" onPress={handleSubmit(handleRegister)} title="Criar sua conta" />
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  )
}