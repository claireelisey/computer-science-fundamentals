class Line {
    constructor(person){
        this.persons = [];
    }
      
    addPerson(person){
        this.persons.push(person);
    }
    
    findPerson(person){
        for (let i = 0; i <= this.persons.length; i++){
        if (this.persons[i] === person){
            console.log ("Found " + person + " at index" + " " + i);
        } else {
            console.log (person + " was not found.");
        }
        }
    }

    cutLine(person){
        this.persons.splice(1, 0, person);
        console.log(this.persons);
    }

    leaveLine(person){
        const index = this.persons.indexOf(person);
        if (index !== person) {
        this.persons.splice(4, 1);
    }
        console.log(this.persons);
    }
      
}

let line = new Line();

line.addPerson("Vivian");
line.addPerson("Ava");
line.addPerson("Josh");
line.addPerson("Patrick");
line.addPerson("Mike");
line.addPerson("Mary");

line.findPerson("Josh");
line.findPerson("Emily");

line.cutLine("Melissa");

line.leaveLine("Patrick");