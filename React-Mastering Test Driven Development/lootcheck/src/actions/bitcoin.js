import { FETCH_BITCOIN } from "./constants";

const baseUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";
export const fetchBitcoin = () => async dispatch => {
  try {
    const results = await fetch(baseUrl);
    dispatch({ type: FETCH_BITCOIN, payload: results });
  } catch (e) {
    console.log(e);
  }
};
