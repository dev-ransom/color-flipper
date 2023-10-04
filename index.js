
/** SELECT ITEMS */
const submitBtn = document.querySelector('#submitBtn'),itemInput = document.querySelector('#itemInput'), grocery_form = document.querySelector('.grocery_form'), grocery_list = document.querySelector('.grocery_list'),grocery_container = document.querySelector('.grocery_container'),grocery_item = document.querySelector('.grocery_item'), alert = document.querySelector('.alert'), delete_btn = document.querySelector('.delete_btn'), clear_btn = document.querySelector('.clear_btn');

// ******************** edit options *************
let editElement;
let editFlag = false;
let editID = "";

// Eventlistners 
grocery_form.addEventListener('submit', addItem);

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
        console.log(element);
        // displayAlert
        displayAlert('item added to the list', 'success', 'visible')
    }
    else if( value  && editFlag ){
        
    }
    else{
        displayAlert('please enter value', 'danger', 'visible');
    }
    
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

// local storage 

// select items
