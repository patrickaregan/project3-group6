import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div class="navbar">
      <div class="container">
        <div class="left">
          <div>
            <FontAwesomeIcon icon={faBookOpen} class="icon" />
          </div>
          <div class="item-container">
            <a href="#" class="Tabs">Browse</a>
          </div>
          <div class="item-container">
            <a href="#" class="Tabs">Community</a>
          </div>
          <div class="item-container">
            <FontAwesomeIcon icon={faMagnifyingGlass} class="icon" />
            <input type="text" placeholder="Search..."  class="searchbar"/>
          </div>
        </div>
        <div class="right">
          <div class="hamburgerMenu">
            <span class="line1"></span>
            <span class="line2"></span>
            <span class="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
