/**
 * Links: http://es6-features.org/#PromiseUsage
 *        http://es6-features.org/#PromiseCombination
 * 
 *  Examples for usage of promises
 */
function exmaple() {
    //declare
    const myPromise = new Promise((resolve, reject) => {
        if (Math.random() * 100 <= 90) {
            resolve('Works!');
        }
        reject(new Error('Sometimes error may occur'));
    });

    //execute
    myPromise.then((result) => { console.log(result) }, (error) => console.log(error));
}

function exmaple2() {
    //declare
    const myPromise = new Promise((resolve, reject) => {
        if (Math.random() * 100 <= 90) {
            reject(new Error('Sometimes error may occur'));

        }
        throw new Error('Throwing an error');
    });

    //execute
    myPromise.then((result) => { console.log(result) }, (error) => console.log(error));
    myPromise.catch((error) => console.log(error));
}

function example3() {
    //declare
    const delay = (ms) => new Promise(
        (resolve) => setTimeout(resolve, ms)
    );

    //execute chain
    delay(1000)
        .then(() => {
            console.log('Delay 1')
            return delay(1000);
        })
        .then(() => {
            console.log('Delay 2')
            throw new Error();
        }).then(() => {
            console.log('Delay 3')
        }).catch(() => {
            console.log('Error.');
        }).then(() => {
            console.log('Done.');
        });
}

function example4() {
    //declare
    const myPromise = new Promise((resolve, reject) => {
        resolve('Promise 1!');
    });
    const myPromise2 = new Promise((resolve, reject) => {
        resolve('Promise 2!');
    });

    //execute all
    Promise.all([myPromise, myPromise2]).then((results) => {
        console.log(results);
    });
}

function promise() {
    exmaple()
    exmaple2()
    example3()
    example4()
}

export default promise;
