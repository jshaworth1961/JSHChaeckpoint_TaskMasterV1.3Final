//store.js
import List from "./Models/List.js";
import Item from "./Models/Item.js";


let _state = {
  /** @type {List[]} */
  lists: []
};



function _loadState() {
  console.log(`You are in the loadState constructor`);
  let storedLists = JSON.parse(localStorage.getItem("lists"));
  if (storedLists !== null) {
    _state.lists = storedLists.lists.map(list => {
      let newList = new List(list)
      newList.items.forEach(item => {
        let newItem = new Item(item);
      });
      return newList;
    });
    console.log(_state.lists)


    //return _state;
  }
}

//when store is called the private method _loadState is executed which brings all data up from
//local storage
_loadState();

class Store {

  constructor() {
    console.log(`You are in the State constructor.`);
  }
  /**
   * Provides access to application state data
   */
  //gets the current state
  get State() {
    return _state;
  }

  //NOTE call saveState everytime you change the state in any way
  saveState() {
    console.log('You are in State the saveState method');
    localStorage.setItem("lists", JSON.stringify(_state));
  }


}

_loadState();

const store = new Store();
export default store;
