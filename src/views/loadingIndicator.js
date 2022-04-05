// create a loading indicator when called
function createLoadingIndicator() {
  const root = document.createElement("div");

  root.innerHTML = String.raw`
  <div class="loading-container">
    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div>
  `;

  return { root };
}

export default createLoadingIndicator;
