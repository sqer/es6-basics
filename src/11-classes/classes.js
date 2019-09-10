/**
 * Links: http://es6-features.org/#ClassDefinition
 * 
 *  Examples for usage of classes
 */
class Monkey {

    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    set name(name) {
        this._name = name;
    }

    set age(age) {
        this._age = age;
    }

    toString() {
        return `Name: ${this.name}, age: ${this.age}`
    }

}

class Car {

}

/*
    TODO:
        1. Implement class "Car"
            a. add some properties (e.g. model, year, type)
            b. implement function toString()
            c. create object "car" form class Car
            d. console log result of execution car.toString()
*/


function classes() {
    let coco = new Monkey("Coco", 3);
    coco.age = 10;
    console.log("monkey", coco.toString(), coco.name, coco.age);
    //console.log("car" ,car.toString() );
}

export default classes;
