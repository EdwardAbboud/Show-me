function createShowListView(props) {
  const root = document.createElement("div");
  root.innerHTML = String.raw`${rootString}`;

  const selectLanguage = root.querySelector(".show-languages");
  props.languages.forEach((language) => {
    const lOption = document.createElement("option");
    lOption.value = language;
    lOption.textContent = language;
    selectLanguage.appendChild(lOption);
  });

  const selectGenre = root.querySelector(".show-genres");
  props.genres.forEach((genre) => {
    const gOption = document.createElement("option");
    gOption.value = genre;
    gOption.textContent = genre;
    selectGenre.appendChild(gOption);
  });

  const button = root.querySelector("#get-another-button");
  const container = root.querySelector(".show-list-page");

  button.addEventListener("click", props.onclick);
  selectLanguage.addEventListener("change", props.selectedLang);
  selectGenre.addEventListener("change", props.selectedGen);

  const update = (state) => {
    if (state.error || !state.show) {
      return;
    }

    const { show } = state;
    let image = "";
    if (show.image) {
      image = `<img alt="Show poster" src="${show.image.original}"></img>`;
    }
    container.innerHTML = String.raw`
    <a href="" class="show-info">
    <h3 class="show-name">${show?.name}</h3>
    ${image}
    </a>`;
  };

  return { root, update };
}

export default createShowListView;

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
