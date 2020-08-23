// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
constructor(school, id, email) {
   
    super(name, id, email); //Need to update these values later on for items that are passed through
    this.school = school;
    this.role = "Intern";
}
getSchool() {
    return this.school;
}

getRole(){
    return this.role;
}



}




module.exports = Intern;


// In addition to `Employee`'s properties and methods, `Intern` will also have:

//   * school 

//   * getSchool()

//   * getRole() // Overridden to return 'Intern'
