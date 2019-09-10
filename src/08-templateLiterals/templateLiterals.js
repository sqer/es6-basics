/**
 * Links: http://es6-features.org/#StringInterpolation
 * 
 *  Examples for usage of template literals
 */
function es5Function() {
    var name = "Lion"
    var speed = 20;

    console.log("Animal: " + name + " speed: " + speed);
}

function es6Function() {
    var name = "Lion"
    var speed = 20;

    console.log(`Animal: ${name} speed: ${speed}`);
    console.log(`
    Animal: ${name}
     Speed: ${speed}
     Multi line string
     `);
}

function templateLiterals() {
    es5Function();
    console.log("-------");
    es6Function();
}

export default templateLiterals;
