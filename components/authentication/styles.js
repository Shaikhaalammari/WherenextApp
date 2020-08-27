import styled from "styled-components/native";

export const AuthOther = styled.Text`
  color: pink;
  margin-top: 15px;
  font-size: 12px;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 10px;
  background-color: pink;
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: pink;
  border-bottom-color: pink;
  border-bottom-width: 1px;
`;

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthTitle = styled.Text`
  color: pink;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: pink;
`;
