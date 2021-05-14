import axios from "axios";
import { GET_ALL_GENRES } from "../constants/Genre";

export const _getAllGenres = async () => {
  try {
    return await axios.get(GET_ALL_GENRES());
  } catch (error) {
    console.log("Error in getting all genres: ", error);
  }
};
