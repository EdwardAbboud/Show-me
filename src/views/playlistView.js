// Create the welcome screen

function createPlaylistView(props) {
  const root = document.createElement('div');
  root.innerHTML = String.raw`${props}`;

  return { root };
}

export default createPlaylistView;