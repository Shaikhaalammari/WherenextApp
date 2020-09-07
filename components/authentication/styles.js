import styled from "styled-components/native";

export const AuthBackground = styled.ImageBackground`
  width: 100%;
  height: 90%;
  flex: 1;
`;
export const OverLayContainer = styled.View`
  flex: 1;
  background-color: rgba(100, 40, 60, 0.4);
`;

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthTitle = styled.Text`
  color: white;
  font-size: 40px;
  margin-bottom: 20px;
  border-bottom-color: #91d18b;
  text-shadow: 2px 2px grey;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: white
  border-bottom-color: #3b6978;
  border-bottom-width: 1px;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  margin-top: 30px;
  border-radius: 50px
  background: rgba(255,255,255, 0.6)
`;

export const AuthButtonText = styled.Text`
  color: #838383;

  font-size: 18px;
`;

export const AuthOther = styled.Text`
  color: #ff6833;
  margin-top: 40px;
`;
