/*************************************************************************
 * OBJECT METHOD AND this:
 *************************************************************************/
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
}
function handleClick() {
    console.log(this);
    arrowHandleClick()
}

function checkValidity() {
    let time = document.getElementById('timerSetter').value
    if (+time>0) {
        createTimer(+time, 'counterElement');
    }
}


/*************************************************************************
 * PRIVATE DATA WITH CLOSURE 'this' KEYWORD
 *************************************************************************/
const createCounter= ()=>{
    let count = 0;
        const increament=()=> {
            count++;
        }
        const getCount= ()=> {
            count;
            console.log('count is '+count);// here, this refers to the methods inside the createCounter function. hence you can't use 'this.count'
        }
    return {increament, getCount}
}

const result = createCounter();
result;
result.increament();
result.increament();
result.increament();
result.getCount();
/*************************************************************************
 * REUSABLE COMPONENTS WITH CLOSURE
 *************************************************************************/
const createTimer= (duration, elementId)=>{
    let countDownCounter=duration // here, this refers to the window object. hence you can't use 'this.countDownCounter'
        setInterval(() => {
            if (countDownCounter >=0) {
                document.getElementById(`${elementId}`).textContent = countDownCounter;
            }
            if (countDownCounter < 0) {
                location.reload()
            }
            countDownCounter = countDownCounter -1
        }, 1000);
    }

document.getElementById('eventBtn').addEventListener('click', handleClick)
document.getElementById('addTimerBtn').addEventListener('click', checkValidity)
document.getElementById('eventBtn').style.backgoundColor = 'rgb(71, 71, 240)';

