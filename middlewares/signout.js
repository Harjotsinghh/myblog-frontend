var signout = document.querySelector('#signout')

var url1='https://hsblogs.herokuapp.com'
var urlDev = 'http://localhost:8080'
signout.addEventListener('click',(e)=>{
    e.preventDefault()
    fetch(`${url1}/signout`,{
        mode:'cors',
        method:"GET",
        credentials : "include"
    })
        .then(res=>res.json())
        .then(res=>{
            sessionStorage.removeItem('token')
            window.location.reload()
        })
        .catch(err=>{
            console.log(err)
        })
})