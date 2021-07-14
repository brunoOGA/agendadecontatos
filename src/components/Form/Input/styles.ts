import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const Container = styled(TextInput)`
  padding: 8px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
  font-size: 16px;

  border-bottom-width: 1px;
  border-bottom-color:${({ theme }) => theme.colors.text};

  align-items: center;
  justify-content: center;

`;