

function createUser() {
  let user = {
    name: "Akshay"
  };
  // user object यहाँ memory में है
  return user;
}



let person = createUser(); 

console.log(person)
console.log(person.name)


let person2 = () => {
  let user = {
    name: "Akshay",
    age: 25
  };
  return user;
}

let person1 = person2();
console.log(person1.age);






