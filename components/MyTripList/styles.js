import styled from "styled-components/native";
import { Icon } from "native-base";

export const Backgroundcolor = styled.View`
  background-color: #323846;
  height: 100%;
  width: 100%;
`;

export const MyTripContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding-right: 60px;
  padding-left: 60px;
`;

export const MyTripTitle = styled.Text`
  color: #88d9f3;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: #91d18b;
`;

export const MyTripTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: #88d9f3;
  border-bottom-color: #3b6978;
  border-bottom-width: 1px;
`;

export const AuthOther = styled.Text`
  color: #99b898;
  margin-top: 15px;
`;

export const MyTripItemStyled = styled.Text`
  color: #88d9f3;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const CardWrapping = styled.Text`
  box-shadow: 3px 3px #99b898;
  margin-top: 5px;
  margin-left: 10px;
`;
export const MyTripTextStyled = styled.Text`
  color: #88d9f3;
  font-size: 25px;
  padding-top: 60px;
  margin-left: 250px;
  margin-bottom: 70px;
  margin-right: -90px;
  margin-top: -70px;
`;
export const ButtonsStyle = styled.Text`
  margin-left: 50%;
  position: absolute;
  left: 100px;
  top: 150px;
  display: flex;
  flex-wrap: wrap;
  color: #88d9f3;
`;

export const TrashIcon = styled(Icon)`
  color: #e5e5e5;
`;
