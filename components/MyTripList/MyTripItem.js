import React from "react";
import { observer } from "mobx-react";

//styles
import { MyTripItemStyled, MyTripTextStyled } from "./styles";
import { Thumbnail, Right, Row } from "native-base";
//Data
import test from "../../test.jpg";

// Buttons
import UpdateButton from "../buttons/UpdateButton";
import DeleteButton from "../buttons/DeleteButton";
import UpdateTrip from "../UpdateTrip";

const MyTripItem = ({ trip, navigation }) => {
  return (
    <>
      <MyTripItemStyled
        onPress={() => navigation.navigate("TripDetail", { trip: trip })}
      >
        <Thumbnail
          style={{
            resizeMode: "center",
            height: 100,
            width: 200,
          }}
          source={trip.image ? { uri: trip.image } : test}
        />
      </MyTripItemStyled>
      <MyTripItemStyled>
        <MyTripTextStyled>{trip.title}</MyTripTextStyled>
        <UpdateButton trip={trip} />
        <DeleteButton tripId={trip.id} />
      </MyTripItemStyled>
    </>
    // <Card>
    //   <CardItem>
    //     <Left>
    //       <Body>
    //         <Text
    //           onPress={() => navigation.navigate("TripDetail", { trip: trip })}
    //         >
    //           {trip.title}
    //         </Text>
    //       </Body>
    //     </Left>
    //   </CardItem>
    //   <CardItem cardBody>
    //     <Image
    //       source={trip.image ? { uri: trip.image } : test}
    //       style={{ height: 200, width: null, flex: 1 }}
    //     />
    //   </CardItem>
    //   <UpdateTrip/>
    //   <DeleteButton/>
    // </Card>
  );
};

export default observer(MyTripItem);
