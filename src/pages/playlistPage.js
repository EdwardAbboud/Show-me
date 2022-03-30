import { GET_SHOW_BUTTON_ID } from '../constants.js';
import createPlaylistView from '../views/playlistView.js';


const createPlaylistPage = () => {
    const props = `
    <a class="button" id="${GET_SHOW_BUTTON_ID}">Show me!</a>`
    return createPlaylistView(props);  
};

export default createPlaylistPage;
