const x = "30";
const y = "30";

console.log(x*y);
const person = 
{
  name : "Lucas",
  lastName: "Lameira",
  fullName: function () {return this.name + " " + this.lastName},
  age: 25,
  isBusy: false
}

console.log(`Name ${person["name"]}`);
console.log(`Last Name: ${person.lastName}`);
console.log(`Full name:  ${person.fullName()}`);