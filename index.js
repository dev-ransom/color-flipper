
/** SELECT ITEMS */
const submitBtn = document.querySelector('#submitBtn'),itemInput = document.querySelector('#itemInput'), grocery_form = document.querySelector('.grocery_form'), grocery_list = document.querySelector('.grocery_list'), grocery_container = document.querySelector('.grocery_container'),grocery_item = document.querySelector('.grocery_item'), alert = document.querySelector('.alert'), clear_btn = document.querySelector('.clear_btn');

// ******************** edit options *************
let editElement;
let editFlag = false;
let editID = "";

// Eventlistners 
grocery_form.addEventListener('submit', addItem);
clear_btn.addEventListener('click', clearItems);
// function

function addItem(e){
    e.preventDefault();
    const value  = itemInput.value;
    const id = new Date().getTime().toString();

    // condition for submission
    if(value  && !editFlag ){
        // createElement
        const element = document.createElement('article');
        // addclasslist
        element.classList.add('grocery_item');
        // 
        const Attr = document.createAttribute('data-id');
        Attr.value = id;
        element.setAttributeNode(Attr);
        element.innerHTML = `<p class="item">${value}</p>
        <article class="btn_container">
            <button class="edit_btn">
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="delete_btn">
                <i class="fa-solid fa-trash"></i>
            </button>
        </article>`
        // event listener for edit and delete btn
        const edit_btn = element.querySelector('.edit_btn');
        const delete_btn = element.querySelector('.delete_btn');
        delete_btn.addEventListener('click', deleteItem)
        edit_btn.addEventListener('click', editItem)
        grocery_list.appendChild(element)
        // displayAlert
        displayAlert('item added to the list', 'success', 'visible')
        // show cotainer
        grocery_container.classList.add('show_container');
        // add to locale storage
        addToLocalStorage(id,value);
        // set back to default 
        setBackToDefault();
    }
    else if( value  && editFlag ){
        
    }
    else{
        displayAlert('please enter value', 'danger', 'visible');
    }
    
}

// clearItems
function clearItems(){
    const items = document.querySelectorAll('.grocery_item');
    if(items.length > 0){
        items.forEach(function(item){
            grocery_list.removeChild(item);
        })
    }
    grocery_container.classList.remove('show_container');
    displayAlert('empty list', 'danger', 'visible');
    setBackToDefault();
}


// deletebtn
function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    grocery_list.removeChild(element) ;
    if(grocery_list.children.length === 0){
        grocery_container.classList.remove('show_container')
    }
    displayAlert('item removed', 'danger', 'visible');
    setBackToDefault();
    removeLocalStorage(id);
}
// set edititems

function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // set item
    itemInput.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = 'edit'
    
}
// displayAlert function

function displayAlert(text, action, visible){
        alert.textContent = text;
        alert.style.visibility = visible;
        alert.classList.add(`alert_${action}`);
        

        // removealert
       setTimeout(function(){
        alert.classList.remove(`alert_${action}`);
        alert.style.visibility = 'hidden';
       },1000)
}



// set back to default 
function setBackToDefault(){
    itemInput.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = 'Submit'
}

// local storage 
function addToLocalStorage(id, value){
    console.log('added to local storage');
}

function removeLocalStorage(id){} 
// select items

