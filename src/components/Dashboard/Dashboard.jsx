import "./dashboard.scss";

export default function Dashboard() {
  return (
    <div className="dashboardMain">
      <div className="hero-container"></div>
      <div className="scrolling-container">
        <div className="scrollHeading">
          <h2>Featured Stories</h2>
        </div>
        <div
          class="bookContainer"
          data-flickity-options='{ "wrapAround": true }'
        >
          <div class="bookCell"></div>
          <div class="bookCell"></div>
          <div class="bookCell"></div>
          <div class="bookCell"></div>
          <div class="bookCell"></div>
        </div>
      </div>
    </div>
  );
}
