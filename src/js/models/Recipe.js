import axios from 'axios';
import { key, proxy } from '../config';
export default class Recipe {
    constructor(id) {
        this.id = id;
    }
    async getRecipe() {
        try {
            const res = await axios.get(`${proxy}http://food2fork.com/api/search?key=${key}&rId=${this.id}`);
            console.log('res :', res);
        } catch (error) {
            console.log('error :', error);
        }
    }
}