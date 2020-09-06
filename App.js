import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "styled-components";
import RootNavigator from "./components/Navigation";
import ImgPicker from "./components/images/ImgPicker";

const theme = {
  light: {
    mainColor: "#242424", // font color
    backgroundColor: "#fefafb", // background color fat7
    priceColor: "#654062",
    red: "#fa1616",
    lightPink: "#df5e88",
    update: "#438a5e",
  },
  dark: {
    mainColor: "#fefafb", // font color
    backgroundColor: "#242424", //background color dark
    priceColor: " #654062",
    red: "#fa1616",
    lightPink: "#df5e88",
    update: "#438a5e",
  },
};
const Stack = createStackNavigator();
console.log("App -> Stack", Stack);
const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
      {/* <ImgPicker /> */}
    </ThemeProvider>
  );
}
