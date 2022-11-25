"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
//create an instance
// let myCustomer = new Customer();
// use constructor
var myCustomer = new customer_1.Customer("Siti Zulaikha", "Mohd Affandi");
// myCustomer.firstName = "Siti Zulaikha";
// myCustomer.lastName = "Mohd Affandi";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
