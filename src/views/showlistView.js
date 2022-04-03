function createShowListView(props) {
  const root = document.createElement("div");
  // root.classList.add("");
  root.innerHTML = String.raw`
  <div>
    <label class="control-label">Language</label>
    <select class="show-languages">
      
    </select>
  </div>
  <button class="button" id="get-another-button">Show me another!</button>
  <div class="show-list-page"></div>
  `;
  const select = root.querySelector(".show-languages");
  props.languages.forEach((language) => {
    const option = document.createElement("option");
    option.value = language;
    option.textContent = language;
    select.appendChild(option);
  });
  const button = root.querySelector("#get-another-button");
  const container = root.querySelector(".show-list-page");

  button.addEventListener("click", props.onclick);

  const selectLanguage = root.querySelector(".show-languages");
  selectLanguage.addEventListener("change", props.selected);

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
