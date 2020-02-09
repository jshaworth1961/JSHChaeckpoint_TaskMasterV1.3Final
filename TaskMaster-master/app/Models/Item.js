//Item.js
import { generateId } from "../utils.js"

export default class Item {


    constructor(data) {

        console.log("You are in the Item constructor")

        this.listItem = data.listItem;
        this.id = data.id || generateId();
        console.log(this.listItem);
    }


    //did not use this get property: could not get it to work.
    get Template() {

        //console.log(`in Item get Template ${this.listItem}`);

        console.log(`in Template: ${this.listItem}`);
        return `<p>${this.listItem}</p>`

    }


}