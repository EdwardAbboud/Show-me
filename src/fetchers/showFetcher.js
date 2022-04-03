import { API_BASE_URL } from "../constants.js";
import fetchData from "../lib/fetchData.js";

function fetchShow(randomInt) {
  return fetchData(
    `${API_BASE_URL}/shows/${randomInt}`,

    { cache: true }
  );
}

export default fetchShow;
