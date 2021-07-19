import styled, { css } from 'styled-components/native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface Address {
  cep: string;
  city: string;
  street: string;
  district: string;
  number: number;
}

interface Phone {
  number: string;
}

interface IContact {
  id: string;
  name: string;
  phones: Phone[];
  addresses: Address[];
}


interface Props {
  flag: boolean;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  height: ${RFPercentage(36)}px;
  padding: ${RFValue(40)}px ${RFValue(16)}px 0 ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: flex-start;
  align-items: center;
`;

export const SignOutButton = styled(RectButton)``;

export const SignOutIcon = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.attention};
`;

export const Title = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
`;

export const TitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.shape};
  font-size:  ${RFValue(32)}px;
`;

export const HeaderInfo = styled.View`
  margin-top: ${RFValue(24)}px;
`;

export const Groups = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(28)}px;
`;

export const GroupButton = styled.TouchableOpacity`
  width: ${RFValue(124)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 8px;
  margin-right: 16px;

  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;

export const GroupCircleIcon = styled.View`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: ${RFValue(24)}px;
  background-color: ${({ theme }) => theme.colors.secondary};

  align-items: center;
  justify-content: center;
  margin-top: 4px;
`;

export const AddGroupIcon = styled(FontAwesome)`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(32)}px;
`;

export const GroupButtonText = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(16)}px;
`;

export const InitialLetter = styled.View`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: ${RFValue(24)}px;
  background-color: ${({ theme }) => theme.colors.secondary};

  align-items: center;
  justify-content: center;
  margin-top: 4px;
`;

export const InitialLetterText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(32)}px;
`;

export const ContactsList = styled(FlatList as new () => FlatList<IContact>) <Props>`
  ${({ flag }) => flag ? 
    css` 
      margin-top: ${RFPercentage(10)}px;
    `
    :
    css`
      position: absolute;
      width: 100%;
      margin-top: ${RFPercentage(28)}px;
    `
  }
`;

export const Separator = styled.View`
  width: 100%;
  margin-bottom: 8px;
`;