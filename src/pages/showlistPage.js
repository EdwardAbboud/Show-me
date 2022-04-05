import router from "../lib/router.js";
import { createShowListView, clearContainer } from "../views/showlistView.js";
import fetchShow from "../fetchers/showFetcher.js";
import { genreList, languageList } from "../data.js";

// creates the functionality of the page
function createShowListPage() {
  // these props are assigned eventListeners
  const props = {
    onclick: () => {
      getData();
      clearContainer();
    },
    selectedLang: (e) => {
      selectedLanguage = e.target.value;
    },
    selectedGen: (e) => {
      selectedGenre = e.target.value;
    },
    languages: languageList,
    genres: genreList,
  };
  // default language and genre
  let selectedLanguage = props.languages[0];
  let selectedGenre = props.genres[0];

  const showView = createShowListView(props);

  // fetch the show to be displayed
  const getData = async () => {
    router.updateState({
      error: null,
      loading: true,
      show: null,
    });

    let show = null;

    while (!show) {
      try {
        // retrieve a random show from api
        const maxShowInd = 61000;
        const randomInt = Math.floor(Math.random() * maxShowInd);
        show = await fetchShow(randomInt);

        // checks the tv series for user criteria
        if (
          show.language !== selectedLanguage ||
          !show.genres.includes(selectedGenre)
        ) {
          show = null;
        }
      } catch (error) {
        console.log("Error fetching:", error);
      }
    }
    router.updateState({ show, loading: false });
  };

  getData();

  return showView;
}
export default createShowListPage;
