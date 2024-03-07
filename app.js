import { Invoice } from './public/classes/Invoice.js';
import { Payment } from './public/classes/Payment.js';
import { ListTemplate } from './public/classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('.item-list');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;

    if(values[0]==="" || values[1]==="" || !values[2]){

    const failureMessage = document.getElementById('failureMessage');
  
    function showFailureMessage() {
      failureMessage.style.display = 'flex';
      setTimeout(function() {
        failureMessage.style.display = 'none';
      }, 1000);
    }
    
    // Simulate adding to the list
    // Call showSuccessMessage() when item is successfully added
    setTimeout(() => {
      showFailureMessage();
    }, 1000);

        
    }else{

    
            if (type.value === 'invoice') {
                doc = new Invoice(...values);
            }
            else {
                doc = new Payment(...values);
            }
            list.render(doc, type.value, 'end');
            form.reset();
        
            const successMessage = document.getElementById('successMessage');
          
            function showSuccessMessage() {
              successMessage.style.display = 'flex';
              setTimeout(function() {
                successMessage.style.display = 'none';
              }, 1000);
            }
            
            // Simulate adding to the list
            // Call showSuccessMessage() when item is successfully added
            setTimeout(() => {
              showSuccessMessage();
            }, 1000);

    }

});

