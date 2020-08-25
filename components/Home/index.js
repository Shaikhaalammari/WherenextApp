import React from "react";
// Styling
import { ImageBackground, View, Text } from "react-native";
import {
  HomeBackground,
  TopStyling,
  BottomStyling,
  ButtonStyled,
} from "./styles";

const Home = () => {
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
        <ButtonStyled onPress={() => alert("Take me to my next destination ")}>
          Explore
        </ButtonStyled>
      </BottomStyling>
    </HomeBackground>
  );
};

export default Home;
