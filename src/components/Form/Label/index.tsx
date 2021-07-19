import React from 'react';

import {
  Container,
  LabelIcon,
  LabelText
} from './styles';

interface Props {
  title: string;
  icon: string;
}

export function Label({title, icon}: Props) {
  return (
    <Container>
      <LabelIcon name={icon} size={32} />
      <LabelText>{title}</LabelText>
    </Container>
  );
}