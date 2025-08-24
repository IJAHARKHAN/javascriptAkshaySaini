/*
1. What is async ?
2. What is await ?
3. How aync await works behind the scenes ?
5. Example of using async await.
6. Error handling in async await.
7. Difference between async await and promise.then/.catch.
8. Interview questions on async await.
*/

/// https://api.github.com/  main url of github api
/// https://api.github.com/users  list of users

let myGithubApi = "https://api.github.com/users/IJAHARKHAN";

async function getUserData(){  
  try {
    let response = await fetch(myGithubApi);   
    let data = await response.json();   
    console.log(data);
    
  } catch (error) {
    console.log("This is my error : " + error);
    
  }
    
}

getUserData();

