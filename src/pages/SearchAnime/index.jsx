import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import AnimeCardList from "../../components/AnimeCardList";
import Header from "../../components/Header";
import { useActions } from "../../hooks/UseActions";

const SearchAnime = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") || 1;

  const { fetchSearchAnime } = useActions();
  const { searchAnimes, loading, error } = useSelector(
    (state) => state.searchAnime
  );
  useEffect(() => {
    fetchSearchAnime(title);
  }, [title]);

  return (
    <div>
      <Header />
      {loading ? (
        <h1>loading...</h1>
      ) : error == null ? (
        searchAnimes.length === 0 ? (
          <span>No anime</span>
        ) : (
          <AnimeCardList animes={searchAnimes}></AnimeCardList>
        )
      ) : (
        <span>{error}</span>
      )}
    </div>
  );
};

export default SearchAnime;
