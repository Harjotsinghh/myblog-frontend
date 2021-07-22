var form = document.querySelector('.post-form');
const token = sessionStorage.getItem('token');

var url1='https://hsblogs.herokuapp.com'
var urlDev = 'http://localhost:8080'

if(!token){
    fetch(`${url1}/access-token`, {
        method:'GET',
        credentials : "include",
        mode:"cors",
        headers:{
         "content-type":"application/json",
        }
     })
     .then(res =>{
        //  console.log(res);
      return res.json();
     })
     .then( data=>{
         if(data.token)
         sessionStorage.setItem('token',`${data.token}`);
    
     })
     .catch(err=>{
         window.location.href="../forms/form.html"
     });
     
}


const loader= document.querySelector('#spinner')
form.addEventListener('submit', function(e){
    e.preventDefault();
    loader.classList.add('show')
    var fd = new FormData(this);
    var entries = fd.entries(fd);
    var data =Object.fromEntries(entries);

    fetch('https://hsblogs.herokuapp.com/admin/add-post',{
        method:"POST",
        body: JSON.stringify(data),
        credentials:"include",
        headers:{
           "content-type":'application/json',
            authorization: `Bearer ${sessionStorage.getItem('token')}`
        },
        
    })
    .then(res=>res.json())
    .then(res=> {
        loader.classList.remove('show')
        if(res.token)
        sessionStorage.setItem('token',res.token)
        window.location.href="./myposts.html"
    })
    .catch(err=>console.log(err))
})
