import React, { useState } from "react";
import { observer } from "mobx-react";

// Styles
import {
  TripContainer,
  TripTitle,
  TripTextInput,
  AddButton,
  AddButtonText,
} from "./styles";

// Stores
import tripStore from "../../stores/tripStore";
import ImgPicker from "../images/ImgPicker";

const AddTrip = ({ navigation }) => {
  const [trip, setTrip] = useState({
    title: "",
    // date: "",
    detail: "",
    image: "",
  });

  const handleSubmit = async () => {
    // console.log("inside handle submit", trip);
    await tripStore.addTrip(trip);
    navigation.replace("Trips");
  };

  //   const handleChange = async () => {
  //     await tripStore.updateTrip(trip);
  //     navigation.replace("Trips");
  //   };

  return (
    <TripContainer>
      <TripTitle>Add New Trip</TripTitle>
      <TripTextInput
        onChangeText={(value) => setTrip({ ...trip, title: value })}
        placeholder="Title"
        placeholderTextColor="#99b898"
      />
      {/* <TripTextInput
        onChangeText={(value) => setTrip({ ...trip, date: value })}
        placeholder="Date"
        placeholderTextColor="#99b898"
      /> */}
      <TripTextInput
        onChangeText={(value) => setTrip({ ...trip, detail: value })}
        placeholder="Detail"
        placeholderTextColor="#99b898"
      />
      <TripTextInput
        onChangeText={(value) => setTrip({ ...trip, image: value })}
        placeholder="Image"
        placeholderTextColor="#99b898"
      />
      <ImgPicker />
      <AddButton onPress={handleSubmit}>
        <AddButtonText>Add Trip</AddButtonText>
      </AddButton>
    </TripContainer>
  );
};

export default observer(AddTrip);
