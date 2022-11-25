class Customer {
  private firstName: string;
  private lastName: string;

  constructor(theFirst: string, theLast: string) {
    this.firstName = theFirst;
    this.lastName = theLast;
  }
}

//create an instance
// let myCustomer = new Customer();

// use constructor
let myCustomer = new Customer("Siti Zulaikha", "Mohd Affandi");

// myCustomer.firstName = "Siti Zulaikha";
// myCustomer.lastName = "Mohd Affandi";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
