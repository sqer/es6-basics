/**
 * Links: http://es6-features.org/#SpreadOperator
 * 
 *  Examples for usage of spread operator
 */
function es5Function() {
    var numbers = [1,2,3];
    console.log(Math.max(numbers[0], numbers[1], numbers[2]));
}

function es6Function() {
    var numbers = [1,2,3];
    console.log(Math.max(...numbers));
}

function spreadOperator() {
    es5Function();
    console.log("-------");
    es6Function();
}

export default spreadOperator;
