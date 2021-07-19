import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { 
  Container,
  Group,
  Icon,
} from './styles';

interface Props extends RectButtonProps{
  title: string;
  onPress: () => void;
}

export function GroupSelectButton({ title, onPress }: Props) {
  return (
    <Container onPress={onPress}>
        <Group>{title}</Group>
        <Icon name="chevron-down" />
    </Container>
  )
}