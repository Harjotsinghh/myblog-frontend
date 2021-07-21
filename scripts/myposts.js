const posts = document.querySelector('.posts')
const loader = document.querySelector('#spinner')
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
         console.log(data)
         if(data.token)
         sessionStorage.setItem('token',`${data.token}`);
    
     })
     .catch(err=>{
         console.log("error is :" + err)
        window.location.href="../forms/form.html"
     });
     
}


fetchposts()

function fetchposts(first = false){

loader.classList.add('show')

fetch('https://hsblogs.herokuapp.com/admin/posts',{
    mode:'cors',
    headers:{
        authorization : `bearer ${sessionStorage.getItem('token')}` 
    }
    })
    .then(res=> {
        return res.json()})
    .then(res=>{
        if(res.token)
        sessionStorage.setItem('token',res.token)
        loader.classList.remove('show')
        res.posts.map((info ,ind)=>{
            var date=info.createdAt;
            // console.log(info);
            date=date.substring(0,10);
            var ele= `
            <a href="../post.html?${info._id}"><div class="post-title">
                <h1>${info.title}</h1>
                <div class="post-user">
                    <h3 class="name">Author: ${info.userId.username}</h3>
                    <h3 class="time"> Created at :${date}</h3>
                </div>
            </div>
          
            <div class="post-info">
                <p>${info.text} </p>
                
                <div class="fadeout"></div>
            </div>
            </a>
            <button class="deletepost" ><i class="fa fa-trash fa-2x" aria-hidden="true"></i></button>
            `;

           
        var newele= document.createElement('div');
        newele.classList.add("post");
        // console.log(ind);
            if(ind%2==0)
            newele.style["background-color"]= 'rgb(196, 224, 228)';
            else
            newele.style["bacground-color"]='rgba(86, 126, 63, 0.349)';
        newele.innerHTML=ele;
        posts.appendChild(newele);
        
       const button =newele.querySelector('.deletepost');
        button.addEventListener('click',()=>{
            deletepost(info._id)
        })
    });

    })
    .catch(err=>{
        console.log('fetch posts error ' + err )
        window.location.href="../forms/form.html"
    })
    
}

   
    function deletepost(id){

        fetch(`https://hsblogs.herokuapp.com/admin/delete-post/${id}`,{
            method:"POST",
            headers:{
                authorization : `Bearer ${sessionStorage.getItem('token')}`
            },
            mode:"cors"
        })
        .then(res=>res.json())
        .then(res=>{
            if(res.token)
            sessionStorage.setItem('token',res.token)
            window.location.reload()
        })
        .catch(err=>console.log(err));

    }