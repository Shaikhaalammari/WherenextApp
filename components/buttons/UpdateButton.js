import React from "react";
import { UpdateButtonStyled, UpdateButtonText } from "./styles";
import { useNavigation } from "@react-navigation/native";

const UpdateButton = ({ trip }) => {
  const navigation = useNavigation();
  return (
    <UpdateButtonStyled
      title="Update"
      onPress={() => navigation.navigate("Updatetrip", { oldTrip: trip })}
      type="MaterialCommunityIcons"
      name="update"
      color="#f09ae9"
    ></UpdateButtonStyled>
  );
};

export default UpdateButton;
