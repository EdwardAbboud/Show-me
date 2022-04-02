import { API_BASE_URL } from "../constants.js";
import fetchData from "../lib/fetchData.js";

async function fetchShow() {
  const maxShowInd = 61000;
  const randomInt = Math.floor(Math.random() * maxShowInd);
  try {
    const show = await fetchData(
      `${API_BASE_URL}/shows/${randomInt}`,

      { cache: true }
    );

    return { show };
  } catch (error) {
    console.error(error);
    fetchData();
  }
}

export default fetchShow;
