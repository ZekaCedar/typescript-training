class Customer {
  // private _firstName: string;
  // private _lastName: string;

  constructor(private _firstName: string, private _lastName: string) {
    // this._firstName = theFirst;
    // this._lastName = theLast;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
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
