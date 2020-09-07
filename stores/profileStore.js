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

  //edit profile

  updateProfile = async (updatedProfile) => {
    try {
      const formData = new FormData();
      for (const key in updatedProfile)
        formData.append(key, updatedProfile[key]);

      await instance.put(`/profiles`, formData);

      const profile = this.profiles.find(
        (profile) => profile.id === updatedProfile.id //user id?
      );

      for (const key in updatedProfile) profile[key] = updatedProfile[key];
    } catch (error) {
      console.log(error);
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
