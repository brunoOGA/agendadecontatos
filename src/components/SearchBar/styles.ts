import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.shape};

  flex-direction: row;
  align-items: center;
`;

export const Input = styled(TextInput)`
  flex: 1;
  padding: ${RFValue(16)}px;

  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(16)}px;

  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Feather)`
  margin-right: 16px;
  color: ${({ theme }) => theme.colors.primary};
`;