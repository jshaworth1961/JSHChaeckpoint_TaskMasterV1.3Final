//ListController.js
import _listService from "../Services/ListService.js";
import _store from "../store.js"



//Updates any changes to the user view as soon as they occur.
function _updateData() {

  console.log("In ListController updateData()");
  let lists = _store.State.lists;
  let listElement = document.getElementById("list-location");
  let str = "";

  lists.forEach(list => {
    //list.getItems();
    str += list.Template;
  });

  listElement.innerHTML = str;



  console.log(`in ListController `)
  //prints out the items in each list
  lists.forEach(list => {
    list.items.forEach(item => {
      console.log(`list: ${list.listName} item: ${item.listItem}`);

    }

    )
  })

}

//Public
export default class ListController {
  constructor() {

    console.log(`You are in the ListController constructor`);
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _updateData();
  }


//adds new list including to local storage
  addList(event) {
    console.log("You are in the ListController addList method");

    event.preventDefault();

    let formData = event.target;

    let newList =
    {
      listName: formData.listName.value
    }

    console.log(newList);

    _listService.addList(newList);

    _updateData();

    formData.listName.value = "";

  }

  //removes list including from local storage
  removeList(listId) {

    let verify = confirm(`Are you sure you want to delete this list?`)

    let text = "";
    if (verify === true) {
      text = "You deleted the item from the list."
      _listService.removeList(listId);
    }
    else {
      text = "You chose not to delete the item from the list."

    }


    _updateData();
  }

  //adds new item including to local storage
  addItemToList(event, listId) {
    console.log(`You are in ListController in addItemToList`);

    event.preventDefault();

    let formData = event.target;

    console.log(listId);

    let newItem =
    {
      listItem: formData.itemName.value

    }

    console.log(formData.itemName.value);

    _listService.addItemToList(newItem, listId);

    _updateData();

  }

  //remove item including from local storage
  removeItem(listId, itemId) {
    console.log("In listController removeItem");
    console.log(listId);
    console.log(itemId);

    let verify = confirm("Are you sure you want to delete this item?");

    let text = '';
    if (verify === true) {
      text = "You deleted the item from the list."
      _listService.removeItem(listId, itemId);
      _updateData();
    }
    else {
      text = 'You chose not to delete the item.'
    }

  }
}
