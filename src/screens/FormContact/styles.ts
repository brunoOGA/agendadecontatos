import styled from 'styled-components/native';
import { Feather, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Error = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.attention};
  font-size: ${RFValue(14)}px;
  margin: 7px;
`;

export const Divider = styled.View`
  padding: 8px 0;
`;

export const Form = styled.View`
  flex: 1;
  padding: ${RFValue(24)}px;

  justify-content: space-between;
`;

export const Fields = styled.ScrollView``;

export const ContactInformation = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: center;

  margin-bottom: 8px;
`;

export const ContactInformationIcon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.title};
`;

export const ContactInformationText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(24)}px;
  flex: 1;
  margin-left: 8px;
`;

export const ContactInformationAddButton= styled(RectButton)``;

export const ContactInformationAddButtonIcon= styled(Feather)`
  color: ${({ theme }) => theme.colors.success};
`;

export const Information = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 8px;
`;

export const ContactInformationRemoveButton= styled(RectButton)`
`;

export const ContactInformationRemoveButtonIcon= styled(Feather)`
  color: ${({ theme }) => theme.colors.attention};
`;

export const ContactInformationSearchButton= styled(RectButton)`
`;

export const ContactInformationSearchButtonIcon= styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Address = styled.View`
  border-radius: 8px;
  border: 1px solid  ${({ theme }) => theme.colors.text};
  padding: 8px;
  margin-bottom: 8px;
`;




