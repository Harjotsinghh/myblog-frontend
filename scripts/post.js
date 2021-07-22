var query = window.location.search;
query = query.substr(1);
const token = sessionStorage.getItem('token');

if(!token){
    fetch('https://hsblogs.herokuapp.com/access-token', {
        method:'GET',
        credentials : "include",
        mode:"cors",
        headers:{
         "content-type":"application/json",
        }
     })
     .then(res =>{
      return res.json();
     })
     .then( data=>{
         if(data.token)
         sessionStorage.setItem('token',`${data.token}`);
    
     })
     .catch(err=>{console.log("error is :" + err)});
     
}


const loader = document.querySelector('#spinner')

function formattime( time){
    var hrs = time.substr(0,2)
    if(hrs< '12')
    time+=' AM';
    else
    {
        hrs-='12';
        hrs='0'+hrs
        hrs+=time.substr(2);
        time=hrs
        time+=' PM'
    }

    return time
}

loader.classList.add('show');
fetch(`https://hsblogs.herokuapp.com/getpost/${query}`,{
    credentials:"include",
    mode:"cors"
    })
    .then( res=> res.json())
    .then( res=> {
       loader.classList.remove('show')
        var date = res.post.createdAt.substr(0,10)
        var time = formattime(res.post.createdAt.substr(11,5))
        var img = res.post.imgUrl
        if(img == "")
         img = "https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=6&m=922745190&s=612x612&w=0&h=qBmau_GKQZasMW14NJBp3u2vU-f5YFCcN1N71Exa8iE="
        var text = res.post.text
        
        // console.log(text)

        var ele =` 
        <div class="userpost_main">
        <div class="userpost_title">
            <h1>${res.post.title}</h1>
            <div class="userpost_user">
                <h3><i class="fa fa-user" aria-hidden="true"></i>${res.post.userId.username}</h3>
                <h3><i class="fa fa-clock-o" aria-hidden="true"></i>${date} , ${time}</h3>
            </div>
           
        </div>
        <div class="userpost_border"></div>

        <div class="userpost_body">
            <div class="userpost_img">
                <img src="${img}" alt="">
            </div>
            <div class="userpost_text">
               <p>${text}</p>
            </div>
        </div>
    </div>
        `

        const userpost = document.querySelector('.userpost');
        userpost.innerHTML=ele;

    })
    .catch(err=> console.log(err))
