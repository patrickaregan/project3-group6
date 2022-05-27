import "./dashboard.scss";

export default function Dashboard() {
  return (
    <div className="dashboardMain">
      <div className="hero-container"></div>
      <div className="scrolling-container">
        <div className="scrollHeading">
          <h2>Your Stories</h2>
        </div>
        <div className="bookMain">
          <input type="radio" name="position" defaultChecked />
          <input type="radio" name="position" />
          <input type="radio" name="position" />
          <input type="radio" name="position" />
          <input type="radio" name="position" />
          <input type="radio" name="position" />
          <input type="radio" name="position" />
          <input type="radio" name="position" />
          <input type="radio" name="position" />
          <input type="radio" name="position" />
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