// Global app controller

import string from "./models/Search";
import * as searchView from "./views/searchViews";
//import { add, multiply, ID } from "./views/searchViews";
//console.log(`Using imported functions! ${add(ID,2)} and ${multiply(3,5)}. ${string}}`);
console.log(`Using imported functions! ${searchView.add(searchView.ID,2)} and ${searchView.multiply(3,5)}. ${string}}`);