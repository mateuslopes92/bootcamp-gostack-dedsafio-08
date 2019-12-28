import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};
`;

export const Product = styled.View`
  background: #fff;
  width: 220px;
  margin: 60px 10px;
  border-radius: 4px;
  padding: 15px;
`;

export const ProductImage = styled.Image`
  width: 180px;
  height: 180px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  margin: 14px 0;
  margin-bottom: 14px;
  font-size: 20px;
  font-weight: bold;
`;

export const ProductButton = styled.TouchableOpacity`
  background: ${colors.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ButtonAdd = styled.View`
  flex-direction: row;
  padding: 10px;
  background: ${darken(0.03, colors.primary)};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const ProductAmount = styled.Text`
  color: #fff;
  margin: 0 4px 0 4px;
`;

export const ProductButtonTitle = styled.Text`
  flex: 1;
  text-align: center;
  color: #fff;
  font-size: 16px;
`;
