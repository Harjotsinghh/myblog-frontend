var signout = document.querySelector('#signout')

var url1='https://hsblogs.herokuapp.com'
var urlDev = 'http://localhost:8080'
signout.addEventListener('click',(e)=>{
    e.preventDefault()

    fetch(`${urlDev}/signout`,{
        mode:'cors',
        method:"GET",
        origin:'*'
    })
        .then(res=>res.json())
        .then(res=>{
            sessionStorage.removeItem('token')
            console.log(token)
            window.location.reload()
        })
        .catch(err=>{
            console.log(err)
        })
})