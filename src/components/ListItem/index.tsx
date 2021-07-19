import React from 'react';
import { TouchableOpacityProps, View } from 'react-native';

import {
  Container,
  InitialLetter,
  InitialLetterText,
  Name,
  Icon
} from './styles';

interface Props extends TouchableOpacityProps {
  name: string;
};

export function ListItem({ name, ...rest }: Props) {
  return (
    <Container {...rest}>
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