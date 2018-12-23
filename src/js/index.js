// Global app controller
//import str from './models/Search';
//import { add as a, multiply as m, ID } from './views/searchView';
//import * as searchViews from './views/searchView'
//console.log(`Using imported functions ${searchViews.add(searchViews.ID,2)} and ${searchViews.multiply(3,5)}.${str}`)
//624a6b312a1abed6cf2bd597b50709fa
//https://www.food2fork.com/api/search
import Search from './models/Search';
import * as searchViews from './views/searchViews';
import { elements, renderLoader, clearLoader } from './views/base';

const state = {

};
const controlSearch = async() => {
    const query = searchViews.getInput();
    console.log('query :', query);
    if (query) {
        state.search = new Search(query);
        searchViews.clearInputs();
        searchViews.clearResults();
        renderLoader(elements.searchRes)
        await state.search.getResults();
        clearLoader();
        searchViews.renderResults(state.search.result);
        console.log('state.search.results :', state.search.result);
    }

}
elements.searchForm.addEventListener("submit", e => {
    e.preventDefault();
    controlSearch();
})