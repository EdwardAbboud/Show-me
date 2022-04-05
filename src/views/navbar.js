import { HOME_BUTTON_ID, NAVBAR_CONTAINER_ID } from "../constants.js";

// navbar DOM creator
const createNavbar = () => {
  const navContainer = document.getElementById(NAVBAR_CONTAINER_ID);
  const nav = document.createElement("div");
  nav.classList.add("navbar");
  nav.innerHTML = String.raw`
    <h1>show me</h1>
    <a class="button" href="#home" id=${HOME_BUTTON_ID}><img class ="logo" src="public/assets/homebutton-gray.jpeg">Home</a>
    `;
  navContainer.appendChild(nav);
};

export default createNavbar;
