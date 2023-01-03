const initialState = {
  searchAnimes: [],
  loading: false,
  error: null,
};

export const searchAnimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SEARCH_ANIME":
      return { ...state, loading: true };
    case "FETCH_SEARCH_ANIME_SUCCESS":
      return { ...state, searchAnimes: action.payload, loading: false };
    case "FETCH_SEARCH_ANIME_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
