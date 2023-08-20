const url = ("https://reqres.in/api/users?delay=3");

fetch (url)
.then( res => res.json() )
.then(data => console.log(data))






