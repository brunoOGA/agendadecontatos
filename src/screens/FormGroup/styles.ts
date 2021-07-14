import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons'; 
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

export const Form = styled.View`
  flex: 1;
  padding: ${RFValue(48)}px ${RFValue(24)}px;

  justify-content: space-between;
`;

export const Fields = styled.View``;

export const Label = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: center;

  margin-bottom: 8px;
`;

export const LabelIcon = styled(FontAwesome)`
  color: ${({ theme }) => theme.colors.title};
`;

export const LabelText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(24)}px;
  flex: 1;
  margin-left: 8px;
`;