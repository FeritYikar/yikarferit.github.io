/*
let js = 'amazing';
if (js === 'amazing') alert('Javascript is best');
40 + 5;
console.log(5 + 6854 + 22 / 3 - 999);

console.log(js);

console.log('Ferit');

let firstName = 'Ferit';
console.log(firstName);
console.log(firstName);
console.log(firstName);

firstName = 'Jonas'
console.log(firstName);
console.log(firstName);

  Data Types
1 Numbers
2 String
3 Boolean

4 Undefined - not yet defined
5 Null
6 Symbol
7 BigInt - very big numbers

Dynamic typing - Automatically determines data type


console.log(true);

let javascript = true;
console.log(javascript);
console.log(typeof javascript);

console.log(typeof 15);

console.log(typeof 'Hello');

javascript = 5;
console.log(javascript);
console.log(typeof javascript); //we changed the datatype


let year;
console.log(year);
console.log(typeof year);

year = 2022;
console.log(year);
console.log(typeof year);

console.log(typeof null);


let age = 25;
age = 26; // reassigning

const birthYear = 1996;
// birthYear = 2000; // error cannot change const

// const job; // cannot leave empty


// Math operators
const now = 2022;
const ageFerit = now - 1996;
const ageSarah = now - 2000;
console.log(ageFerit, ageSarah);
console.log(ageFerit * 2, ageFerit / 10, 2 ** 3);

const firstName = 'Ferit';
const lastName = 'Yikar';
console.log(firstName + ' ' + lastName);

// Assignment operators

let x = 10 + 5;
console.log(x);
x += 2;
console.log(x);
x -= 1;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);
x *= 2;
console.log(x);
x /= 10;
console.log(x);

// Comparison operators
console.log(ageFerit > ageSarah);

console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1996 > now - 2000);

const now = 2022;
const ageFerit = now - 1996;
const ageSarah = now - 2000;

console.log(now - 1996 > now - 2000);

let x, y;

x = y = 5 + 15;
console.log(x, y);

const averageAge = (ageFerit + ageSarah) / 2;
console.log(ageFerit, ageSarah, averageAge);



const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBmi = markMass / markHeight ** 2;
const johnBmi = johnMass / johnHeight ** 2;

const markHigherBMI = markBmi > johnBmi;
console.log(markBmi, johnBmi, markHigherBMI);

const firstName = 'Ferit';
const job = 'Data Scientist';
const birthYear = 1996;
const now = 2022;

const ferit = "I'm " + firstName + ', a ' + (now - birthYear) + ' years old ' + job + '!';
console.log(ferit); // very hard to write this way

// better way to write with ``

const feritNew = `I'm ${firstName}, a ${now - birthYear} years old ${job}! 💹`;
console.log(feritNew);
console.log(`A string
multiple
lines`)


const age = 15;

if (age >= 18) {
    console.log('Old enough to drive 🚗');
} else {
    console.log(`Sarah must wait ${18 - age} years to drive ⏱️`)
}

const birthYear = 2010;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


const markMass = 95;
const markHeight = 1.88;
const johnMass = 95;
const johnHeight = 1.88;

const markBmi = markMass / markHeight ** 2;
const johnBmi = johnMass / johnHeight ** 2;

if (markBmi > johnBmi) {
    console.log(`Mark's BMI (${markBmi}) is higher than John's BMI (${johnBmi})`);
} else if (markBmi < johnBmi) {
    console.log(`John's BMI (${johnBmi}) is higher than Mark's BMI (${markBmi})`);
} else {
    console.log(`They have equal BMI's (${markBmi})`);
}

// Type conversion - manuel
const input_year = '1996';
console.log(input_year + 18); // str oldugu icin sonuna 18 ekler
console.log(Number(input_year) + 18); // bu sekilde duzgun calisir

console.log(Number('Ferit')); // NaN not a number
console.log(String(18) + 5); //185

// Type coescion - automatic
console.log('I am ' + 26 + ' years old!'); // 26 becomes string automatically
console.log(`5` + `5` + 3); // string olarak yapar + disinda - * /  number
console.log(`5` + `9` - `6`); // + string olarak - number

let n = `1` + 1; //String 11
n = n - 1; // - makes it a number then subtract 1 = 10
console.log(n);


// Truthy - False values

// Falsy values: 0, '', undefined, null, NaN - would be False if we convert to Boolean
// Everything else is Truthy

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean('Ferit'));

const money = 10;
if (money) {
    console.log(`Do not spend it all 💰`);
} else {
    console.log(`You need a job`);
}

let height;
if (height) {
    console.log(`Height is defined`);
} else {
    console.log(`Hieght is undefined`)
}

const age = 18;

if (age === 18) console.log(`You just became an adult`); // === means exactly equal == means equal but type can be different like 18 == '18' is True

if (age == 18) console.log(`You just became an adult`);

if (age === `18`) console.log(`You just became an adult`); // False
if (age == `18`) console.log(`You just became an adult`);

const favNumber = Number(prompt(`What is your favorite number?`))

console.log(favNumber);
console.log(typeof favNumber); //promt just like python input is by default str


if (favNumber !== 23) console.log(`Why not 23`) // != is loose !== is strict

const age = 16;

if (!(age >= 20) && age < 30) console.log(true);


const hasDriversLicence = true;
const hasGoodVision = true;

console.log(hasDriversLicence && hasGoodVision); //and

console.log(hasDriversLicence || hasGoodVision); // or

console.log(!hasDriversLicence || hasGoodVision); //

if (hasDriversLicence && hasGoodVision) {
    console.log(`Sarah can drive`);
} else {
    console.log(`Sarah should not drive`);
}

const isTired = true;
console.log(hasDriversLicence || hasGoodVision || isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log(`Sarah can drive`);
} else {
    console.log(`Sarah should not drive`);
}

const dolphinsAvg = (97 + 112 + 101) / 3;
const koalasAvg = (109 + 95 + 106) / 3;
console.log(dolphinsAvg, koalasAvg);


if (dolphinsAvg > koalasAvg && dolphinsAvg > 100) {
    console.log(`Dolphins are the winners with ${dolphinsAvg} points 🐬`);
} else if (dolphinsAvg === koalasAvg && dolphinsAvg > 100) {
    console.log(`There is a tie with ${dolphinsAvg} points each`);
} else if (koalasAvg > dolphinsAvg && koalasAvg > 100) {
    console.log(`Koalas are the winners with ${koalasAvg} points 🐨`);
} else {
    console.log(`There are no winners`)
}

// switch

const day = 'asd';

switch (day) {
    case 'monday': // if day === monday
        console.log('Plan the course structure');
        console.log('Prepare the resume');
        break;
    case 'tuesday':
        console.log('its tuesday');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('learn js');
        break;
    case 'friday':
        console.log('practice');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Weekend');
        break;
    default:
        console.log('Not a day');
}

//If else

if (day === 'monday') {
    console.log('Plan the course structure');
    console.log('Prepare the resume');
} else if (day === 'tuesday') {
    console.log('its tuesday');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('learn js');
} else if (day === 'friday') {
    console.log('practice');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Weekend');
} else {
    console.log('Not a day');
}


// Statements - Expressions

//Expressions - produce value
3 + 4
1991
true && false

//Statements does not produce value
if (32 > 10) {
    const str = `32 is bigger`;
}

// Ternary Operator (Conditional)

const age = 15;
age >= 18 ? console.log('I like to drink beer 🍺') : console.log('I like cola 🥤'); // one line if else statement

const drink = age >= 18 ? 'wine 🍷' : 'coffee☕';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'coffee'
}

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'coffee☕'}`);



const billAmount = 200;

tip = billAmount >= 50 && billAmount <= 300 ? billAmount * .15 : billAmount * .20

console.log(`The bill was ${billAmount}$, the tip was ${tip}$, and the total amount is ${billAmount + tip}$`);

*/

