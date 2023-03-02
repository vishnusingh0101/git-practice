var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);
//Delete event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItems);

//Add item
function addItem(e) {
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('item');

    //Create new li element
    var li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    //add text Node with input value
    li.appendChild(document.createTextNode(newItem.value));

    //Create del button element
    var deleteBtn = document.createElement('button');
    var editBtn = document.createElement('button');

    //Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
    editBtn.className = 'btn btn-primary btn-sm float-end edit';
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('E'));

    //append button to li
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    

    itemList.appendChild(li);
}

// Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }

// Filter Items
function filterItems(e) {
    //convert to lowercase
    var text = e.target.value.toLowerCase();
    //get lis
    var items = itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1)  {
            item.style.display = 'block';
        }else {
            item.style.display = 'none';
        }
    });
}

