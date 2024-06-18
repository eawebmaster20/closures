function Person (name, age){
    this.name =name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
}


let person = new Person("Benjamin", 5)
person.greet();