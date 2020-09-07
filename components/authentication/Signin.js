import React, { useState } from "react";
import { observer } from "mobx-react";

//STYLES
import {
  AuthBackground,
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButton,
  AuthButtonText,
  AuthOther,
} from "./styles";

//STORES
import authStore from "../../stores/authStore";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signin(user);
  };

  if (authStore.user) navigation.replace("Profile");

  return (
    <AuthBackground
      source={{
        uri:
          "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&w=1000&q=80",
      }}
    >
      <AuthContainer>
        <AuthTitle>Sign in</AuthTitle>
        <AuthTextInput
          onChangeText={(username) => setUser({ ...user, username })}
          placeholder="Username"
          placeholderTextColor="grey"
        />
        <AuthTextInput
          onChangeText={(password) => setUser({ ...user, password })}
          placeholder="Password"
          placeholderTextColor="grey"
          secureTextEntry={true}
        />
        <AuthButton onPress={handleSubmit}>
          <AuthButtonText>Sign in</AuthButtonText>
        </AuthButton>
        <AuthOther onPress={() => navigation.navigate("Signup")}>
          Click here to register!
        </AuthOther>
      </AuthContainer>
    </AuthBackground>
  );
};

export default observer(Signin);
