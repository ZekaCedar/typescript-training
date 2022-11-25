var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//create an instance
var myCustomer = new Customer("Siti Zulaikha", "Mohd Affandi");
// myCustomer.firstName = "Siti Zulaikha";
// myCustomer.lastName = "Mohd Affandi";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
