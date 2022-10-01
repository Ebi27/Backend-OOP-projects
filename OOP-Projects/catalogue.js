/*
Create a digital school catalog for the New York City Department of Education. 
The Department of Education wants the catalog to hold quick reference material for each school in the city.

We need to create classes for primary and high schools. 
Because these classes share properties and methods, each will inherit from a parent School class. 
*/

//parent school
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(value) {
    if (value.isNaN()) {
      console.log(`Invalid input: numberOfStudents must be set to a Number.`);
    } else {
      this._numberOfStudents = value;
    }
  }
  quickFacts() {
    console.log(
      `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level`
    );
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const showSub = Math.floor(substituteTeachers.length * Math.random());
    return substituteTeachers[showSub];
  }
}
// console.log(School.numberOfStudents);

//Primary school subclass to inherit parent class with one additional property
class Primarysch extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "Primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

//instance
const lorraineHansbury = new Primarysch(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);
lorraineHansbury.quickFacts();

// console.log(lorraineHansbury);

const sub = School.pickSubstituteTeacher([
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
]);
// console.log(School);
//Middle school subclass to inherit parent class with one additional property
class Middlesch extends School {
  constructor(name, numberOfStudents, dramaTeam) {
    super(name, "Middle", numberOfStudents);
    this._dramaTeam = dramaTeam;
  }
  get dramTeam() {
    return this._dramaTeam;
  }
}

const brandon = new Middlesch("Brandon Smoothie", 200, [
  "Sholly B",
  "Bouks Shirley",
  "Peter Gan",
]);

brandon.quickFacts();

//High school subclass to inherit parent class with one additional property

class Highsch extends School {
  constructor(name, numberOfStudents, sportsTeam) {
    super(name, "High", numberOfStudents);
    this._sportsTeam = sportsTeam;
  }
  get sportsTeam() {
    return this._sportsTeam;
  }
}

const alSmith = new Highsch("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);

alSmith.quickFacts();
console.log(alSmith.sportsTeam);

//create a school catalog class that holds a collection of schools. 
//Create an instance for primary, secondary and high schools.