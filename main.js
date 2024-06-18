function Person (name, age){
    this.name =name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
}

let person = new Person("Benjamin", 5)
person.greet();
person.greet.call({name:'mensah',age:21});
person.greet.apply({name:'Gideon',age:2});
(person.greet.bind({name:'Matthew',age:46}))();