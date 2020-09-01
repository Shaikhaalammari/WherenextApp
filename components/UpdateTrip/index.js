import React, { useState } from "react";
import { observer } from "mobx-react";

// Styles
import {
  TripContainer,
  TripTitle,
  TripTextInput,
  UpdateButton,
  UpdateButtonText,
} from "./styles";

// Stores
import tripStore from "../../stores/tripStore";

const UpdateTrip = ({ navigation, route }) => {
  const { oldTrip } = route.params;
  console.log("updatedTrip", route.params);

  const [trip, setTrip] = useState(
    oldTrip ?? {
      title: "",
      image: "",
      // date: "",
      // location: "",
    }
  );

  const handleUpdate = async () => {
    await tripStore.updateTrip(trip);
    navigation.goBack();
  };

  return (
    <TripContainer>
      <TripTitle>Update Trip</TripTitle>
      <TripTextInput
        onChangeText={(value) => setTrip({ ...trip, title: value })}
        placeholder="Title"
        placeholderTextColor="#99b898"
        value={trip.title}
      />
      <TripTextInput
        onChangeText={(value) => setTrip({ ...trip, image: value })}
        placeholder="Image"
        placeholderTextColor="#99b898"
        value={trip.image}
      />
      {/* <TripTextInput
        onChangeText={(value) => setTrip({ ...trip, date: value })}
        placeholder="Date"
        placeholderTextColor="#99b898"
      /> */}
      {/* <TripTextInput
        onChangeText={(value) => setTrip({ ...trip, location: value })}
        placeholder="Location"
        placeholderTextColor="#99b898"
      /> */}
      <UpdateButton onPress={handleUpdate}>
        <UpdateButtonText>Update Trip</UpdateButtonText>
      </UpdateButton>
    </TripContainer>
  );
};

export default observer(UpdateTrip);
