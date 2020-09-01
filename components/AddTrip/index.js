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

const AddTrip = ({ navigation }) => {
  const [trip, setTrip] = useState({
    title: "",
    // date: "",
    location: "",
    image: "",
  });

  const handleSubmit = async () => {
    // REVIEW: Since it's working delete console log
    // console.log("inside handle submit", trip);
    await tripStore.addTrip(trip);
    navigation.replace("Trips");
  };

  // REVIEW: Remove commented out code
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
        onChangeText={(value) => setTrip({ ...trip, location: value })}
        placeholder="Location"
        placeholderTextColor="#99b898"
      />
      <TripTextInput
        onChangeText={(value) => setTrip({ ...trip, image: value })}
        placeholder="Image"
        placeholderTextColor="#99b898"
      />
      <AddButton onPress={handleSubmit}>
        <AddButtonText>Add Trip</AddButtonText>
      </AddButton>
    </TripContainer>
  );
};

export default observer(AddTrip);
