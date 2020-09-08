import styled from "styled-components/native";
import { Icon } from "native-base";

export const Backgroundcolor = styled.View`
  background-color: #557c83;
  height: 100%;
  width: 100%;
`;
export const UsernameStyled = styled.Text`
  text-align: left;
  color: #323846;
  font-size: 30px;
  margin-top: 20px;
  margin-right: 35px;
  margin-bottom: 1px;
  font-weight: bold;
  align-items: center;
`;

export const BioStyled = styled.Text`
  text-align: left;
  color: #88d9f3;
  font-size: 20px;
  margin-top: 40px;
  padding-right: 20px;
  margin-bottom: 14px;
`;

export const ProfileTextStyles = styled.Text`
  text-align: center;
  color: #88d9f3;
  font-size: 30px;
`;

export const ProfileItemStyles = styled.Text`
  color: #88d9f3;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const ProfileSignoutBtn = styled(Icon)`
  color: #88d9f3;
  margin-top: 40px;
  margin-left: 20px;
`;
