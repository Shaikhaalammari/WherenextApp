import React, { useState } from "react";
import {
  AuthBackground,
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButton,
  AuthButtonText,
  AuthOther,
} from "./styles";

import authStore from "../../stores/authStore";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = () => {
    authStore.signup(user);
    if (authStore.user) navigation.replace("Trips");
  };

  return (
    <AuthBackground
      source={{
        uri:
          "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&w=1000&q=80",
      }}
    >
      <AuthContainer>
        <AuthTitle>Sign Up</AuthTitle>
        <AuthTextInput
          onChangeText={(value) => setUser({ ...user, username: value })} // ican clean this bs i wont
          placeholder="Username"
        />
        <AuthTextInput
          onChangeText={(value) => setUser({ ...user, firstName: value })}
          placeholder="First Name"
        />
        <AuthTextInput
          onChangeText={(value) => setUser({ ...user, lastName: value })}
          placeholder="Last Name"
        />
        <AuthTextInput
          onChangeText={(value) => setUser({ ...user, email: value })}
          placeholder="E-mail"
        />
        <AuthTextInput
          onChangeText={(value) => setUser({ ...user, password: value })}
          placeholder="Password"
          secureTextEntry={true}
        />
        <AuthButton onPress={handleSubmit}>
          <AuthButtonText>Sign up</AuthButtonText>
        </AuthButton>
        <AuthOther onPress={() => navigation.navigate("Signin")}>
          Already have an Acount ? click here to Sign in
        </AuthOther>
      </AuthContainer>
    </AuthBackground>
  );
};

export default Signup;
