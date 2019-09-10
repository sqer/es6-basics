/**
 * Links: http://es6-features.org/#Constants
 *        http://es6-features.org/#BlockScopedVariables
 * 
 *  Examples for usage of let and const for declaring variables
 */

function checkIfWorks() {
    //TODO
}

function letAndConst() {
    // ES6 
    let x = 0
    // ES5
    var y = 1

    if (x !== y) {
        // ES6
        let z = 2
        // ES5
        var z2 = 3
        console.log(z, z2)
    }

    console.log(x, y, z, z2)
    // uncomment for test
    //console.log(x, y, z2)

    // ES6 readonly variable
    const w = 10
    // it will fail 
     w = 20
     w = "10"

    checkIfWorks()
}

/*
    TODO:
        1. Implement body of function "checkIfWorks"
            a. declare 3 readonly variables [a = 1, b = 3, c = 5]
            b. declare 1 r/w variable [d = 0]
            c. execute operation [a+b] c times (using for loop) and store value in d variable
            d. console log value of d variable
*/

export default letAndConst

