/**
 * Write a function `get` that takes a URL
 * an it's first argument and a function as
 * it's second argument. `get` should perform
 * as AJAX call to the `url` that was provided
 * and return the parsed response back to the
 * caller via the callback (or function) provided
 * as the second argument
 */
$.get( "https://gist.github.com/banupriya18/1b232cc819a39429388939f5184654e9", function( data ) {
    //$( ".result" ).html( data );
    console.log(data);
  });
