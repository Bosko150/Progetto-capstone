import axios from "axios";

export const GET_GAME = "GET_GAME";
export const GET_SINGLE_GAME = "GET_SINGLE_GAME";
export const GET_FILTERED_GAMES = "GET_FILTERED_GAMES";
export const NO_RESULTS_FOUND = "NO_RESULTS_FOUND";

export const fetchGamesAction = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/games");
      dispatch({
        type: GET_GAME,
        payload: response.data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchSingleGameAction = (gameId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/games/${gameId}`);
      dispatch({
        type: GET_SINGLE_GAME,
        payload: response.data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchFilteredGamesAction = ({ title, genre, orderBy, minPrice, maxPrice }) => {
  return async (dispatch) => {
    try {
      let query = "";
      if (title || genre || orderBy || minPrice || maxPrice) {
        query = new URLSearchParams({
          title,
          genre,
          orderBy,
          minPrice,
          maxPrice,
        }).toString();
      }

      const response = await axios.get(`http://localhost:3001/games${query ? `/search?${query}` : ""}`);

      if (response.data.length === 0) {
        dispatch({
          type: NO_RESULTS_FOUND,
          payload: true,
        });
      } else {
        dispatch({
          type: GET_FILTERED_GAMES,
          payload: response.data,
        });
        dispatch({
          type: NO_RESULTS_FOUND,
          payload: false,
        });
      }
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: NO_RESULTS_FOUND,
        payload: false,
      });
    }
  };
};
