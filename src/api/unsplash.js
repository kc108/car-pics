// Configuration for Axios
import axios from "axios";

// creates a customized copy with the specified headers
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID jHeHk_4PkZq5Ap-ud1EZgFntEwlUuh6416b9kPPlw94",
  },
});
