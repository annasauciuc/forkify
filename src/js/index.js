// Global app controller
//import str from './models/Search';
//import { add as a, multiply as m, ID } from './views/searchView';
//import * as searchViews from './views/searchView'
//console.log(`Using imported functions ${searchViews.add(searchViews.ID,2)} and ${searchViews.multiply(3,5)}.${str}`)
//624a6b312a1abed6cf2bd597b50709fa
//https://www.food2fork.com/api/search
import Search from './models/Search';

const state = {

};
const controlSearch = async() => {
    const query = "pizza"
    if (query) {
        state.search = new Search(query);
        await state.search.getResults();
        console.log('state.search.results :', state.search.results);
    }

}
document.querySelector(".search").addEventListener("submit", e => {
    e.preventDefault();
    controlSearch();
})