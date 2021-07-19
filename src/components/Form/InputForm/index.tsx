import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { maskCep, maskPhone } from '../../../utils/masks';
import { Input } from '../Input';

import {
  Container,
  Error
} from './styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error?: string;
  mask?: "cep" | "phone";
}


interface Props extends TextInputProps {
  mask?: "cep" | "phone";
};

export function InputForm({
  control,
  name,
  error,
  mask,
  ...rest
}: Props) {

  function handleChange(value: string) {
    if(mask === "cep") {
      return maskCep(value);
    } else if(mask === "phone") {
      return maskPhone(value);
    } else {
      return value;
    }
  }
  
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value }}) => (
          <Input 
            onChangeText={(value) => {
              onChange(handleChange(value))
            }} 
            value={value} 
            {...rest}
          />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  )
}