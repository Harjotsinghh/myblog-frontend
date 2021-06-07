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



$('#signup').submit(function(e){
    e.preventDefault();
   const fd= new FormData(this);
   const entries= fd.entries();
   const data= Object.fromEntries(entries);
//    console.log(data);
    fetch("http://localhost:8080/signup",{
        method:"POST",
        headers:{
            "content-type" :"application/json"
        },
        body:JSON.stringify(data)
    })
    .then(res=>{
        // console.log(res.json());
        return res.json();
    })
    .then(res=>{
        if(res.error)
        {
            $('#signup-error').html(res.error);
        }
        else{
            $('#signup-error').html('Account Created succesfully');
            console.log(res);
            $('#signup')[0].reset();
        }
       
    })
    .catch(err=>{
        $('#signup-error').html(err.message);
        console.log(err);
    })

}
)