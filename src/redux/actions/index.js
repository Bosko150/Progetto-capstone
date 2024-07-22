import axios from "axios";

export const GET_GAME = "GET_GAME";

export const fetchGamesAction = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/games", {});
      dispatch({
        type: GET_GAME,
        payload: response.data,
      });
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };
};
