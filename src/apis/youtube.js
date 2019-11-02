import axios from "axios";

const KEY = "AIzaSyCXuO1hA0Krdi7X7kL-DJszhHAZG-5XT6E";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
