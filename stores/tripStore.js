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

  addTrip = async (newTrip) => {
    try {
      // console.log("before", newTrip);
      const formData = new FormData();
      for (const key in newTrip) formData.append(key, newTrip[key]);
      const res = await instance.post("/trips", formData);

      this.trips.push(res.data);
      // profile.trips.push(trip);
    } catch (error) {
      console.log("TripStore -> addTrip -> error", error);
    }
  };

  updateTrip = async (updatedTrip) => {
    try {
      // const formData = new FormData();
      // for (const key in updatedVendor) formData.append(key, updatedVendor[key]);

      await instance.put(`/trips/${updatedTrip.id}`, updatedTrip);

      const trip = this.trips.find((trip) => trip.id === updatedTrip.id);

      for (const key in updatedTrip) trip[key] = updatedTrip[key];
      // trip.image = URL.createObjectURL(updatedTrip.image);
    } catch (error) {
      console.log("TripStore -> updateTrip -> error", error);
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
