function show(){
    console.log(this === globalThis); // true, when using node
    // console.log(this === window); // true, when using the web browser
    // console.log(this === undefined); // true, when using "use strict" mode globally or inside the function
}

// the this keyword when used in a simple function invocation references the "global" object when using node
// and references the window when using the web browser

show();

// when using strict mode in javascript by providing "use script" inside a function or globally
// the this keyword will be sent to undefined. 