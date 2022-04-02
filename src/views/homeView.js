function createHomeView() {
  const root = document.createElement("div");
  root.innerHTML = String.raw`
    <div class="welcome-img-container">
    <img class="welcome-img" src="../public/assets/show-me.png">
    </div>
    <a class='button' href="#showList" id="get-show-button">Get show!</a>
    <div class="banner-container">
    <video type="video/mp4" class="welcome-banner" src="public/assets/video/tv-static.mp4" autoplay muted loop>
    </div>`;

  return { root };
}

export default createHomeView;
