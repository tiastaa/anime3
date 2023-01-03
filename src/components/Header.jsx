import { NavLink } from "react-router-dom";
import Search from "./Search";
import ButtonRandomAnime from "./ButtonRandomAnime";

const Header = () => {
  return (
    <div class="header-box">
      <div class="header-panel-box">
        <div class="logo-box"></div>
        <ButtonRandomAnime />
        <NavLink to="/">
          <button>Home</button>
        </NavLink>
        <NavLink to="/favourite">
          <button>Favourite</button>
        </NavLink>
        <Search />
      </div>

      <h1 class="header-title">MY ANIME</h1>
    </div>
  );
};

export default Header;
