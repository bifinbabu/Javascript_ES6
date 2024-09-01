function greet(greeting, punctuation) {
  return `${greeting} ${this.name}${punctuation}`;
}

let person = { name: "John" };

console.log(greet.apply(person, ["Hi", "!"]));
