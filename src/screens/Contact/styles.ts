import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 24px;
`;

export const Divider = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 16px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(18)}px;
`;

export const Phones = styled.View``;

export const Addresses = styled.View`
`;

export const Address = styled.View`

border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  margin-bottom: 16px;
  padding: 16px;
`;
