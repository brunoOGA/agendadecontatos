import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props  {
  type: 'success' | 'attention'
};

export const Container = styled(RectButton)<Props>`
  width: 100%;

  align-items: center;
  justify-content: center;
  
  padding: 16px;
  border-radius: 8px;

  ${({ type }) => 
   type === 'success' && css`
      background-color: ${({ theme }) => theme.colors.success};
    `
  }

${({ type }) => 
   type === 'attention' && css`
      background-color: ${({ theme }) => theme.colors.attention};
    `
  }
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
`;