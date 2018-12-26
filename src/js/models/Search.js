import axios from 'axios';
import { key, proxy } from '../config';
export default class Search {
    constructor(query) {
        this.query = query;


    }

    async getResults() {

        try {
            const res = await axios.get(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            //  axios.get('https://cors-anywhere.herokuapp.com/' + yourUrl)
            this.result = res.data.recipes;
            console.log('recipes :', this.result);
        } catch (error) {
            alert(error);
        }

    }
}