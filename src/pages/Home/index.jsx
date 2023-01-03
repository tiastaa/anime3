import { useEffect } from "react";
import { useSelector } from "react-redux";
import AnimeCardList from "../../components/AnimeCardList";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import { useActions } from "../../hooks/UseActions";

const Home = () => {
  const { fetchTopAnime } = useActions();
  const { topAnimes, loading, error, current_page, total_pages } = useSelector(
    (state) => state.topAnime
  );
  useEffect(() => {
    fetchTopAnime();
  }, []);
  console.log(topAnimes, loading, error, current_page, total_pages);
  console.log("[eq");
  return (
    <div>
      <Header />
      {loading ? (
        <h1>loading...</h1>
      ) : error == null ? (
        <div>
          <AnimeCardList animes={topAnimes}></AnimeCardList>
          {/* <Pagination
            action={fetchTopAnime}
            total_pages={total_pages}
            current_page={current_page}
          /> */}
        </div>
      ) : (
        <span>{error}</span>
      )}
    </div>
  );
};

export default Home;
