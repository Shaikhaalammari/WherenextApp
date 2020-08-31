import React, { useState } from "react";
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButton,
  AuthButtonText,
} from "./styles";

import authStore from "../../stores/authStore";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = () => {
    authStore.signup(user);
    if (authStore.user) navigation.replace("Home");
  };

  return (
    <AuthContainer>
      <AuthTitle>Sign Up</AuthTitle>
      <AuthTextInput
        onChangeText={(value) => setUser({ ...user, username: value })} // ican clean this bs i wont
        placeholder="Username"
        placeholderTextColor="#99b898"
      />
      <AuthTextInput
        onChangeText={(value) => setUser({ ...user, firstName: value })}
        placeholder="First Name"
        placeholderTextColor="#99b898"
      />
      <AuthTextInput
        onChangeText={(value) => setUser({ ...user, lastName: value })}
        placeholder="Last Name"
        placeholderTextColor="#99b898"
      />
      <AuthTextInput
        onChangeText={(value) => setUser({ ...user, email: value })}
        placeholder="E-mail"
        placeholderTextColor="#99b898"
      />
      <AuthTextInput
        onChangeText={(value) => setUser({ ...user, password: value })}
        placeholder="Password"
        placeholderTextColor="#99b898"
        secureTextEntry={true}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign up</AuthButtonText>
      </AuthButton>
    </AuthContainer>
  );
};

export default Signup;
