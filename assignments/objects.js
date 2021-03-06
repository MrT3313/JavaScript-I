// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// Write your intern objects here:

        //create INTERNS array
        let INTERNS = [];

          //create first intern
          let intern1 = {
            id: 1,
            name: 'Mitzi',
            email: 'mmelloy@psu.edu',
            gender: 'F'
          }
          // console.log(intern1);
          INTERNS.push(intern1);

          //create second intern
          let intern2 = {
            id: 2,
            name: 'Kennan',
            email: 'kdiben1@tinypic.com',
            gender: 'M'
          }
          //console.log(intern2);
          INTERNS.push(intern2);


          //create third intern
          let intern3 = {
            id: 3,
            name: 'Kevin',
            email: 'kmummery2@wikimedia.org',
            gender: 'M'
          }
          //console.log(intern3);
          INTERNS.push(intern3);

          //create forth intern
          let intern4  = {
            id: 4,
            name: 'Gannie',
            email: 'gmartinson3@illinois.edu',
            gender: 'M'
          }
          //console.log(intern4);
          INTERNS.push(intern4);

          //create fifth intern
          let intern5 = {
            id: 5,
            name: 'Antonietta',
            email: 'adaine5@samsung.com',
            gender: 'F'
          }
          //console.log(intern5);
          INTERNS.push(intern5);

          // log the final Full INTERNS array 
          console.log(INTERNS);


// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
    console.log('Mitzi\'s name = ' + INTERNS[0].name);
// Kennan's ID
    console.log('Kennan\'s ID = ' + INTERNS[1].id);
// Keven's email
    console.log('Keven\'s Email = ' + INTERNS[2].email);
// Gannie's name
    console.log('Gannie\'s Name = ' + INTERNS[3].name);
// Antonietta's Gender
    console.log('Antonietta\'s Gender = ' + INTERNS[4].gender);

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());

        // 1) add key to obj    2) // create METHOD (aka function as a key's value pairing)
        INTERNS[1].speak = function() {
          console.log(`HELLO, my name is ${INTERNS[1].name}`)
        } 

          console.log(INTERNS[1].speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));

          // 1) add key to obj    2) // create METHOD (aka function as a key's value pairing)
          INTERNS[4].multiplyNums = function (A,B) {
            return A * B;
          }

          console.log(INTERNS[4].multiplyNums(3,5));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  name: 'susan',
  age: 70,
  child: {
    name: 'george',
    age: 50,
    grandChild: {
      name: 'Sam',
      age: 30,
      speak: function () {
        console.log(`Mi nombre es ${this.name}`)
      }
    },
    speak: function () {
      console.log(`My name is ${this.name}`)
    }
  },
  speak: function () {
    console.log(`My name is DJ ${this.name} THE mixtape melter`)
  }
};

// Log the parent object's name
  console.log(parent.name);

// Log the child's age
  console.log(parent.child.age);

// Log the name and age of the grandchild
  console.log(parent.child.grandChild);

// Have the parent speak
  console.log(parent.speak());

// Have the child speak
  console.log(parent.child.speak());
  
// Have the grandchild speak
  console.log(parent.child.grandChild.speak());
