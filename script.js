// line comment 

/*JS comment
zone*/
// console.log("Hello World");
// console.warn("this is a warning message");
// console.error("error connecting to server");
// alert("hola world");
// prompt("enter something");

//  var x; //variable declaration
//  x=2; //assignation of value

//  let/var/const, then variable name = value; quotation are only for messages

// let student=prompt("Enter your name");
// console.log(student);

// let age=99;
// console.log(age);

// const cant change
// const TAXES=0.16;

// console.log(TAXES)

// This is one way, here would be the easier way

/*
let children=7;
let partnersName="Banana";
let geographicLocation="SanDiego";
let jobTitle="SysAdmin";
*/

// Here is the more efficient way ` and $ need to be used together here

/*
console.log(` You will be a ${jobTitle} in ${geographicLocation} and married to ${partnersName} with ${children} kids.`);
*/

let myName= "Albert";
let email="null@gmail.com"
let password="google"
let age=8
let country="USA"
let salary=2500
let totalSalary=salary*12;
let taxes = totalSalary*0.11;
let carOwned= "Honda";
let carYear= "1996";
let carModel= "Civic";
let carMotor= "1.3 L";
let lastJob= "Trainer";
let lastCompany= "InShape";
let companyCity= "Cat City";
let companyCounty= "Riverside";
let companyState= "cali";
let companyCountry= "USA";
let companyOwner= "susan";
let companyPhone= "xxx-xxx-xxxx";
let companyZip= "92234";

// console.log(myName);
// console.log(email);
// console.log(password);
// console.log(age);
// console.log(country);
// console.log(salary);
// console.log(totalSalary);
// console.log(taxes);
// console.log(carOwned);
// console.log(carYear);
// console.log(carMotor);
// console.log(carModel);
// console.log(lastJob);
// console.log(lastCompany);
// console.log(companyCity);
// console.log(companyCountry);
// console.log(companyCounty);
// console.log(companyOwner);
// console.log(lastJob);
// console.log(companyPhone);
// console.log(companyZip);


let template=`
    Name: ${myName}
    email: ${email}
    salary: ${salary}
    age: ${age}
    country: ${country}
    salary: ${salary}
    taxes: ${taxes}
    carOwned: ${carOwned}
    car year: ${carYear}
    car model${carModel}
    carMotor: ${carMotor}
    lastJob: ${lastJob}
    lastCompany: ${lastCompany}
    companyCity: ${companyCity}
    companyCounty: ${companyCounty}
    companyState: ${companyState}
    companyCountry: ${companyCountry}
    companyOwner: ${companyOwner}
    companyPhone: ${companyPhone}
    companyZip: ${companyZip}
`;

console.log(taxes);
document.write(template);
// console.log(` My name is ${myName} email is ${email} password is ${password} age is ${age} country is ${country} yearly salary is ${salary * 12}`)

// Protocol    let/const/var variableName = value;