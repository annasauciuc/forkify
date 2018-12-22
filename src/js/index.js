// Global app controller
//import str from './models/Search';
//import { add as a, multiply as m, ID } from './views/searchView';
//import * as searchViews from './views/searchView'
//console.log(`Using imported functions ${searchViews.add(searchViews.ID,2)} and ${searchViews.multiply(3,5)}.${str}`)
//624a6b312a1abed6cf2bd597b50709fa
//https://www.food2fork.com/api/search
import axios from 'axios';
async function getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = '624a6b312a1abed6cf2bd597b50709fa';
    try {
        const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log('recipes :', recipes);
        console.log('res :', res);
    } catch (error) {
        alert(error);
    }

}
getResults('pizza');