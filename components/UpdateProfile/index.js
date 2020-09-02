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
import profileStore from "../../stores/profileStore";

const UpdateProfile = ({ navigation, route }) => {
  const { oldProfile } = route.params;
  console.log(route.params);

  const [profile, setProfile] = useState(
    oldProfile ?? {
      bio: "",
      image: "",
    }
  );

  const handleUpdate = async () => {
    await profileStore.updateProfile(profile);
    navigation.goBack();
  };

  return (
    <TripContainer>
      <TripTitle>Update Profile</TripTitle>
      <TripTextInput
        onChangeText={(value) => setProfile({ ...profile, bio: value })}
        placeholder="bio"
        placeholderTextColor="#99b898"
        value={profile.bio}
      />
      <TripTextInput
        onChangeText={(value) => setProfile({ ...profile, image: value })}
        placeholder="Image"
        placeholderTextColor="#99b898"
        value={profile.image}
      />
      <UpdateButton onPress={handleUpdate}>
        <UpdateButtonText>Update profile</UpdateButtonText>
      </UpdateButton>
    </TripContainer>
  );
};

export default observer(UpdateProfile);

// render it inn profile item check the functionality
