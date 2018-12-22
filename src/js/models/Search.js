import axios from 'axios';
export default class Search {
    constructor(query) {
        this.query = query;


    }

    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '624a6b312a1abed6cf2bd597b50709fa';
        try {
            const res = await axios.get(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            //  axios.get('https://cors-anywhere.herokuapp.com/' + yourUrl)
            this.result = res.data.recipes;
            console.log('recipes :', this.result);
        } catch (error) {
            alert(error);
        }

    }
}