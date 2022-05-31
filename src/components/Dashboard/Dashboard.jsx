import "./dashboard.scss";
import "./dashboard.js";

export default function Dashboard() {
  return (
    <div className="dashboardMain">
      <div className="hero-container"></div>
      <div className="scrolling-container">
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
            <div className="bookCell"></div>
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