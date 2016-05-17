// custom javascript

// self-executing anonymous function

// IIFE - Immediately Invoked Function Expression
// this is how we create namespaces in javascript
(function () {

    console.log("App Started...");

    // variable dclaration and Initialization

    var number = 0;

    number = Math.floor((Math.random() * 10) + 1);

    console.log(number);

})();