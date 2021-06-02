var loginform = document.getElementById('login-form');
// console.log(login);

loginform.addEventListener('submit',function(e){
    e.preventDefault();
    const fd= new FormData(this);
   const entries = fd.entries();
   const data =Object.fromEntries(entries);

 fetch("http://localhost:8080/login",{
     method:"POST",
     body:JSON.stringify(data),
     headers:{
         "Content-type":"application/json"
     }
    })
    .then(response=> response.json())
    .then(data=> console.log(data))
    .catch(err=>console.log(err));

});

