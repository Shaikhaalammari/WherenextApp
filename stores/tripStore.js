import { decorate, observable } from "mobx";
import instance from "./instance";

class TripStore {
  trips = [];
  loading = true;

  fetchTrips = async () => {
    try {
      const res = await instance.get("/trips");
      console.log("lol", res.data);
      this.trips = res.data;
      this.loading = false;
    } catch (err) {
      console.log("TripStore -> fetchTrip -> error", err);
    }
  };
}
decorate(TripStore, {
  trips: observable,
  loading: observable,
});

const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
