import styled from "styled-components/native";
import { Icon } from "native-base";

export const DiscoverContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: #88d9f3;
  padding-right: 60px;
  padding-left: 60px;
`;

export const DiscoverTitle = styled.Text`
  color: #838383;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: #91d18b;
`;

export const DiscoverTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: #3b6978;
  border-bottom-color: #3b6978;
  border-bottom-width: 1px;
`;

export const AuthOther = styled.Text`
  color: #99b898;
  margin-top: 15pxpx;
`;

export const DiscoverItemStyled = styled.Text`
  color: #000000;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const DiscoverTextStyled = styled.Text`
  text-align: center;
  color: #323846;
  font-size: 20px;
  margin-left: 20px;
`;

export const DiscoverTripTitle = styled.Text`
  text-align: center;
  color: #88d9f3;
  font-size: 40px;
  margin-right: 10px;
`;

export const TrashIcon = styled(Icon)`
  color: #e5e5e5;
`;
