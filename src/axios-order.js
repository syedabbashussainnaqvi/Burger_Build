import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://burger-builder-21406.firebaseio.com/",
});
export default instance;
