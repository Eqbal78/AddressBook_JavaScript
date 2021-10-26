console.log("Welcome to Address Book!");

class Contact 
{
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