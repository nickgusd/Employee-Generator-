// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee{
constructor(officeNumber, id, email, name) {
    super(name, id, email) //Need to update these values later on for items that are passed through
    this.officeNumber = officeNumber;
    this.role = "Manager";

}


getRole() {
    return this.role;
}

getOfficeNumber() {
return this.officeNumber;
}

}



module.exports = Manager;

// In addition to `Employee`'s properties and methods, `Manager` will also have:

//   * officeNumber

//   * getRole() // Overridden to return 'Manager'
