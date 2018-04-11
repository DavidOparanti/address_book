let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeShowItem);
itemList.addEventListener('mouseout', hideDetails);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add contact
function addItem(e) {
    e.preventDefault();
//debugger;
    // Get input value
    let contactName = document.getElementById('nam').value;
    let contactPhone = document.getElementById('phone').value;
    let contactEmail = document.getElementById('email').value;

    // create a element
    let a = document.createElement('a');
    a.href = '#';

    // Create new li element

    let li = document.createElement('li');
    // Add class
    li.setAttribute('class', ' list-group-item show');
   
    //creat makeup for phone and email;
    liInnerUl = document.createElement('ul')
    liInnerUl.className = "dir";

    li1 = document.createElement('li');
    li2 = document.createElement('li');

    // Addd text node with 
    li1.appendChild(document.createTextNode(contactPhone));
    li2.appendChild(document.createTextNode(contactEmail));

    liInnerUl.appendChild(li1);
    liInnerUl.appendChild(li2) 
     // Add text node with input value
    li.appendChild(document.createTextNode(contactName));
    li.appendChild(liInnerUl);

    // Create del button element
    let deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-dark btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    a.appendChild(li);

    // Append li to list
    itemList.appendChild(a);
}

// Remove and show item
function removeShowItem(e) {
    // Remove contact when delete button is clicked
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure you want to delete this contact?')) {
            let li = e.target.parentElement.parentElement;
            itemList.removeChild(li);
        }
    }

    // Toggle contact (show/hide contact details when  clicked). 
    if(e.target.classList.contains('show')){

       if(e.target.firstElementChild.style.display === 'none'){
           e.target.firstElementChild.style.display = 'block';
       }else{
           e.target.firstElementChild.style.display = 'none'
       }
    }
}

function hideDetails(e) {
    if (e.target.classList.contains('show')) {
            e.target.firstElementChild.style.display = 'none';
    }
}

// Filter Contacts
function filterItems(e) {
    // convert text to lowercase
    let text = e.target.value.toLowerCase();
    // Get list
    let items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function (item) {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}


