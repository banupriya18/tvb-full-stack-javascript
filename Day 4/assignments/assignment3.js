/**
 * Write a function printNameLater, that takes a string
 * as it's first argument, a time (in milliseconds) as
 * it's second argument and a callback as it's third
 * argument.
 * 
 * `printNameLater` should return the string that was passed to it
 * back to the caller (caller is the line in which printNameLater was called)
 * after the time has passed.
 */
var string = "Text message";
var time = setTimeout(function(){
    console.log("called after 2000ms");
}, 2000);
var cb = function(){
    console.log('Callback function');
};
function printNameLater(string,time,cb){
    console.log(string);
    //cb();
}

console.log(printNameLater);

