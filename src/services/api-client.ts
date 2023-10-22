import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "06b40a68295a44edb7565cfc32b15a4e",
  },
});
