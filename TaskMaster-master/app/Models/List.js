//List.js
import { generateId } from "../utils.js";
import Item from "../Models/Item.js";

export default class List {
  constructor(data) {

    console.log("You are in the List constructor");
    this.listName = data.listName;
    this.id = data.id || generateId();
    this.items = data.items || [];

  }

//this gets pseudo html code to bring to the view
  get Items() {
    console.log(`in get Items()`);
    let str = '';
    this.items.forEach(item => {
      console.log(item.listItem);
      console.log(`item.id is ${item.id}`);
      console.log(`the list id is ${this.id}`);
      str +=
        `
        <div class = "col-12 col-md-8">
        <p class = "p-listed-items">
        ${item.listItem}</p>
        </div>
        <div class = "col-12 col-md-4">
        <p>
        <button onclick = "app.listController.removeItem('${this.id}','${item.id}')"
        class = "btn-remove-task">Delete Task</button>
        </p>
        </div>
        `
      //str += item.Template; does not work!!!!!!
    });

    return str;
  }

//in this template that goes with a list we take in the get Items property at the end to show the items 
//that belong to a particular list
  get Template() {


    return `
      <div class = "col-12 col-md-12 border-1">
        <fieldset class = "fieldset-list">
          <div class = "row p-list-title">
              <div class = "col-12 col-md-2" >
                <p  class = "p-list-heading">                         
                  ${this.listName}
                </p>
              </div>
              <div class = "col-12 col-md-2">
              <p class = "p-rr-wile">
                <img class = "img-rr-wile"  src = "assets/roadrunner_wile.jpg">
              </p>
              </div>
              <div class = "col-12 col-md-5">
              </div>
              <div class = "col-12 col-md-3">
                <p>
                  <button onclick = "app.listController.removeList('${this.id}')" class = "btn-garbagecan">
                    <img src = "assets/garbagecan.jpg" class =
                  "img-gcan"></button>
                </p>
              </div>
          </div>
          <div>
            <div class = "row p-1">
            </div>
          </div>
         <form onsubmit = "app.listController.addItemToList(event,'${this.id}')">
          <div class = "row">
            <div class = "col-12 col-md-12">
              <p class="p-header">
                <label class="lbl-create">Add "ToDo" to List
                  <input name="itemName" id="ipt-itemname" class="ipt-listname" type="text">
                  <button type="submit" class="btn-item" >Add "ToDo"</button>
                </label>
              </p>
            </div>
          
          </div>
          </form>
          <div class = "row">
            <div class = "col-12 col-md-12">
              <fieldset class = "fieldset-item">
              <div class = "row">
                
                  ${this.Items}
            
                
              </div>
            
              </fieldset>
            </div>
          </div>
        </fieldset>
      </div>
    `


  }


}
