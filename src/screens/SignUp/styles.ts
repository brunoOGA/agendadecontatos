import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(32)}px;
  text-align: center;
`;

export const Divider = styled.View`
  padding: 8px 0;
`;

export const Form = styled.View`
  flex: 1;
  padding: ${RFValue(48)}px ${RFValue(24)}px;

  justify-content: space-between;
`;

export const Fields = styled.View``;

export const FormTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(32)}px;
`;

export const Footer = styled.View`
  width: 100%; 
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

export const FooterText = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const FooterLink = styled.TouchableOpacity`

`;

export const FooterLinkText = styled.Text`
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.primary};

`;