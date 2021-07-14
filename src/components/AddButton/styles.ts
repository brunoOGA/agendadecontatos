import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.success};

  align-items: center;
  justify-content: center;
  
  position: absolute;
  bottom: 50px;
  right: 50px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.shape};
`;