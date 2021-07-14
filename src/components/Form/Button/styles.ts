import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.success};

  align-items: center;
  justify-content: center;
  
  padding: 16px;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 20px;
`;