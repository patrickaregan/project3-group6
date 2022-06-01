import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="topbar">
          <div>
            <FontAwesomeIcon icon={faBookOpen} className="icon" />
          </div>
          <div className="item-container">
            <a href="#Browse" className="Tabs">
              Browse
            </a>
          </div>
          <div className="item-container">
            <a href="Dashboard" className="Tabs">
              Dashboard
            </a>
          </div>
          <div className="item-container">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            <input type="text" placeholder="Search..." className="searchbar" />
          </div>
          <div className="item-container">
            <input type="checkbox" id="navToggle" className="checkbox" />
            <label htmlFor="navToggle" className="button">
              <FontAwesomeIcon icon={faBars} className="icon" />
            </label>
            <div className="background"/>
            <nav className="nav">
              <ul className="list">
                <li className="item">
                  <a className="link" href="my_account">My Account</a>
                  <a className="link" href="#Community">Community</a>
                  <a className="link" href="#logout">Log Out</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
