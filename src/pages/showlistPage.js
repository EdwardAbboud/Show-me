// import log from "../lib/logger.js";
import router from "../lib/router.js";
import createShowListView from "../views/showlistView.js";
import fetchShow from "../fetchers/showFetcher.js";

function createShowListPage() {
  const props = {
    onclick: () => {
      getData();
    },
    selected: (e) => {
      selectedLanguage = e.target.value;
      console.log(selectedLanguage);
    },
    languages: ["English", "Japanese"],
  };

  let selectedLanguage = props.languages[0];
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

        if (show.language !== selectedLanguage || !show.image) {
          show = null;
          console.log("Show reset");
        }
        // debugger;
        // if (show.language !== selectedLanguage) {
        //   getData();
        // }
      } catch (error) {
        // log.error("createShowListPage", error.message);
        // router.updateState({ error, loading: false });
        // router.navigateTo("showList");
        // return;
        console.log("Error fetching:", error);
      }
    }
    router.updateState({ show, loading: false });
  };
  getData();

  return showView;
}
export default createShowListPage;
