var a = 34.5;
console.log(a);

var a = "Hai"; // Data Hoisting Issue
console.log(a);


var gl = 100;
a = "Sam";
b = "Hai";

function sample() {
    a = 123;
    var b = 111;
    console.log(gl);
    console.log(a);
    console.log(b);
}

console.log(sample);

sample();


{
    var a = 999;
    console.log(a);
}

console.log(a);

const rate = 34;

function sample() {
    let a = 100;
    let b = 200;
    const ab = 100;
    console.log(a);
    console.log(b);
    console.log(ab);
    // console.log(rate);

};

// let a = "Hai";
// let a = 3; // Throws error

{
    let a = 90;
    let b = 20;
    console.log(a);
    console.log(b);
}

// let a = 9;
a = 100;

const name = "Sam"
// const sd; // error

const student = {name: "alice", age: 12};
// const student = {name: "bob", age: 14}; // Error
student.name = "Bob"

let x = {};

console.log(typeof x);

const person = {
    name: "Alice"
};

console.log(global);
Object.getOwnPropertyDescriptor(person, 'name');
Object.getOwnPropertyDescriptor(person, 'marks');

var book = {
    bname : "Harry Potter",
    56: "ASad"
}

console.log(book)
console.log(book.bname)
console.log(book['bname']);

person.pAge = 23;
console.log(person);

person['Age'] = 34;
console.log(person);

var obj = new Object();
console.log(typeof obj);

var arr = new Array();
console.log(typeof arr);

function Person(fname, age, gender) {
    this.fName = fname;
    this.age = age;
    this.gender = gender;
}

var sam = new Person("Sam", 123, 'M');
console.log(sam)

//  By using Object,create()

var obj1 = Object.create(null);
obj1.name = "Alice";
console.log(obj1);

var obj2 = Object.create({x: 1, y: 2})
console.log(obj2);
console.log(obj2.x);
console.log(obj2.y);

var obj4 = Object.create(Person.prototype);
console.log(obj4);

var book = {
    title: "Harry Potter",
    author: "J.K.Rowling",
    isbn: function () {return "Test"},
    set full(details) {
        var parts = details.split('-');
        this.title = parts[0];
        this.author = parts[1];
    },
    get fullName() {
        return `${this.title} - ${this.author}`
    }
}

console.log(book)
console.log(book.full = "Harry Potter - J.K.Rowling");
console.log(book.fullName)
console.log('title' in book);
console.log('name' in book);

console.log(book.hasOwnProperty('title'));

delete book.title;

console.log(book);

delete book;

console.log(book);

for (key in book) {
    console.log("Key is", key, 'and value is', book[key]);
}

// Used for array
// for (key of book) {
//     console.log("Key is", key, 'and value is', book[key]);
// }


var arr = [10, 20, 30, 40];

for (key in arr) {
    console.log("Key is", key, 'and value is', arr[key]);
}

for (key of arr) {
    console.log("Key is", key, 'and value is', arr[key]);
}

let line = {
    x: 2,
    y: 5,
    point: function () {
        return (this.x, this.y)
    }
}

console.log(line.point());


class Dog {
    constructor(dogName, color, breed) {
        this.dogName = dogName;
        this.color = color;
        this.breed = breed
    }

    greet() {
        console.log("Hi")
    }
}

let browny = new Dog("Browny", "Brown", "Pomerian")

console.log(browny.dogName);
console.log(browny.dogname);
browny.dogname = "Browny";
console.log(browny);
console.log(browny.greet());


class PersonNew {
    #firstName;
    #lastName;

    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    set lastname(lName) {
        this.#lastName = lName;
    }

    get lastName() {
        return this.#lastName;
    }
}

var per = new PersonNew("Harry", "Sam");

console.log(per.firstName);
console.log(browny.dogName);

per.firstName = "Alice"
// per.#firstName = "Alice"

var per1 = new Person("H", "J");
console.log(per1.lastName)