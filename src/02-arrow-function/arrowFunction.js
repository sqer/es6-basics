/**
 * Links: http://es6-features.org/#ExpressionBodies
 *        http://es6-features.org/#StatementBodies
 *        http://es6-features.org/#Lexicalthis
 * 
 *  Examples for usage of fat arrow functions
 */

function es5Function() {
    console.log("es5 function")
}

let es6Function = () => {
    console.log("es6 function")
};

let es6FunctionInOneLine = () => console.log("es6 function in one line")
let ex6FunctionWithArgs = (a) => console.log(a)
let ex6FunctionReturnValue = () => "someValue"

/*
    TODO:
        1. Create es6 function which will return pesudo random number between [0, and max) 
           where max is provided via argument
*/


function arrowFunction(){
    es5Function();
    console.log("-------------");
    es6Function();
    console.log("-------------");
    es6FunctionInOneLine();
    console.log("-------------");
    ex6FunctionWithArgs(1);
    console.log("-------------");
    console.log(ex6FunctionReturnValue());
    console.log("-------------");
    setTimeout(()=> console.log("Timeout"), 1000)
}

export default arrowFunction;
