
//PARTNER EXERICSE 2
//Write a function pushPull that takes one argument and calls it as a function.


var push = function () {
    console.log("pushing it!");
};

var pull = function () {
    console.log("pulling it!");
};


var pushPull = function (param) {

    param();
}
pushPull(push);
pushPull(pull);


//PARTNER EXERCISE 3
//You can get the current date/time in Javascript by writing: var time = new Date(). 
//Create a function called getTime that takes one parameter and calls it as a function.

var returnTime = function (time) {
    time = new Date();
    alert('The current time is: ' + time);
};

var getTime = function (currentTime) {
    currentTime();
}

getTime(returnTime);

//PARTNER EXERCISE 4
//Copy/paste the following code in your dev console. 
//What error do you get? Write the missing functions to make the code work:

var alert1 = function () {
    alert(data);
};


var logData = function () {
    console.log(data);
};

var data = "I like to party";


var displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
};

displayData(alert, logData, "I like to party");

// PARTNER EXERCISE 5
// Change the following code to use an anonymous function:

setTimeout(function () {
    alert("I'm saying stuff!");
}, 1000);

