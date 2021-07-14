import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  ButtonText,
} from './styles';

interface Props extends RectButtonProps {
  onPress: () => void;
  title: string;
  type: 'success' | 'attention'
};

export function Button({title, type, onPress, ...rest}: Props) {
  return (
    <Container onPress={onPress} type={type} {...rest} >
      <ButtonText >
        {title}
      </ButtonText>
    </Container>
  );
}