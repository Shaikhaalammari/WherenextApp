import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AddButtonStyled } from "./styles";

const CreateButton = () => {
  const navigation = useNavigation();
  return (
    <AddButtonStyled
      onPress={() => navigation.navigate("Addtrip")}
      type="Ionicons"
      name="md-add-circle"
    ></AddButtonStyled>
  );
};

export default CreateButton;
