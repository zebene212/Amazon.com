import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-fir-fe4cf.cloudfunctions.net/api",
});

export default instance;
// https://us-central1-fir-fe4cf.cloudfunctions.net/ap