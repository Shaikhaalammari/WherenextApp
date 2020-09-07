import React from "react";
import { observer } from "mobx-react";

//styles
import {
  MyTripItemStyled,
  MyTripTextStyled,
  ButtonsStyle,
  CardWrapping,
  Backgroundcolor,
} from "./styles";
import {
  Thumbnail,
  Right,
  Row,
  Card,
  CardItem,
  List,
  Body,
  Text,
} from "native-base";
import { ColumnWrapperStyle, ImageBackground, ScrollView } from "react-native";

//Data
import test from "../../test.jpg";

// Buttons
import UpdateButton from "../buttons/UpdateButton";
import DeleteButton from "../buttons/DeleteButton";
import UpdateTrip from "../UpdateTrip";
import { useNavigation } from "@react-navigation/native";

const MyTripItem = ({ trip }) => {
  const navigation = useNavigation();

  return (
    <Card>
      <CardItem style={{ backgroundColor: "#FBF9F3" }}>
        <List>
          <CardWrapping>
            <MyTripItemStyled
              onPress={() => navigation.navigate("TripDetail", { trip: trip })}
            >
              <Thumbnail
                style={{
                  resizeMode: "left",
                  height: 100,
                  width: 200,

                  marginBottom: -70,
                }}
                source={trip.image ? { uri: trip.image } : test}
              />
            </MyTripItemStyled>
          </CardWrapping>
          <MyTripTextStyled>{trip.title}</MyTripTextStyled>
        </List>
      </CardItem>
    </Card>
  );
};

export default observer(MyTripItem);
