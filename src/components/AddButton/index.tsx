import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Icon,
} from './styles';

interface Props extends RectButtonProps {
  onPress: () => void;
};

export function AddButton({onPress, ...rest}: Props) {
  return (

    <Container onPress={onPress} {...rest}>
      <Icon name="user-plus" />
    </Container>
  );
}