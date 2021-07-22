
var login_ = document.querySelector('#login_')
var  ham_ = document.querySelector('#ham_')

if(sessionStorage.getItem('token')){
    ham_.classList.remove('hide')
    login_.classList.add('hide')
    // console.log('token is there')

}
else{
    // console.log( ham_  )
    ham_.classList.add('hide')
    login_.classList.remove('hide')
}