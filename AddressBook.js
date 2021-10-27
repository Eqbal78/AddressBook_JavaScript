console.log("Welcome to Address Book!");

class Contact 
{
    // getter setters with REGEX validations
    get firstName() 
    {
         return this._firstName; 
    }
    set firstName(firstName) 
    {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw "Invalid firstname";
    }
    get lastName() 
    {
         return this._lastName; 
    }
    set lastName(lastName) 
    {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw "Invalid lastname";
    }
    get address() 
    {
         return this._address; 
    }
    set address(address) 
    {
        let addressRegex = RegExp('^[A-Za-z0-9]{4,}$');
        if (addressRegex.test(address))
            this._address = address;
        else
            throw "Invalid address";
    }
    get city() 
    {
         return this._city; 
    }
    set city(city) 
    {
        let cityRegex = RegExp('^[A-Za-z]{4,}$');
        if (cityRegex.test(city))
            this._city = city;
        else
            throw "Invalid city";
    }
    get state() 
    {
         return this._state; 
    }
    set state(state) 
    {
        let stateRegex = RegExp('^[A-Za-z]{4,}$');
        if (stateRegex.test(state))
            this._state = state;
        else
            throw "Invalid state";
    }
    get zip() 
    {
         return this._zip; 
    }
    set zip(zip) 
    {
        let zipRegex = RegExp('^[0-9]{3,}$');
        if (zipRegex.test(zip))
            this._zip = zip;
        else
            throw "Invalid Zip code";
    }
    get phoneNumber() 
    {
        return this._phoneNumber; 
    }
    set phoneNumber(phoneNumber) 
    {
        let phoneNumberRegex = RegExp('^([0-9]{2}[ ])?[6-9]{1}[0-9]{9}$');
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw "Invalid phone number";
    }
    get email() 
    {
         return this._email; 
    }
    set email(email) 
    {
        let emailRegex = RegExp('^[a-z0-9A-Z]+([._+-][a-z0-9A-Z]+)*[@][a-z0-9A-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3})?$')
        if (emailRegex.test(email))
            this._email = email;
        else
            throw "Invalid Email";
    }

    // constructor
    constructor(...params) 
    {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    // To string method for displaying contacts
    toString() 
    {
        return "First Name : " + this.firstName + "\nLast Name  : " + this.lastName + "\nAddress : " + this.address +
            "\nCity  : " + this.city + "\nState : " + this.state + "\nZip   : " + this.zip + "\nPhone : " + this.phoneNumber + "\nEmail : " + this.email;
    }


}
let contact = new Contact("Tony", "Stark", "StarkTower", "Mumbai", "Maharashtra", "101001", "8987224534", "ironman@gmail.com");
console.log(contact.toString());

// Create AddressBook array
let AddressBook = [];

// Check if given contact exists in Address book
function FindContact(firstName,lastName)
{
    if (AddressBook.find(person => person.firstName == firstName && person.lastName == lastName))
        return true;
}

// Function to add new contact to AddressBook
function AddContact(firstName, lastName, address, city, state, zip, phoneNumber, email) 
{
    try 
    {
        let newcontact = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
        if (FindContact(firstName, lastName))
            throw "Contact '" + firstName + " " + lastName + "' already exists";
        else 
            AddressBook.push(newcontact);
    }
    catch (e) 
    {
        console.error(e);
    }
}

// Adding contacts to AddressBook
AddContact("Tony", "Stark", "StarkTower", "Mumbai", "Maharashtra", "101001", "91 8987224534", "ironman@gmail.com");
AddContact("Steve", "Rogers", "TimesSquare", "Hyderabad", "Telangana", "114224", "91 9876778434", "captainAmerica@yahoo.com");
AddContact("Bruce", "Banner", "Vandalia", "Chennai", "Tamilnadu", "454241", "91 9403425611", "incredibleHulk@gmail.com");
AddContact("Peter", "Parker", "Queens", "Bangalore", "Karnataka", "122440", "91 7013456376", "spiderman@yahoo.com");
AddContact("Pepper", "Potts", "StarkTower", "Mumbai", "Maharashtra", "101001", "91 6300924534", "pepper@stark.co.in");
AddContact("Thor", "Odinson", "Asgard", "Hyderabad", "Telangana", "114224", "91 9949278434", "thor@yahoo.com");
AddContact("Stephen", "Strange", "AkshayaNagar","Warangal", "Telangana", "534224", "91 7690778434", "drStrange@rediffmail.com");

// Printing AddressBook
function Display()
{
    AddressBook.forEach(contact => console.log(contact.toString()));
}

let index=  AddressBook.findIndex(contact=>contact.firstName == "Thor");
AddressBook[index].lastName="Jamadar";
console.log("************************************************************************");
console.log("After updating Addressbook: ");
Display();

console.log("******************************************************************");
AddressBook.splice(index, 1);
console.log("contacts after being deleted");
Display();