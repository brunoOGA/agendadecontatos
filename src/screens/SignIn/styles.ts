import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
`;

export const LoginButton = styled(RectButton)`
  flex-direction: row;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.shape};

  padding: 16px;
  border-radius: 8px;
`;
export const ButtonIcon = styled(AntDesign)`
  margin-right: 16px;
`;
export const ButtonText = styled.Text`
  border-left-width: 1px;
  border-color: ${({ theme }) => theme.colors.title};
  padding-left: 16px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
`;
