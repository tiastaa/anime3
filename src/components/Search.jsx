import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [inputInfo, setInputInfo] = useState("");
  const navigate = useNavigate();
  const showSearchAnime = () => {
    navigate({ pathname: "/search-results", search: `title=${inputInfo}` });
    setInputInfo("");
  };

  const showSearchAnimebyKey = (event) => {
    if (event.key === "Enter" && inputInfo !== "") {
      navigate({
        pathname: "/search-results",
        search: `title=${inputInfo}`,
      });
      setInputInfo("");
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search anime"
        value={inputInfo}
        onChange={(event) => {
          setInputInfo(event.target.value);
        }}
        onKeyDown={showSearchAnimebyKey}
      />
      <button onClick={showSearchAnime}>Search</button>
    </div>
  );
};

export default Search;
