// Global app controller
//import str from './models/Search';
//import { add as a, multiply as m, ID } from './views/searchView';
//import * as searchViews from './views/searchView'
//console.log(`Using imported functions ${searchViews.add(searchViews.ID,2)} and ${searchViews.multiply(3,5)}.${str}`)
//624a6b312a1abed6cf2bd597b50709fa
//https://www.food2fork.com/api/search
import Search from './models/Search';
import Recipe from './models/Recipe';
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

    }

}
elements.searchForm.addEventListener("submit", e => {
    e.preventDefault();
    controlSearch();
});
elements.searchRes.addEventListener("click", e => {
    const btn = e.target.closest(".btn-inline");
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchViews.clearResults();
        searchViews.renderResults(state.search.result.goToPage);
        console.log('btn :', goToPage);
    }

});
/** 
 * RECIPE CONTROLLER
 */
const controlRecipe = async() => {
    // Get ID from url
    const id = window.location.hash.replace('#', '');

    if (id) {
        // Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        // Highlight selected search item
        if (state.search) searchView.highlightSelected(id);

        // Create new recipe object
        state.recipe = new Recipe(id);

        try {
            // Get recipe data and parse ingredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            // Calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            // Render recipe
            clearLoader();
            recipeView.renderRecipe(
                state.recipe,
                state.likes.isLiked(id)
            );

        } catch (err) {
            console.log(err);
            alert('Error processing recipe!');
        }
    }
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));