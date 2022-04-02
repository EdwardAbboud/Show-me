import createWelcomePage from '../pages/homePage.js';
import createShowListPage from '../pages/showlistPage.js';


const routes = [
    { path: 'home', page: createWelcomePage, default: true }, 
    { path: 'showList', page: createShowListPage},
];

export default routes;
