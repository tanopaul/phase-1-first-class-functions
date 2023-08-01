function callBack() {
    console.log('called back');
}

function receivesAFunction(callBack) {
    callBack();
}

const namedFunc = () => console.log('named function');

function returnsANamedFunction() {
    return namedFunc;
}

function returnsAnAnonymousFunction() {
    return function () {console.log('function')};
}

