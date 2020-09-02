import React from "react";
import { observer } from "mobx-react";

import { Thumbnail } from "native-base";

import test from "../../test.jpg";

//stores
import tripStore from "../../stores/tripStore";

const DiscoverItem = () => {
  if (tripStore.loading) return <Spinner />;

  return (
    <DiscoverItemStyled>
      <Thumbnail
        style={{
          resizeMode: "center",
          height: 100,
          width: 200,
        }}
        source={trip.image ? { uri: trip.image } : test}
      />
      <DiscoverTextStyled>{trip.title}</DiscoverTextStyled>
    </DiscoverItemStyled>
  );
};

export default observer(DiscoverItem);
