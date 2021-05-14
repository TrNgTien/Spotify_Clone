import axios from 'axios';
import { GET_ALL_SONG } from '../constants/Song';

export const _getAllSongs = async () => {
    try {
        return await axios.get(GET_ALL_SONG());
    } catch (error) {
        console.log("Error while getting all songs: ", error)
    }
}