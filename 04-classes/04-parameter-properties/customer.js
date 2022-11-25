"use strict";
var Customer = /** @class */ (function () {
    // private _firstName: string;
    // private _lastName: string;
    function Customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        // this._firstName = theFirst;
        // this._lastName = theLast;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
//create an instance
// let myCustomer = new Customer();
// use constructor
var myCustomer = new Customer("Siti Zulaikha", "Mohd Affandi");
// myCustomer.firstName = "Siti Zulaikha";
// myCustomer.lastName = "Mohd Affandi";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
