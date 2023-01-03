import axios from "axios";

export const fetchTopAnime = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_TOP_ANIME" });
      const response = await axios.get(`https://api.jikan.moe/v4/top/anime`);
      console.log(response);

      dispatch({
        type: "FETCH_TOP_ANIME_SUCCESS",
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: "FETCH_TOP_ANIME_ERROR",
        payload: "oops looks like something went wrong :(",
      });
    }
  };
};
