import { useNavigate } from "react-router-dom";
import classes from "./AnimeCard.module.scss";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import AnimeFullInfo from "./AnimeFullInfo";

// import style from "node_modules/react-tooltip/dist/react-tooltip.css";

const AnimeCard = (props) => {
  const navigate = useNavigate();

  const FullAnimeInfo = (animeId) => {
    console.log(animeId);
    console.log("animeId");
    console.log(props.images?.jpg.image_url);
    navigate({
      pathname: "/anime-info",
      search: `id=${animeId}`,
    });
    console.log(props.images.jpg.image_url);
  };
  return (
    <div
      className={classes.card}
      onClick={() => FullAnimeInfo(props.anime.mal_id)}
      key={props.anime.mal_id}
    >
      <div className={classes.img_box}>
        <img
          className={classes.anime_img}
          src={props.anime.images.jpg.image_url}
          alt=""
        />
        <img
          id={props.anime.mal_id}
          className={classes.tip_img}
          src="https://e7.pngegg.com/pngimages/58/289/png-clipart-die-personennamen-im-deutschen-computer-icons-symbol-information-prompt-miscellaneous-cdr.png"
          alt=""
        />
        <ReactTooltip
          anchorId={props.anime.mal_id}
          content={"треба зробити спеціально новий компонент для цього"}
          place="right"
        />
        <span className={classes.episodes}>{props.anime.episodes} ep</span>
        <span className={classes.score}>{props.anime.score}</span>
      </div>
      <span className={classes.title}>{props.anime.title}</span>
    </div>
  );
};

export default AnimeCard;
