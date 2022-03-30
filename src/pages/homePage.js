import { GET_IN_BUTTON_ID } from '../constants.js';
import createHomeView from '../views/homeView.js';

function createHomePage() {
  
  const props = `
    <div class="welcome-img-container">
    <img class="welcome-img" src="../public/assets/show-me.png">
    </div>
    <a class='button' href="#playlist" id="${GET_IN_BUTTON_ID}">Get in!</a>
    <div class="banner-container">
    <video type="video/mp4" class="welcome-banner" src="public/assets/video/tv-static.mp4" autoplay muted loop>
    </div>`
  return createHomeView(props);
}

export default createHomePage