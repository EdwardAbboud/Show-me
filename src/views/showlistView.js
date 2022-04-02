function createShowListView(props) {
  const root = document.createElement("div");
  // root.classList.add("");
  root.innerHTML = String.raw`
    <div class="language-selection">
      <p>English only</p>
      <input class="language-box" type='checkbox' value="true">
    </div>
    <button class="button" id="get-another-button">Show me another!</button>
    <div class="show-list-page"></div>`;

  const button = root.querySelector("#get-another-button");
  const container = root.querySelector(".show-list-page");

  button.addEventListener("click", props.onclick);

  const checkBox = root.querySelector(".language-box");
  checkBox.addEventListener("change", props.checked);

  const update = (state) => {
    if (state.error || !state.show) {
      return;
    }

    const { show } = state;

    container.innerHTML = String.raw`
    <a href="" class="show-info">
    <h3 class="show-name">${show?.name}</h3>
    <img alt="Show poster" src="${show?.image?.original}">
    </a>`;
  };

  return { root, update };
}

export default createShowListView;
