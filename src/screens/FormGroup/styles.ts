import styled from 'styled-components/native';
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