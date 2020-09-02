import { decorate, observable } from "mobx";
import instance from "./instance";

class ProfileStore {
  profiles = [];
  loading = true;

  fetchProfile = async () => {
    try {
      const res = await instance.get("/profiles");
      console.log(res.data);
      this.profiles = res.data;
      this.loading = false;
    } catch (err) {
      console.log(err);
    }
  };
}

decorate(ProfileStore, {
  profiles: observable,
  loading: observable,
});

const profileStore = new ProfileStore();
profileStore.fetchProfile();
export default profileStore;
