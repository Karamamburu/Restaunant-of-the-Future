class Employee {
    
    static state = {
        "working": "working",
        "fired": "fired",
        "atHome": "atHome",
        "havingBreak": "havingBreak",
    };

    static experience = {
        "new": "trainee",
        "old": "experienced",
    }

    constructor (name, hierarchy, role, division, workExperience = "new") {
        this._name = name; /*имя*/
        this.hierarchy = hierarchy; /*линейный или менеджер*/
        this.role = role; /*должность*/
        this.division = division; /*подразделение: кухня, зал...*/
        this.workExperience = Employee.experience[workExperience]; /*стажёр или обученный*/
        this.state = Employee.state["atHome"]; /*чем занимается сейчас*/
    }

    getState() {
        return this.state;
    }
    setState(newState) {
        this.state = Employee.state[newState];
    }
    getWorkExperience() {
        return this.workExperience;
    }
    setWorkExperience(newWorkExperience) {
        this.workExperience = Employee.experience[newWorkExperience];
    }
}



let denis = new Employee("Denis", "worker", "waiter", "hall", "old"); 


console.log(denis.getState());
console.log(denis.getWorkExperience());