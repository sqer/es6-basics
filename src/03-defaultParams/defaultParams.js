/**
 * Links: http://es6-features.org/#DefaultParameterValues
 * 
 *  Examples for usage of Default Parameter Values
 */
function es5Function(a, b) {
    if (!a) {
        a = 10;
    }
    if (!b) {
        b = 20
    }
    return a + b;
}

function es6Function(a = 10, b = 20) {
    return a + b;
}

function es6Function2(a, b = 20) {
    return a + b;
}

function es6Function3(a = 10, b) {
    return a + b;
}

/*
    TODO:
        1. Create es6 function which will return a string with information about car (e.g. Toyota avensis 2004 sedan 5 doors ...)
         based on parameters. Some of them should have default value.
*/


function defaultParams() {
    console.log(es5Function());
    console.log(es5Function(5));
    console.log(es5Function(1, 2));
    console.log("-------------");
    console.log(es6Function());
    console.log(es6Function(5));
    console.log(es6Function(1, 2));
    console.log("-------------");
    console.log(es6Function2());
    console.log(es6Function2(5));
    console.log(es6Function2(1, 2));
    console.log("-------------");
    console.log(es6Function3());
    console.log(es6Function3(5));
    console.log(es6Function3(1, 2));
    console.log(es6Function3(undefined, 2));
}

export default defaultParams;
