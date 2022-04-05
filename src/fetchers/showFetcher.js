import { API_BASE_URL } from "../constants.js";
import fetchData from "../lib/fetchData.js";

// make calls to the api
function fetchShow(randomInt) {
  return fetchData(
    `${API_BASE_URL}/shows/${randomInt}`,

    { cache: true }
  );
}

export default fetchShow;
