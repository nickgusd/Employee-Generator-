// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor() {
    super(name, id, email) //Need to update with real values later on that will be passed through
        this.github = github;
        this.role = "Engineer";


    }

    getGithub() {
        return this.github;
    }
    getRole() {
        return this.role;
    }


}





// In addition to `Employee`'s properties and methods, `Engineer` will also have:

//   * github  // GitHub username

//   * getGithub()

//   * getRole() // Overridden to return 'Engineer'