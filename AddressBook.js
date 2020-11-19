// UC 1
// Creating contacts class
{
    class AddressBookContacts {
        
        // constructor
        constructor(...params) {
            this.firstName = params[0];
            this.lastName = params[1];
            this.address = params[2];
            this.city = params[3];
            this.state = params[4];
            this.zip = params[5];
            this.phoneNo = params[6];
            this.email = params[7];
        }

        get firstName(){ return this._firstName; }
        set firstName(firstName){ this._firstName = firstName;}

        get lastName() { return this._lastName; }
        set lastName(lastName){ this._lastName = lastName; }
    
        get address(){ return this._address; }
        set address(address){ this._address = address; }
    
        get city(){ return this._city; }
        set city(city){ this._city = city; }
    
        get state(){ return this._state; }
        set state(state){ this._state = state; }

        get zip(){ return this._zip; }
        set zip(zip){ this._zip = zip; }

        get phoneNo(){ return this._phoneNo; }
        set phoneNo(phoneNo){ this._phoneNo = phoneNo; }

        get email(){ return this._email; }
        set email(email){ this._email = email; }
    
        // method 
        toString() 
        {
            return "FirstName=" + this.firstName + ", LastName=" + this.lastName + ", Address=" + this.address + ", City=" + this.city + ", State=" + this.state + ", Zip=" + this.zip + ", Phone Number=" + this.phoneNo + ", Email=" + this.email;
        }
    }
    let addressBookContacts = new AddressBookContacts("Kumar", "Kartikeya", "Techman City", "Agra", "Uttar Pradesh", "281006", "7206183244", "kumar.kartikeya@capgemini.com");
    console.log("UC 1-----"+addressBookContacts.toString());
}

// UC 2
// Entering valid entries in contacts
{
    class AddressBookContacts {
        
        // constructor
        constructor(...params) {
            this.firstName = params[0];
            this.lastName = params[1];
            this.address = params[2];
            this.city = params[3];
            this.state = params[4];
            this.zip = params[5];
            this.phoneNo = params[6];
            this.email = params[7];
        }

        get firstName(){ return this._firstName; }
        set firstName(firstName) 
        {
            let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
            if (nameRegex.test(firstName))
                this._firstName = firstName;
            else throw 'First name is incorrect!';
        }

        get lastName() { return this._lastName; }
        set lastName(lastName) 
        {
            let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
            if (nameRegex.test(lastName))
                this._lastName = lastName;
            else throw 'Last name is incorrect!';
        }
    
        get address(){ return this._address; }
        set address(address)
        {
            let addressRegex= RegExp('^[A-Z0-9a-z ]{4,}$');
            if(addressRegex.test(address))
                this._address= address;
            else throw "Incorrect Address";
        }
    
        get city(){ return this._city; }
        set city(city)
        {
            let cityRegex= RegExp('^[A-Z0-9a-z ]{4,}$');
            if(cityRegex.test(city))
                this._city= city;
            else throw "Incorrect city";
        }
    
        get state(){ return this._state; }
        set state(state)
        {
            let stateRegex= RegExp('^[A-Z0-9a-z ]{4,}$');
            if(stateRegex.test(state))
                this._state= state;
            else throw "Incorrect state";
        }

        get zip(){ return this._zip; }
        set zip(zip)
        {
            let zipRegex= RegExp('^[0-9]{1}[a-zA-Z0-9]{2}[ ]*[a-zA-Z0-9]{2}[0-9]{1}$');
            if(zipRegex.test(zip))
                this._zip= zip;
            else throw "Incorrect zip";
        }

        get phoneNo(){ return this._phoneNo; }
        set phoneNo(phoneNo)
        {
            let phoneNoRegex= RegExp('^[1-9]{1}[0-9]{9}$');
            if(phoneNoRegex.test(phoneNo))
                this._phoneNo= phoneNo;
            else throw "Incorrect phone number";
        }

        get email(){ return this._email; }
        set email(email)
        {
            let emailRegex= RegExp('[a-zA-Z0-9]+([+-_.][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]+([.][a-zA-Z]{2})*$');
            if(emailRegex.test(email))
                this._email= email;
            else throw "Incorrect email";
        }
    
        // method 
        toString() 
        {
            return "FirstName=" + this.firstName + ", LastName=" + this.lastName + ", Address=" + this.address + ", City=" + this.city + ", State=" + this.state + ", Zip=" + this.zip + ", Phone Number=" + this.phoneNo + ", Email=" + this.email;
        }
    }
    let addressBookContacts = new AddressBookContacts("Kumar", "Kartikeya", "Techman City", "Agra", "Uttar Pradesh", "281006", "7206183244", "kumar.kartikeya@capgemini.com");
    console.log("UC 2------"+addressBookContacts.toString());
}