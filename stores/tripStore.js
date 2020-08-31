import { decorate, observable } from "mobx";
import axios from "axios";
//stores
import instance from "./instance";

class TripStore {
  trips = [];
  loading = true;

  fetchTrips = async () => {
    try {
      const res = await instance.get("/trips");
      console.log(res.data);
      this.trips = res.data;
      this.loading = false;
    } catch (err) {
      console.log("TripStore -> fetchTrip -> error", err);
    }
  };
  tripDelete = async (tripId) => {
    try {
      await instance.delete(`/trips/${tripId}`);

      this.trips = this.trips.filter((trip) => trip.id !== +tripId);
    } catch (error) {
      console.log("TripStore -> deleteTrip -> error", error);
    }
  };
  // getTripsById = (tripId) => this.trips.find((trip) => trip.id === tripId);
}
decorate(TripStore, {
  trips: observable,
  loading: observable,
});

const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
