import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  width: ${RFValue(64)}px;
  height: ${RFValue(64)}px;
  border-radius: ${RFValue(32)}px;
  background-color: ${({ theme }) => theme.colors.success};

  align-items: center;
  justify-content: center;
  
  position: absolute;
  bottom: ${RFValue(48)}px;
  right: ${RFValue(48)}px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(32)}px;
`;