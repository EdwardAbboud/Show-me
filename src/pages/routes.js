import createWelcomePage from '../pages/homePage.js';
import createPlaylistPage from '../pages/playlistPage.js';


const routes = [
    { path: 'home', page: createWelcomePage, default: true }, 
    { path: 'playlist', page: createPlaylistPage},
];

export default routes;
