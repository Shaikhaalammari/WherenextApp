import React from "react";
import { Button, Alert } from "react-native";
import { UpdateButtonStyled, UpdateButtonText } from "./styles";
import { useNavigation } from "@react-navigation/native";

const UpdateButton = ({ trip }) => {
  const navigation = useNavigation();
  return (
    <UpdateButtonStyled
      title="Update"
      onPress={() => navigation.navigate("Updatetrip", { oldTrip: trip })}
    >
      <UpdateButtonText>Update</UpdateButtonText>
    </UpdateButtonStyled>
  );
};

export default UpdateButton;
