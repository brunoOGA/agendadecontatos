import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { Entypo } from '@expo/vector-icons';

export const Container = styled.View`
flex-direction: row;

align-items: center;
justify-content: center;

margin-bottom: 8px;
`;

export const LabelIcon = styled(Entypo)`
color: ${({ theme }) => theme.colors.title};
`;

export const LabelText = styled.Text`
font-family: ${({ theme }) => theme.fonts.medium};
color: ${({ theme }) => theme.colors.title};
font-size: ${RFValue(24)}px;
flex: 1;
margin-left: 8px;
`;