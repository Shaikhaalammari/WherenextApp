import { decorate, observable } from "mobx";

//stores
import instance from "./instance";

class TripStore {
  trips = [];
  loading = true;

  fetchTrips = async () => {
    try {
      const res = await instance.get("/trips");
      this.trips = res.data;
      this.loading = false;
    } catch (err) {
      console.log("TripStore -> fetchTrip -> error", err);
    }
  };

  addTrip = async (newTrip) => {
    try {
      const formData = new FormData();
      for (const key in newTrip) formData.append(key, newTrip[key]);
      const res = await instance.post("/trips", formData);
      this.trips.push(res.data);
    } catch (error) {
      console.log("TripStore -> addTrip -> error", error);
    }
  };

  updateTrip = async (updatedTrip) => {
    try {
      const formData = new FormData();
      for (const key in updatedTrip) formData.append(key, updatedTrip[key]);
      await instance.put(`/trips/${updatedTrip.id}`, formData);
      const trip = this.trips.find((trip) => trip.id === updatedTrip.id);
      for (const key in updatedTrip) trip[key] = updatedTrip[key];
      // trip.image = URL.createObjectURL(updatedTrip.image);
    } catch (error) {
      console.log("TripStore -> updateTrip -> error", error);
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
}
decorate(TripStore, {
  trips: observable,
  loading: observable,
});

const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
