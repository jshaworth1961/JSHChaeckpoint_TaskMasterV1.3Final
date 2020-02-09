//ListService.js
import List from "../Models/List.js";
import _store from "../store.js"
import Item from "../Models/Item.js"

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change

  constructor() {
    console.log("You are in the ListService constructor");
  }

//adds new list including to local storage  
  addList(listObj) {
    console.log(`You are in the ListService addList method`);
    let newList = new List(listObj);
    _store.State.lists.push(newList);
    console.log(_store.State.lists);
    _store.saveState();
  }


//removes list including from local storage:searches by id
  removeList(listID) {
    console.log("You are in ListService removeList");


    let listToRemove = _store.State.lists.filter(list => list.id !== listID);

    console.log(listToRemove);

    _store.State.lists = listToRemove;

    _store.saveState();

  }

  //adds new item to list including local storage: uses both id from list to find list 
  //we want to add to
  addItemToList(itemObj, listId) {

    console.log(`You are in the ListService addItemToList method`);

    let newItem = new Item(itemObj);

    console.log(newItem);

    let listToAddItemTo = _store.State.lists.filter(list => list.id === listId);

    console.log(`The name of the list is ${listToAddItemTo[0].listName}`);

    listToAddItemTo[0].items.push(newItem);

    _store.saveState();

    console.log(`You are in the ListService addItemToList method`);

  }

//removes item from list including in local storage: pass in both list id and item id: we first
//need to find the list we want to delete the item from, then the specific item
  removeItem(listId, itemId) {
    console.log(`You are in ListService in the removeItem method`);

    console.log(`The id of the list where the item resides  is ${listId}`);
    console.log(`The id of the item to be removed is ${itemId}`);

    let listToSearch = _store.State.lists.filter(list => list.id === listId);

    let remainingItems = listToSearch[0].items.filter(item => item.id !== itemId);

    let revisedLists = _store.State.lists.forEach(list => {
      if (list.id === listId) {
        list.items = remainingItems;
      }

    });

    _store.saveState();


  }

}



const SERVICE = new ListService();
export default SERVICE;
