import AnimeCard from "./AnimeCard";

const AnimeCardList = (props) => {
  //   const [inputInfo, setInputInfo] = useState();

  return (
    <div class="anime-card-list-box">
      {props.animes.map((anime) => (
        <AnimeCard anime={anime} key={anime.mal_id}></AnimeCard>
      ))}
    </div>
  );
};

export default AnimeCardList;
