"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Invoice_js_1 = require("./classes/Invoice.js");
const Payment_js_1 = require("./classes/Payment.js");
const ListTemplate_js_1 = require("./classes/ListTemplate.js");
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate_js_1.ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice_js_1.Invoice(...values);
    }
    else {
        doc = new Payment_js_1.Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
