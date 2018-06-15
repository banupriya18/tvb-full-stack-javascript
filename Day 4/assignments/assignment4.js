/**
 * Write a function `getUsers` that makes
 * an AJAX request to 'https://randomuser.me/api'.
 * 
 * The function should take as it's only argument
 * a function.
 * 
 * The `getUsers` function should get 10 random users and
 * callback with only the results from the api call, ie,
 * only the user information.
 * 
 * Hint: all user information is available on the `data.results`
 * key on the response object.
 */
function getUsers(){
    $.get("https://www.randomuser.me/api/?results=10",function(data){
        console.log(data.results);
    }); 
}
getUsers();