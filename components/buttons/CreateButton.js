import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AddButtonStyled } from "./styles";

const CreateButton = () => {
  const navigation = useNavigation();
  return (
    <AddButtonStyled
      onPress={() => navigation.navigate("Addtrip")}
      type="Ionicons"
      name="add"
      color="#f09ae9"
    ></AddButtonStyled>
  );
};

export default CreateButton;
