import log from "../lib/logger.js";
import router from "../lib/router.js";
import createShowListView from "../views/showlistView.js";
import fetchShow from "../fetchers/showFetcher.js";

function createShowListPage() {
  let checkBoxValue = 0;

  const props = {
    onclick: () => {
      getData();
    },
    checked: () => {
      checkBoxValue += 1;
      console.log(checkBoxValue);
    },
  };

  const showView = createShowListView(props);

  const getData = async () => {
    router.updateState({
      error: null,
      loading: true,
      show: null,
    });

    let show;

    try {
      ({ show } = await fetchShow());
    } catch (error) {
      log.error("createShowListPage", error.message);
      router.updateState({ error, loading: false });
      router.navigateTo("showList");
      return;
    }

    if (!show.image) {
      getData();
    }

    if (checkBoxValue % 2 !== 0) {
      if (show.language !== "English") {
        fetchShow();
      }
    }

    router.updateState({ show, loading: false });
  };

  getData();

  return showView;
}

export default createShowListPage;
