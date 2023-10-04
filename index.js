
/** SELECT ITEMS */
const submitBtn = document.querySelector('#submitBtn'),itemInput = document.querySelector('#itemInput'), grocery_form = document.querySelector('.grocery_form'), grocery_list = document.querySelector('.grocery_list'), grocery_container = document.querySelector('.grocery_container'),grocery_item = document.querySelector('.grocery_item'), alert = document.querySelector('.alert'), delete_btn = document.querySelector('.delete_btn'), clear_btn = document.querySelector('.clear_btn');

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
    displayAlert('empty list', 'danger', 'visible')
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
// select items

