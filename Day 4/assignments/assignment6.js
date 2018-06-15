/**
 * Using the `getUsers` function from `assignment4.js`,
 * get 10 users from the response received from `https://randomuser.me/api`
 *
 * The `getUsers` function should return only the `name`, `email`
 * and `phone` information.
 *
 */
function getUsers(){
  $.get("https://www.randomuser.me/api/?results=10",function(data){
    var results= data.results;
    let userDetails = results.map(function(info) {
      return {
        email: info.email,
        phone: info.phone,
        name: info.name.first+" "+info.name.last      
      }
    });
    console.log(userDetails);
  }); 
}
getUsers();