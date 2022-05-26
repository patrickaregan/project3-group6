import "./dashboard.scss";

export default function Dashboard() {
  return (
    <div class="dashboardMain">
      <div class="hero-container"></div>
      <div class="scrolling-container">
        <div class="scrollHeading">
          <h2>Your Stories</h2>
        </div>
        <div
          class="bookContainer"
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
