/**
 * Links: http://es6-features.org/#IteratorForOfOperator
 * 
 *  Examples for usage of for-of loop
 */
function es5Function(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

function es6Function(array) {

    array.map()

    for (let item of array) {
        console.log(item);
    }
}

function forOf() {
    es5Function([1,2,3]);
    console.log("-------");
    es6Function([3,2,1]);
}

export default forOf;
