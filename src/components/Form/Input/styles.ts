import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
  padding: 8px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(16)}px;

  border-bottom-width: 1px;
  border-bottom-color:${({ theme }) => theme.colors.text};

  align-items: center;
  justify-content: center;

`;