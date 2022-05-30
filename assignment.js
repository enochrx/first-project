/*Values and Variables
let country = "Nigeria";
let continent = "Africa";
let population = "200 million";

console.log(country);
console.log(continent);
console.log(population);*/


/*Data Types
let LekkiIsland = true;
console.log(LekkiIsland);

let language;
console.log(typeof language);

const isIsland = "Lekki";
console.log(typeof isIsland);

let LekkiIslandPopulation = 10000000
console.log(typeof LekkiIslandPopulation)

let country = "Nigeria"
console.log(typeof country);

let countryLanguages = "Yoruba, English, Hausa, Igbo";
console.log(typeof countryLanguages)


/* let, const and var
let language = "Yoruba";
language = "English";
console.log(language)

const uniLanguage = "English";
console.log(uniLanguage)*/


/*Basic Operators
const Nigeria = 200000000;
const nigeriaPopulationSWSE = 100000000;
const nigeriaPopulationNWNE = 100000000;
console.log(Nigeria - nigeriaPopulationNWNE);

console.log(Nigeria + 1);

const Finland = 6000000;
const averagePop = 33000000;
let description = "Portugal is in Europe, and its 11 million people speak portuguese";
console.log(Nigeria > Finland, Nigeria > averagePop, description);*/


//Coding Challenge #1
/*let macksWeight = 78;
let macksHeight = 1.69;
let johnsWeight = 92;
let johnsHeight = 1.95;
macksBMI = 78 / (1.69 * 1.69);
johnsBMI = (johnsWeight) / (johnsHeight * johnsHeight);
console.log(macksBMI, johnsBMI)
console.log(macksBMI > johnsBMI);

const macksSecWeight = 95;
const macksSecHeight = 1.88;
const johnsSecWeight = 85;
const johnsSecHeight = 1.76;
macksSecBMI = (macksSecWeight) / (macksSecHeight * macksSecHeight);
johnsSecBMI = (johnsSecWeight) / (johnsSecHeight * johnsSecHeight);
console.log(macksSecBMI, johnsSecBMI);
console.log(macksSecBMI > johnsSecBMI);

/*
const firstName = "Damilare";
const profJob = "Pharmacist";
const skilledJob = "SoftwareDeveloper";
const birthYear = 1994
const year = 2022
console.log("I'm " + firstName + ', a ' + (year - birthYear) + " years old " + profJob + " and" + " an aspiring " + skilledJob)

//You can smply write a string in JS using backticks without concatenation...
const damilareNew = `I'm ${firstName}, a ${year - birthYear} years old ${profJob} and an aspiring ${skilledJob}`;
console.log(damilareNew);
//...or by defining variables first.
let DMLR = `I'm Damilare, a 28 years old Pharmacist and an aspiring Software Developer`;
console.log(DMLR)

//Strings with multiple lines
console.log("Strings with \n\
multiple \n\
lines");

//Better written with backticks
console.log(`Strings with
lots of
multiple
lines`);*/

/*Taking Decision; If/else statements
const enochAge = 8
if (enochAge >= 18) {
    console.log("Enoch can starting driving around in the UK")
} else {
    const yearLeft = 18 - enochAge;
    console.log(`Enoch is not old enough to drive in Europe, he'll have to wait ${yearLeft} more years!`)
};*/

//Assignment
/*const populationNigeria = 200000000;
const PopulationPortugal = 33000000;
let avaeragePopulation = (populationNigeria + PopulationPortugal) / 2
console.log(avaeragePopulation)
if (populationNigeria < PopulationPortugal) {
    console.log(`Portugal's population is above average`)
} else console.log(`Portugal's population is below average`); */



//Coding Challenge #2
/*let massMack = 95;
let heightMack = 1.88;
let massJohn = 85;
let heightJohn = 1.76;
const mackBMI = 95 / (1.88 ** 2);
const johnBMI = 85 / (1.76 ** 2);
if (mackBMI > johnBMI) { console.log(`Mack's BMI (${mackBMI}) is higher than John's BMI (${johnBMI})`) } else {
    console.log(`John's BMI (${johnBMI}) is apparently higher than Mack's BMI (${mackBMI})!`)
};
*/

//Type Coversion and Type Coercion
/*let n = "11" + 12;
n = n - 2;
console.log(n)

let k = '9' - '5';
m = '19' - '13' + '17';
o = '19' - '13' + 17;
p = '123' < 57;
q = 5 + 6 + '4' + 9 - 4 - 2;

console.log(k, m, p, o, q)
console.log(o) */

