import axios from 'axios';
import { GET_ALL_ARTISTS } from '../constants/Artist';
export const _getAllArtists = async () => {
    try {
        return await axios.get(GET_ALL_ARTISTS())
    } catch (error) {
        console.log("Error in getting all Artist: ", error)
    }
}