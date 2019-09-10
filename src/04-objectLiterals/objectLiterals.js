/**
 * Links: http://es6-features.org/#PropertyShorthand
 *        http://es6-features.org/#ComputedPropertyNames
 * 
 *  Examples for usage of object literals
 */
function es5Object() {
    var obj = {
        name: "Tomasz",
        surname: "Sapota"
    }
    console.log(obj)
}

function es6Object() {
    const name = "Tomasz", surname = "Sapota"

    var obj = {
        name,
        surname
    }
    console.log(obj)
}

function es6Object2() {
    const x = "name"
    const name = "Tomasz", surname = "Sapota"

    var obj = {
        [x]: name,
        surname
    }
    console.log(obj)
}

function es6Object3() {
    const name = "Tomasz", surname = "Sapota"

    var obj = {
        name,
        surname,
        greet() {
            return this.name + " " + this.surname
        }
    }
    console.log(obj)
    console.log(obj.greet())
}

function es6Object4() {
    const name = "Tomasz", surname = "Sapota"

    var obj = {
        name,
        surname,
        "greet me"() {
            return this.name + " " + this.surname
        }
    }
    console.log(obj)
    console.log(obj["greet me"]())
}


function objectLiterals() {
    es5Object()
    console.log("-------------");
    es6Object()
    console.log("-------------");
    es6Object2()
    console.log("-------------");
    es6Object3()
    console.log("-------------");
    es6Object4()
}

export default objectLiterals;
