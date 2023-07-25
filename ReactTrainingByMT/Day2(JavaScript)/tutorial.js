var robot1 = {
    type: "AutoBot",
    vehicle: "Truck"
}

var robot1Dup = Object.freeze(robot1);
console.log(robot1Dup);

robot1.weight = 200;
console.log(robot1Dup);

delete robot1.type;
console.log(robot1Dup);

console.log(Object.isFrozen(robot1));

robot1.type = 'AAAA';

console.log(robot1);

var robot1Dup1 = Object.seal(robot1);

console.log(Object.isSealed(robot1));

robot1.weight = 180;

console.log(robot1);

robot1.type = 'AAA';

console.log(robot1);

var robot1Dup2 = Object.preventExtensions(robot1);

robot1.type = 'Aaaa';
robot1.weight = 300;
console.log(robot1);

delete robot1.type
console.log(robot1);
console.log(Object.isExtensible(robot1));

var robot2 = {
    type: "AutoBot",
    vehicle: "Truck"
}

console.log(Object.is(robot1, robot2));
console.log(robot1 == robot2);
console.log(robot1 === robot2);

console.log(0 == false);
console.log(-12 == false);
console.log(123 == false);
console.log(1 == true);
console.log(0 === false);
console.log(1 === true);
console.log(Object.is(0, false)); // === strict equality is performed
console.log(Object.is(0, 0));
console.log(Object.is(-0, +0));
console.log(Object.is(NaN, NaN));
console.log(6 == 6);
console.log(6 === 6);

// Destruct

var [rType, vehc] = robot1;

console.log(rType, vehc);
console.log(robot1);

var arr = [1,2,3]
var [a,b,c] = arr;

console.log(a,b,c);

for (let x in robot1) {
    console.log(x);
}

// for (x of robot1) {
//     console.log(x)
// }

for (let x in arr) {
    console.log(x);
}

for (let x of arr) {
    console.log(x)
}

var items = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(items.toString());
console.log(items.toString());
console.log(typeof items);
var arr1 = items.toString();
console.log(typeof arr1);



items.copyWithin('*',2, 5);
console.log(items)


var items = ['apple', 'orange', 'mango'];
console.log(items);
items.splice(2, 0, 'grapes');
console.log(items);
items.splice(2, 1, 'pineapple');
console.log(items);
items.splice(1, 2, 'jackfruit');
console.log(items);

var items = ['apple', 'orange', 'mango'];
items.splice(1,2, 'Pineapple', 'Grapes', 'Guava');
console.log(items);

items.splice(1, 1);
console.log(items);

items.shift();
console.log(items);

items.unshift('Cherry');
console.log(items);

items.pop();
console.log(items);

items[1] = 'Apple';
console.log(items);

items[2] = 'Pear';
console.log(items);

items[5] = 'Orange';
console.log(items);

console.log(items.length);

items.slice(0, 2);
console.log(items);

var arr = items.slice(0, 3);
console.log(arr);

var arr = items.slice(1, 5);
console.log(arr);

var arr = ['Apple', 'Orange', 'Pineapple', 'Mango'];

var objArr = [{
    type: 'Autobot',
    vehicle: 'Truck'
}, {
    type: 'Drone',
    vehicle: 'Car'
}, {
    type: 'Manual',
    vehicle: 'Bike'
}];

var found = objArr.find(
    function (element, index, array) {
        return element.type == 'Autobot'
    }
);

console.log(found);

var found = objArr.find((e, i, arr) => e.type == 'Autobot')
console.log(found);

var found = objArr.findIndex((e, i, arr) => e.vehicle == 'Bike')
console.log(found);

var arr = new Array(4);
console.log(arr);

var arr = new Array(4, 5);
console.log(arr);

var arr = new Array(4);
arr.push(90);
console.log(arr);

arr.unshift(100);
console.log(arr);

var threeValues = ['one', 'two', 'three'];

var myArray = [...threeValues, 1, 2, 3,, 'Four', 4];

var arr = [1,2,3,4,5,6,7];

arr.forEach((val, i, arr) => {
    console.log('Value ' + val);
    console.log('Index ' + i);
    console.log('Array ' + arr);
});

arr.forEach(x => console.log(x * 10));

console.log(arr.filter(x => x > 4));
console.log(arr.filter(x => x % 2 == 0));

console.log(arr.map(x => x * 10));

var reducedArray = arr.reduce((prev, curr) => prev + curr);
console.log(reducedArray);

var arr = ['apple', 'orange', 'sam', new Date(), true, 4.5];

function checkString(e, i) {
    return typeof element === "string"
};

let filtered = arr.filter(checkString);
console.log(filtered);

console.log(arr.every(checkString));
