import React from "react";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

//styles

import { MyTripItemStyled, MyTripTextStyled, CardWrapping } from "./styles";
import { Thumbnail, Card, CardItem, List } from "native-base";

//Data
import test from "../../test.jpg";

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
