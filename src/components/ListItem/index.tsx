import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  InitialLetter,
  InitialLetterText,
  Name,
  Icon
} from './styles';

interface Props extends RectButtonProps {
  name: string;
  onPress: () => void;
};

export function ListItem({onPress, name, ...rest}: Props) {
  return (

    <Container onPress={onPress} {...rest}>
      <InitialLetter>
        <InitialLetterText>
          {name[0].toUpperCase()}
        </InitialLetterText>
      </InitialLetter>
      <Name>
        {name}
      </Name>
      <Icon name="chevron-right" size={24} />
    </Container>
  );
}