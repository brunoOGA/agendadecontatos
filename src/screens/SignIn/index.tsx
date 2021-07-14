import React from 'react';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  LoginButton,
  ButtonIcon,
  ButtonText,
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

export function SignIn() {
  const { user } = useAuth();

  console.log(user)

  return (
    <Container>
      <LoginButton>
        <ButtonIcon name="google" size={32} />
        <ButtonText>Entrar com conta Google</ButtonText>
      </LoginButton>
    </Container>
  )
}