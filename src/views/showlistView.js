import createLoadingIndicator from "./loadingIndicator.js";

export function createShowListView(props) {
  const root = document.createElement("div");
  root.innerHTML = String.raw`${rootString}`;

  const button = root.querySelector("#get-another-button");
  const container = root.querySelector(".show-list-page");
  const selectGenre = root.querySelector(".show-genres");
  const selectLanguage = root.querySelector(".show-languages");

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

  button.addEventListener("click", props.onclick);
  selectLanguage.addEventListener("change", props.selectedLang);
  selectGenre.addEventListener("change", props.selectedGen);

  const loadingIndicator = createLoadingIndicator();
  container.appendChild(loadingIndicator.root);

  const update = (state) => {
    if (state.loading) {
      loadingIndicator.root.hidden = false;
      return;
    } else {
      loadingIndicator.root.hidden = true;
    }

    if (state.error || !state.show) {
      return;
    }

    const { show } = state;
    let image = "";
    if (show.image) {
      image = `<img alt="Show poster" src="${show.image.original}"></img>`;
    }
    container.innerHTML = String.raw`
    <a target="_blank" href="${show.url}"><div id="myBtn" class="show-info">
      <h3 class="show-name">${show?.name}</h3>
      ${image}
    </div></a>`;
  };

  return { root, update };
}

const rootString = `
  <div class="user-selected"></div>
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
  </div>
  <button class="button" id="get-another-button">Show me another!</button>
  <div class="show-list-page"></div>
  `;

export const clearContainer = () => {
  const container = document.querySelector(".show-list-page");
  const loadingIndicator = createLoadingIndicator();
  container.innerHTML = loadingIndicator.root.innerHTML;
};
