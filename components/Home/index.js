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
  Title,
  Hello,
} from "./styles";

import authStore from "../../stores/authStore";

const Home = () => {
  // if (authStore.user) navigation.replace("Profile");

  return (
    <HomeBackground
      source={{
        uri:
          "https://www.pixelstalk.net/wp-content/uploads/2016/09/Flying-Airplane-Iphone-Wallpaper.jpg",
      }}
    >
      <TopStyling>
        <Hello>
          Hello {authStore.user ? authStore.user.username : "Guest"}, where
          next?
        </Hello>
      </TopStyling>

      <BottomStyling>
        <Title>Discover your next trip...</Title>
      </BottomStyling>
    </HomeBackground>
  );
};

export default observer(Home);
