const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
  ];
  
 /* for (let person of array) {
    //hier moeten console.logs komen
  }
  */
//1. Log alle objecten in de loop.
for (let person of array){
    console.log("Dit is de gehele persoon:", person);
    }

//2.Log enkel alle namen met daarvoor een introductie ⇒ log bijv. (dit is naam)
for (let person of array){
    console.log("Dit is naam:", person.name);
    }
//Log het geboortejaar (dus niet de leeftijd) voor ieder persoon
for (let person of array){
    console.log("Dit is het geboortejaar:", 2021-person.age);
    }

//Log alle namen + beroep ⇒ zodat je bijvoorbeeld logt "N. Armstrong is een spacecowboy"

for (let person of array){
    console.log(person.name +" is een "+ person.profession);
    }
//Plaats een if statement in de loop die checkt of een persoon ouder is dan 50 jaar. 
for (let person of array){
    if (person.age>50){
    console.log(person.name + " is ouder dan 50 jaar");
}}