/*

let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true; //misspelled on purpose - gives an error because of strict
if (hasDriversLicence) console.log(`I can drive`);


// Functions

function logger() {
    console.log(`My name is Ferit`);
}

logger();

logger();

logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges!`;
    return juice;
}

fruitProcessor(5, 7);

const newJuice = fruitProcessor(3, 5);
console.log(newJuice);


// Function declerations vs Function expressions


// Function declerations
function calcAge1(birthYear, now) {
    return now - birthYear;
}

const feritAge1 = calcAge1(1996, 2022);
console.log(feritAge1);

// Function expressions

const calcAge2 = function (birthYear, now) {
    return now - birthYear;
}

const feritAge2 = calcAge2(1996, 2022);
console.log(feritAge2);


// Arrow functions

const calcAge3 = (birthYear, now) => now - birthYear;

const feritAge3 = calcAge3(1996, 2022);
console.log(feritAge3);

const yearsToRetirement = (birthYear, now) => 65 - (now - birthYear);

console.log(yearsToRetirement(1996, 2022));


function cutFruit(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruit(apples);
    const orangePieces = cutFruit(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges!`;
    return juice;
}

console.log(fruitProcessor(5, 7));


const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsAvg = calcAvg(65, 54, 49);
const koalasAvg = calcAvg(23, 34, 27);

console.log(dolphinsAvg, koalasAvg);

function checkWinner(dolphinsAvg, koalasAvg) {
    if (dolphinsAvg >= 2 * koalasAvg) {
        console.log(`Dolphines won (${dolphinsAvg} vs. ${koalasAvg})`);
    } else if (koalasAvg >= 2 * dolphinsAvg) {
        console.log(`Koalas won (${dolphinsAvg} vs. ${koalasAvg})`);
    } else {
        console.log(`No team wins`)
    }
}

checkWinner(dolphinsAvg, koalasAvg)


// Arrays

const friend1 = 'Michael';
const friend2 = 'Peter'; //...................

const friends = ['Ross', 'Rachael', 'Monica', 'Joey', 'Pheobe', 'Chandler'];
console.log(friends);

const years = new Array(1991, 1996, 1985, 2020); //another way to make objects

console.log(friends[4]);
console.log(friends.length);
console.log(friends[friends.length - 1]); //to get the last item

friends[2] = 'Ferit'
console.log(friends);

const ferit = ['ferit', 'yikar', 26, ['finance', 'data science', 'web development']];
console.log(ferit);

const calcAge = birthYear => 2022 - birthYear;

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age4 = calcAge(years[years.length - 1]);
console.log(age1, age2, age4);
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

// array methods

const friends = ['Ross', 'Rachael', 'Monica', 'Joey', 'Pheobe', 'Chandler'];
friends.push('mike');  // like append

console.log(friends)

friends.unshift('ferit'); //adds to beginning
console.log(friends);

friends.pop(); // opposite of push
console.log(friends);

friends.shift(); // removes the first
console.log(friends);

console.log(friends.indexOf('Joey'));


console.log(friends.includes('ferit')); //removed
console.log(friends.includes('Rachael'));


const billAmounts = [125, 555, 44];

const calcTip = billAmount => {
    return billAmount >= 50 && billAmount <= 300 ? billAmount * .15 : billAmount * .20;
}

const tipAmounts = [calcTip(billAmounts[0]), calcTip(billAmounts[1]), calcTip(billAmounts[2])];

console.log(billAmounts, tipAmounts);
console.log(billAmounts);


// Objects

const feritArray = [
    'ferit',
    'yikar',
    2022 - 1996,
    'data scientist',
    ['finance', 'data science']
];


//objects = python dict
const ferit = {
    firstName: 'Ferit',
    lastName: 'Yikar',
    age: 2022 - 1996,
    job: 'dataScientist',
    interests: ['finance', 'web development']
};

console.log(ferit.lastName); // to get data from an object
console.log(ferit['lastName']); // another way but we can use a formula or input to get 'lastname
const name = 'Name';
console.log(ferit['last' + name]); // we can get name from a user on the website for example

const interestedIn = prompt('What do you want to know about ferit? firstName, lastName, age, job, interests');

if (ferit[interestedIn]) {
    alert(ferit[interestedIn]);
} else {
    alert('Wrong request!!');
}

ferit.location = 'USA'; // to add new items to the object

console.log(ferit);

console.log(`${ferit.firstName} has ${ferit.interests.length} interests and the first one is ${ferit.interests[0]}`);

const ferit = {
    firstName: 'Ferit',
    lastName: 'Yikar',
    birthYear: 1996,
    job: 'dataScientist',
    interests: ['finance', 'web development'],
    hasDriversLicence: true,
    // calcAge: function () {
    //     console.log(this); // this is the ferit object
    //     return 2022 - this.birthYear} // define function in the object
    calcAge: function (birthYear) {
        return 2022 - birthYear;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge(1996)}-year old ${this.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} drivers licence`
    }

};

// we can then access to that function

console.log(ferit.calcAge());
console.log(ferit['calcAge']());

console.log(ferit.getSummary());

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return this.mass / this.height ** 2;
    }
};

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return this.mass / this.height ** 2;
    }
};

console.log(mark.calcBMI() > john.calcBMI() ? `${mark.firstName} ${mark.lastName}'s BMI ${mark.calcBMI()} is higher than ${john.firstName} ${john.lastName}'s ${john.calcBMI()}` : `${john.firstName} ${john.lastName}'s BMI ${john.calcBMI()} is higher than ${mark.firstName} ${mark.lastName}'s ${mark.calcBMI()}`);

// For loops

for (let rep = 1; rep <= 10; rep++) {
    console.log(`push up rep:${rep}`);
}

const feritArray = [
    'ferit',
    'yikar',
    2022 - 1996,
    'data scientist',
    ['finance', 'data science']
];
const types = [];
for (let i = 0; i < feritArray.length; i++) {
    console.log(feritArray[i], typeof (feritArray[i]));
    types.push(typeof feritArray[i]);
}

console.log(types);

const years = [1996, 2000, 1980, 2010, 1990];
const ages = []
for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
}
console.log(ages);

// continue
for (let i = 0; i < feritArray.length; i++) {
    if (typeof (feritArray[i]) !== 'string') continue; // if it is string just go to next iteration

    console.log(feritArray[i], typeof (feritArray[i]));
}

// break - finished the whole loop
for (let i = 0; i < feritArray.length; i++) {
    if (typeof (feritArray[i]) === 'number') break; // whenever it sees a number it finishes
    console.log(feritArray[i], typeof (feritArray[i]));
}

const feritArray = [
    'ferit',
    'yikar',
    2022 - 1996,
    'data scientist',
    ['finance', 'data science']
];

for (let i = feritArray.length - 1; i >= 0; i--) {
    console.log(feritArray[i], typeof (feritArray[i]));
}

// loop within a loop

for (let exercise = 1; exercise <= 5; exercise++) {
    console.log(`------- Starting exercise ${exercise}`);

    for (let rep = 1; rep <= 10; rep++) {
        console.log(`Do push-up ${rep} 🤸`);
    }
}

// While loop

for (let rep = 1; rep <= 10; rep++) {
    console.log(`push up rep:${rep}`);
}

console.log('While loop')
// do the same with a while loop
let rep = 1
while (rep <= 10) {
    console.log(`push up rep:${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6);

while (dice !== 6) {
    dice = Math.trunc(Math.random() * 6) + 1;
    console.log(`you rolled a ${dice}`);
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = []
let totals = []

for (let i = 0; i < bills.length; i++) {
    let tip = bills[i] >= 50 && bills[i] <= 300 ? bills[i] * .15 : bills[i] * .20;
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

function calcAverage(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}
console.log(calcAverage(bills), calcAverage(tips), calcAverage(totals));
*/

"use strict";

const projects = document.querySelector(".projects");
const home = document.querySelector(".home");
const projectButton = document.querySelector(".btn-projects");
const feritButton = document.querySelector(".btn-home");

const scrollInto = function (e) {
  e.scrollIntoView({ behavior: "smooth", block: "start" });
};

//Click Ferit Yikar to go to top

feritButton.addEventListener("click", function () {
  scrollInto(home);
});

//Click Projects to go to the portfolio

projectButton.addEventListener("click", function () {
  scrollInto(projects);
});
