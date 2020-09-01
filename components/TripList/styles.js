import styled from "styled-components/native";
import { Icon } from "native-base";

export const TripContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding-right: 60px;
  padding-left: 60px;
`;

export const TripTitle = styled.Text`
  color: #838383;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: #91d18b;
`;

export const TripTextInput = styled.TextInput`
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
  margin-top: 15px;
`;

export const TripItemStyled = styled.Text`
  color: #000000;
  font-size: 18;
  margin-top: 20;
  margin-bottom: 10;
  margin-left: 10;
`;

export const TripTextStyled = styled.Text`
  text-align: center;
  color: #99b898;
`;

export const TrashIcon = styled(Icon)`
  color: #e5e5e5;
`;
