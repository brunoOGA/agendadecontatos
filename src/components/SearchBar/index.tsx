import React from 'react';
import { TextInputProps } from 'react-native';

import {
  Container,
  Input,
  Icon,
} from './styles';

type Props = TextInputProps;

export function SearchBar({...rest}: Props) {
  return (

    <Container >
      <Input {...rest}/>
      <Icon name="search" size={24} />
    </Container>
  );
}