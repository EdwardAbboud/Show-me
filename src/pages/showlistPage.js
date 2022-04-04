import router from "../lib/router.js";
import { createShowListView, clearContainer } from "../views/showlistView.js";
import fetchShow from "../fetchers/showFetcher.js";
import { genreList, languageList } from "../data.js";

function createShowListPage() {
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

  let selectedLanguage = props.languages[0];
  let selectedGenre = props.genres[0];

  const showView = createShowListView(props);

  const getData = async () => {
    router.updateState({
      error: null,
      loading: true,
      show: null,
    });

    let show = null;
    while (!show) {
      try {
        const maxShowInd = 61000;

        const randomInt = Math.floor(Math.random() * maxShowInd);
        show = await fetchShow(randomInt);

        if (
          show.language !== selectedLanguage ||
          !show.genres.includes(selectedGenre) ||
          !show.image
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
