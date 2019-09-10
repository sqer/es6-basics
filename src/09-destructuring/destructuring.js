/**
 * Links: http://es6-features.org/#ArrayMatching
 *        http://es6-features.org/#ObjectMatchingShorthandNotation
 * 
 *  Examples for usage of destructuring assignment
 */

function es5Function() {
    var numbers = [1, 2, 3, 4];
    var a = numbers[0];
    var b = numbers[1];

    var object = {
        name: "Lion",
        speed: 20
    }

    var name = object.name;
    var speed = object.speed;


    console.log(a, b, name, speed);
}

function es6Function() {
    const numbers = [1, 2, 3, 4];
    const [a, b] = numbers;

    const object = {
        name: "Lion",
        speed: 20
    }

    const { name, speed } = object;

    console.log(a, b, name, speed);
}

function es6Function2() {
    const numbers = [1, 2];
    const [a, b, c = 3, d = 4] = numbers;

    const object = {
        name: "Lion",
        speed: 20
    }

    const { name, speed, age = 10 } = object;

    console.log(a, b, c, d, name, speed, age);
}


function es6Function3() {
    let a = 5;
    let b = 15;

    [b, a] = [a, b]

    console.log(a, b);
}

function es6Function4() {
    const numbers = [1, 2, 3, 4];
    const [a, , c, d] = numbers;

    console.log(a, c, d);
}

function es6Function5() {

    const object = {
        name: "Lion",
        speed: 20,
        toString() {
            return `${name}, ${speed}`
        }
    }

    const { name: animalName, speed, toString } = object;

    console.log(animalName, speed, toString());
}

function checkIfWorks() {
    const obj = {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
    }

    return "";
}

/*
    TODO:
        1. Implement function "checkIfWorks" with use of destructuring and template literals to get result:
        Name: Luke Skywalker, height: 172, mass: 88, hair color: blond, gender: male
*/

function destructuring() {
    es5Function();
    console.log("-------");
    es6Function();
    console.log("-------");
    es6Function2();
    console.log("-------");
    es6Function3();
    console.log("-------");
    es6Function4();
    console.log("-------");
    es6Function5();
    console.log("-------");
    checkIfWorks();
}

export default destructuring;
