import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.shape};

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 8px;
  border-radius: 8px;
`;

export const InitialLetter = styled.View`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: ${RFValue(24)}px;
  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: center;
`;

export const InitialLetterText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(32)}px;
`;

export const Name = styled.Text`
  flex: 1;
  margin: 0 16px;

  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(16)}px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
`;