
function createHomeView(props) {
  
  const root = document.createElement('div');
  root.innerHTML = String.raw`${props}`;

  return { root };
}

export default createHomeView;
