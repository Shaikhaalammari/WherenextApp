import React from "react";
import { observer } from "mobx-react";
//Styling
import { Text } from "react-native";
import {
  HomeBackground,
  TopStyling,
  BottomStyling,
  ButtonStyled,
  AuthOther,
} from "./styles";

import authStore from "../../stores/authStore";

const Home = ({ navigation }) => {
  if (authStore.user) navigation.replace("Profile");

  return (
    <HomeBackground
      source={{
        uri:
          "https://i.pinimg.com/564x/4a/03/47/4a0347394515e94a245aeaa5868aaae7.jpg",
      }}
    >
      <TopStyling>
        <Text style={{ color: "#fff", fontSize: 38, textAlign: "center" }}>
          Where Next..?
        </Text>
      </TopStyling>
      <BottomStyling>
        <ButtonStyled onPress={() => navigation.navigate("Trips")}>
          Let's Explore!
        </ButtonStyled>
        <ButtonStyled onPress={() => navigation.navigate("Discovers")}>
          Discover List ...
        </ButtonStyled>
        <AuthOther onPress={() => navigation.navigate("Signin")}>
          Sign in
        </AuthOther>
      </BottomStyling>
    </HomeBackground>
  );
};

export default observer(Home);
