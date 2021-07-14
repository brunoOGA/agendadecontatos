import styled from 'styled-components/native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 40px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

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
  color: ${({ theme }) => theme.colors.title};
  font-size: 24px;
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


export const Address = styled.View`
  border-radius: 8px;
  border: 1px solid  ${({ theme }) => theme.colors.text};
  padding: 8px;
  margin-bottom: 8px;
`;