//AND, OR, & NOT logical Operators
/*AND operator = &&
OR operator = ||
NOT operator = !  */
/*const hasDriversLicense = true;
const hasPerfectVision = true;
const isTired = true

console.log(hasDriversLicense && hasPerfectVision && !isTired);

console.log(hasDriversLicense || hasPerfectVision && !isTired);

console.log(hasDriversLicense || hasPerfectVision || !isTired);

if (hasDriversLicense && hasPerfectVision && !isTired) { console.log("Dami can drive around without supervision") } else { console.log("Someone else should take the wheel if her boyfriend ain't there") }  */

//Coding Challenge #3
//1. Average Score
// const teamDolphinsScores = (96 + 108 + 89);
// const teamKoalasScores = (88 + 91 + 110);
// //console.log((96 + 108 + 89 + 88 + 91 + 110) / 6);
// const averageScore = 97
// const teamDolphinsAvgScore = (96 + 108 + 89) / 3;
// const teamKoalasAvgScore = (88 + 91 + 110) / 3
// console.log(teamDolphinsAvgScore)
// console.log(teamKoalasAvgScore)

// //2.Comparing Avg Scores to determine the winner
// console.log(teamDolphinsAvgScore > teamKoalasAvgScore)
// console.log(teamDolphinsAvgScore < teamKoalasAvgScore)
// console.log(teamDolphinsAvgScore === teamKoalasAvgScore)

// if (teamDolphinsAvgScore > teamKoalasAvgScore) { console.log("Team Dolphins is the winner of the competition") } else if (teamDolphinsAvgScore < teamKoalasAvgScore) { console.log("Team Koalas wins the competition") }
// else if (teamDolphinsAvgScore === teamKoalasAvgScore) { console.log("Both Team Dolphins and Team Koalas wins the competition") };

// //3. Bonus 1 & 2
// const minimumRequirement = 100
// const avgScoreDolphins = (97 + 112 + 71) / 3
// const avgScoreKoalas = (109 + 95 + 76) / 3
// console.log(scoreDolphins, scoreKoalas)

// if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) { console.log("Team Dolphins wins the competition") } else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) { console.log("Team Kaolas wins the competition") } else if (avgScoreDolphins === avgScoreKoalas && avgScoreDolphins, avgScoreKoalas >= 100) { console.log("Both wins") } else { console.log("No one wins😒") };


//Switch Statements
const day1 = "wednesday"

switch (day1) {
    case "monday":
        console.log("We'll clean up the new space and arrange the house");
        break;
    case "tuesday":
    case "wednesday":
        console.log("I'll go in search of things we needed to set up the apartment");
        console.log("We'll set up the appliances and see if we can get every up and running, also the curtains");
        break;
    case "thursday":
    case "friday":
        console.log("I'll go get my attire for Adesewa x Al-Ameen's wedding in Ibadan");
        console.log("We'll get things ready and travel down to Ibadan for the wedding");
        break;
    case "saturday":
        console.log("It's the wedding, Yay!🤑💃🕺");
        break;
    case "sunday":
        console.log("Wedding is done and over, we're getting our shits back to Lagos");
        break;

}

//Using If statement
const day = "thurday";

if (day === "monday") {
    console.log("We'll clean up the new space and arrange the house")
} else if (day === "tuesday" || day === "wednesday") {
    console.log("I'll go in search of things we need to set up the apartment")
    console.log("We'll set up the appliances and see if we can get every up and running, also the curtains")
} else if (day === "thursday" || day === "friday") {
    console.log("I'll go get my attire for Adesewa x Al-Ameen's wedding in Ibadan")
    console.log("We'll get things ready and travel down to Ibadn for the wedding")
} else if (day === "saturday") { console.log("It's the wedding, Yay!🤑💃🕺") } else if (day === "sunday") { console.log("Wedding is done and over, we're getting our shits back to Lagos") } else { console.log("Not a valid day") };

//The Conditional(Ternary) Operator
const age = 28
age == 27 ? console.log("I can go to any club-house around") : console.log("I can only go to beach-house for now");

const club = age == 27 ? 'club-house' : 'beach-house'
console.log(club)

console.log(`I'll go to the ${age >= 27 ? 'club-house' : 'beach-house'}!`);


//Coding Challenge #4
const bill = 275
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`)


const bill2 = 40
const tip2 = bill2 <= 300 && bill2 >= 50 ? bill2 * 0.15 : bill2 * 0.2;
console.log(`The bill was ${bill2}, the tip was ${tip2} and the total value ${bill2 + tip2}`)


const bill3 = 430
const tip3 = bill3 <= 300 && bill3 >= 50 ? bill3 * 0.15 : bill3 * 0.2;
console.log(`The bill was ${bill3}, the tip was ${tip3} and the total value ${bill3 + tip3}`)


