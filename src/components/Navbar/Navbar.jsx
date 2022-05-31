import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div class="navbar">
      <div class="container">
        <div class="topbar">
          <div>
            <FontAwesomeIcon icon={faBookOpen} class="icon" />
          </div>
          <div class="item-container">
            <a href="#Browse" class="Tabs">
              Browse
            </a>
          </div>
          <div class="item-container">
            <a href="Dashboard" class="Tabs">
              Dashboard
            </a>
          </div>
          <div class="item-container">
            <FontAwesomeIcon icon={faMagnifyingGlass} class="icon" />
            <input type="text" placeholder="Search..." class="searchbar" />
          </div>
          <div class="item-container">
            <input type="checkbox" id="navToggle" class="checkbox" />
            <label for="navToggle" class="button">
              <FontAwesomeIcon icon={faBars} class="icon" />
            </label>
            <div class="background"/>
            <nav class="nav">
              <ul class="list">
                <li class="item">
                  <a class="link" href="my_account">My Account</a>
                  <a class="link" href="#Community">Community</a>
                  <a class="link" href="#logout">Log Out</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
