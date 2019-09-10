/**
 * Links: http://es6-features.org/#RestParameter
 * 
 *  Examples for usage of rest parameters
 */
function es5Function(array) {
    console.log(array);

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

function es6Function(...array) {
    console.log(array);

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

/*
    TODO:
        1. Create es6 function which will return a string
         which will be a concatenation of all elements of array passed via parameters.
*/


function restParams() {
    es5Function([1, 2, 3]);
    console.log("-------");
    es5Function(1, 2, 3);
    console.log("-------");
    es6Function([3, 2, 1]);
    console.log("-------");
    es6Function(3, 2, 1);
}

export default restParams;
