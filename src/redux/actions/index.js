import axios from "axios";

export const GET_GAME = "GET_GAME";
export const GET_SINGLE_GAME = "GET_SINGLE_GAME";
export const GET_FILTERED_GAMES = "GET_FILTERED_GAMES";
export const NO_RESULTS_FOUND = "NO_RESULTS_FOUND";
export const GET_USER_LOGGED_PROFILE = "GET_USER_LOGGED_PROFILE";
export const GET_USER_LOGGED_TOKEN = "GET_USER_LOGGED_TOKEN";
export const TOGGLE_IS_LOGGED = "TOGGLE_IS_LOGGED";
export const TOGGLE_IS_LOGGED_OUT = "TOGGLE_IS_LOGGED_OUT";
export const GET_USER_CART = "GET_USER_CART";
export const ADD_GAME_TO_CART = "ADD_GAME_TO_CART";
export const REMOVE_GAME_FROM_CART = "REMOVE_GAME_FROM_CART";

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

export const fetchUserAction = (loginObject, navigate, setError) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/auth/login", loginObject);
      console.log("Response:", response.data);
      const token = response.data.accessToken;

      dispatch({
        type: GET_USER_LOGGED_TOKEN,
        payload: response.data,
      });

      const userInfo = await dispatch(fetchUserInfoAction(token));

      const userId = userInfo.id;

      await dispatch(fetchUserCartAction(userId));

      navigate("/");
    } catch (err) {
      console.error("Error logging in:", err.response?.data?.message || err.message);
      setError(err.response?.data?.message || "An error occurred during login.");
    }
  };
};

export const fetchUserInfoAction = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/users/me", {
        headers: { Authorization: "Bearer " + token },
      });
      console.log("User Info Response:", response.data);
      dispatch({
        type: GET_USER_LOGGED_PROFILE,
        payload: response.data,
      });
      return response.data;
    } catch (err) {
      console.error("Error fetching user info:", err.response?.data?.message || err.message);
    }
  };
};

export const fetchUserCartAction = (userId) => {
  return async (dispatch, getState) => {
    const token = getState().user.token.accessToken;
    try {
      const response = await axios.get(`http://localhost:3001/cart/user/${userId}`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log("User Cart Response:", response.data);
      dispatch({
        type: GET_USER_CART,
        payload: response.data,
      });
    } catch (err) {
      console.error("Error fetching user cart:", err.response?.data?.message || err.message);
    }
  };
};

export const addGameToCartAction = (cartId, gameId) => {
  return async (dispatch, getState) => {
    const token = getState().user.token.accessToken;
    try {
      const response = await axios.post(
        `http://localhost:3001/cart/add/${cartId}/${gameId}`,
        {},
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log("Add to cart response:", response.data);

      dispatch({
        type: ADD_GAME_TO_CART,
        payload: response.data,
      });

      const userId = getState().user.user_info.id;
      if (userId) {
        dispatch(fetchUserCartAction(userId));
      } else {
        console.error("User ID is missing");
      }
    } catch (err) {
      console.error("Error adding to cart:", err.response?.data?.message || err.message);
    }
  };
};
export const removeGameFromCartAction = (cartId, gameId) => {
  return async (dispatch, getState) => {
    const token = getState().user.token.accessToken;
    try {
      const response = await axios.post(
        `http://localhost:3001/cart/remove/${cartId}/${gameId}`,
        {},
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log("Add to cart response:", response.data);

      dispatch({
        type: REMOVE_GAME_FROM_CART,
        payload: response.data,
      });

      const userId = getState().user.user_info.id;
      if (userId) {
        dispatch(fetchUserCartAction(userId));
      } else {
        console.error("User ID is missing");
      }
    } catch (err) {
      console.error("Error adding to cart:", err.response?.data?.message || err.message);
    }
  };
};
