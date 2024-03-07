import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
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
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
    form.reset();
});
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// const itemList = document.querySelector('.item-list') as HTMLUListElement; // Select the <ul> element
// const list = new ListTemplate(itemList); // Create an instance of ListTemplate
// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();
//   // Extract form values
//   const type = document.querySelector('#type') as HTMLSelectElement;
//   const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
//   const details = document.querySelector('#details') as HTMLInputElement;
//   const amount = document.querySelector('#amount') as HTMLInputElement;
//   let values: [string, string, number];
//   values = [tofrom.value, details.value, amount.valueAsNumber];
//   let doc: HasFormatter;
//   if (type.value === 'invoice') {
//     doc = new Invoice(...values);
//   } else {
//     doc = new Payment(...values);
//   }
//   // Render the document and clear the form fields
//   list.render(doc, type.value, 'end');
//   form.reset(); // Clear the form fields after submission
// });
