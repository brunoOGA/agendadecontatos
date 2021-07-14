import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export const Container = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.shape};

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 8px;
  border-radius: 8px;
`;

export const InitialLetter = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: center;
`;

export const InitialLetterText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.shape};
  font-size: 32px;
`;

export const Name = styled.Text`
  flex: 1;
  margin: 0 16px;

  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
  font-size: 16px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
`;