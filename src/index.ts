interface Person {  //A
  firstName: string; //B
  lastName: string; //C
}

function greeter(person: Person) { //D
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Joe", lastName: "Kim" };

document.body.innerText = greeter(user);