import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div class="navbar">
      <div class="container">
        <div class="left">
          {/* font awesome icon for logo */}
          <FontAwesomeIcon icon={ faBookOpen } class="icon" />
          {/* Browse, community, and searchbar */}
        </div>
        <div class="right">
          {/* hamburger menu */}
        </div>
      </div>
    </div>
  );
}
