import { decorate, observable } from "mobx";
import decode from "jwt-decode";
import instance from "./instance";
// import AsyncStorage from "@react-native-community/async-storage";

class AuthStore {
  user = null;

  setUser = (token) => {
    // localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  //   signup = async (userData) => {
  //     try {
  //       const res = await instance.post("/signup", userData);
  //       this.setUser(res.data.token);
  //       console.log("AuthStore -> signup -> res.data.token", res.data.token);
  //       //   console.log(res.data);
  //     } catch (error) {
  //       console.log("AuthStore -> signup -> error", error);
  //     }
  //   };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      await this.setUser(res.data.token);
      console.log("AuthStore -> signin -> res.data.token", res.data.token);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  //   signout = async () => {
  //     delete instance.defaults.headers.common.Authorization;
  //     this.user = null;
  //     await AsyncStorage.removeItem("myToken");
  //   };

  //   checkForToken = async () => {
  //     const token = await AsyncStorage.getItem("myToken");
  //     if (token) {
  //       const currentTime = Date.now() / 1000;
  //       const user = decode(token);
  //       if (user.exp >= currentTime) {
  //         this.setUser(token);
  //       } else {
  //         this.signout();
  //       }
  //     }
  //   };
}

decorate(AuthStore, {
  user: observable,
});

const authStore = new AuthStore();

export default authStore;
