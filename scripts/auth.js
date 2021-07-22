var loginform = document.getElementById('login-form');
// console.log(login);
const loader= document.querySelector('#spinner')

var url1='https://hsblogs.herokuapp.com'
var urlDev = 'http://localhost:8080'


loginform.addEventListener('submit',function(e){
    e.preventDefault();
    const fd= new FormData(this);
   const entries = fd.entries();
   const Data =Object.fromEntries(entries);
//    console.log(data);
loader.classList.add('show')
 fetch(`${url1}/login`,{
     method:"POST",
     body:JSON.stringify(Data),
     credentials:"include",
     mode:'cors',
     headers:{
         "Content-type":"application/json"
     }
    })
    .then(response=> {
       return response.json();
    })
    .then(data=> {
       
        loader.classList.remove('show')
        // console.log(data);
       if(data.error){
        console.log(data.error);
           $('#signin-error').html(data.error);
           return;
       }
       else{
        sessionStorage.removeItem('token');
        sessionStorage.setItem('token', `${data.token}`);
        window.location.href = '../index.html'
       }

      
      
    })
    .catch(err=>console.log(err.message));

});



$('#signup').submit(function(e){
    e.preventDefault();
   const fd= new FormData(this);
   const entries= fd.entries();
   const data= Object.fromEntries(entries);
   loader.classList.add('show')
//    console.log(data);
    fetch(`${url1}/signup`,{
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
        loader.classList.remove('show')
        if(res.error)
        {
            $('#signup-error').html(res.error);
        }
        else{
            $('#signup-error').html('Account Created succesfully')
            window.location.href='../index.html'
            $('#signup')[0].reset();
        }
       
    })
    .catch(err=>{
        $('#signup-error').html(err.message);
        console.log(err);
    })

}
)