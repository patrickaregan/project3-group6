import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div class="navbar">
      <div class="container">
        <div class="left">
          <FontAwesomeIcon icon={faBookOpen} class="icon" />
        </div>
        <div class="item-container">
          <a href="#">Browse</a>
        </div>
        <div class="item-container">
          <a href="#">Community</a>
        </div>
        <div class="item-container">
          <input type="text" placeholder="Search.." />
        </div>
        <div class="right">
          {/* <div class="hamburgerMenu">
            <span class="line1"></span>
            <span class="line2"></span>
            <span class="line3"></span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
