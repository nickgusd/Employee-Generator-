// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
constructor(school, id, email, name) {
   
    super(name, id, email); 
    this.school = "UCLA";
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
