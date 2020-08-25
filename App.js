import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";

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

export default function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <Home />
    </ThemeProvider>
  );
}
