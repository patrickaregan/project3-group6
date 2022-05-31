import "./dashboard.scss";
import "./dashboard.js";

export default function Dashboard() {
  return (
    <div className="dashboardMain">
      <div className="hero-container"></div>
      <div className="scrolling-container">
        <div className="scrollHeading">
          <h2>Your Stories</h2>
        </div>
        <div className="bookMain">
          <input
            type="radio"
            name="position"
            className="inputBook"
            defaultChecked
          />
          <input type="radio" name="position" className="inputBook" />
          <input type="radio" name="position" className="inputBook" />
          <input type="radio" name="position" className="inputBook" />
          <input type="radio" name="position" className="inputBook" />
          <input type="radio" name="position" className="inputBook" />
          <input type="radio" name="position" className="inputBook" />
          <input type="radio" name="position" className="inputBook" />
          <input type="radio" name="position" className="inputBook" />
          <input type="radio" name="position" className="inputBook" />
          <div className="bookContainer">
            <div className="bookCell" id="book1"></div>
            <div className="bookCell"></div>
            <div className="bookCell"></div>
            <div className="bookCell"></div>
            <div className="bookCell"></div>
            <div className="bookCell"></div>
            <div className="bookCell"></div>
            <div className="bookCell"></div>
            <div className="bookCell"></div>
            <div className="bookCell"></div>
          </div>
        </div>
      </div>
    </div>
  );
}