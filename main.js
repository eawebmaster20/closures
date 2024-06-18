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


/*************************************************************************
 * EVENT HANDLING AND 'this' KEYWORD
 *************************************************************************/
const arrowHandleClick = ()=>{
    console.log(this);
    // console.log(this);
}
function handleClick() {
    console.log(this);
    arrowHandleClick()
}

function tellMe() {
    console.log('this');
}

function createCounter(){
    let count = 0;
    return {
        increament:function() {
            count++;
        },
        getCount: function () {
            count
        }
    }
}
document.addEventListener('resize', tellMe)
document.getElementById('eventBtn').addEventListener('click', handleClick)
