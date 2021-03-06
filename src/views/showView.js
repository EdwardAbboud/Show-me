import createLoadingIndicator from "./loadingIndicator.js";

export function createShowListView(props) {
  // create the main div
  const root = document.createElement("div");
  root.innerHTML = String.raw`${rootString}`;

  const button = root.querySelector("#get-another-button");
  const container = root.querySelector(".show-list-page");
  const selectGenre = root.querySelector(".show-genres");
  const selectLanguage = root.querySelector(".show-languages");

  // Create more select-options
  const createOptions = (query, property) => {
    const element = root.querySelector(query);
    property.forEach((item) => {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      element.appendChild(option);
    });
  };

  createOptions(".show-languages", props.languages);
  createOptions(".show-genres", props.genres);

  // event listeners
  button.addEventListener("click", props.onclick);
  selectLanguage.addEventListener("change", props.selectedLang);
  selectGenre.addEventListener("change", props.selectedGen);
  container.addEventListener("click", props.clickedShow);

  const loadingIndicator = createLoadingIndicator();
  container.appendChild(loadingIndicator.root);

  const update = (state) => {
    if (state.loading) {
      loadingIndicator.root.hidden = false;
      return;
    }

    loadingIndicator.root.hidden = true;

    if (state.error || !state.show) {
      return;
    }

    const { show } = state;

    let image = "";
    if (show.image) {
      image = `<img alt="Show poster" src="${show.image.original}"></img>`;
    } else {
      image = `<img alt="No poster" src="./public/assets/no-image.png"></img>`;
    }

    let summary = "";
    if (show.summary) {
      summary = `${show.summary}`;
    } else {
      summary = `<p>No summary has been provided</p>`;
    }

    container.innerHTML = String.raw`
    <div class="hide-me">
      <div class="show-info">
        <div class="image-container">
          ${image}
        </div>
        <h3 class="show-name">${show.name}</h3>
    </div>
    </div>
    <div class="show-more-information hidden">
      <h3 class="show-name">${show.name}</h3>
      <div id="description">
        ${summary}
      </div>
      <p>Genres: ${show.genres}</p>
      <p>Status: ${show.status}</p>
      <p id="premiered">Premiered: ${show.premiered}</p>
      <a id="external-link" target="_blank" href="${show.url}" >GO TO SHOW PAGE</a>
    </div>
    `;
  };

  return { root, update };
}

// html for the root 'div' element
const rootString = `
  <div class="user-selected">
    <div id="language">
      <label class="label">Language</label>
      <select class="show-languages">
      </select>
    </div>
    <div id="genre">
      <label class="label">Genre</label>
      <select class="show-genres">
      </select>
    </div>
    <span class="info-container" title="If loading your show is taking time, it may be due to the Language/Genre combination. Please wait or edit your criteria">
      <img id="info-icon"src="./public/assets/info-circle.png">
    </span>
  </div>
  <button class="button" id="get-another-button">Show me another!</button>
  <div class="show-list-page"></div>
  `;

// clean up the current show when another is requested
export const clearContainer = () => {
  const container = document.querySelector(".show-list-page");
  const loadingIndicator = createLoadingIndicator();
  container.innerHTML = loadingIndicator.root.innerHTML;
};

// Hide the poster view
export const switchView = () => {
  const container = document.querySelector(".show-list-page");
  const showView = container.querySelector(".hide-me");
  const showInfo = container.querySelector(".show-more-information");

  showView.classList.add("hidden");
  showInfo.classList.remove("hidden");
};

// Hide the description view
export const switchBack = () => {
  const container = document.querySelector(".show-list-page");
  const showView = container.querySelector(".hide-me");
  const showInfo = container.querySelector(".show-more-information");

  showView.classList.remove("hidden");
  showInfo.classList.add("hidden");
  console.log("element is now hidden");
};
