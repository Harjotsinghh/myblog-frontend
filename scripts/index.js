
var backdrop = document.querySelector(".backdrop");
var ham= document.querySelector(".hamburger");
ham.addEventListener('click',()=>{
    ham.classList.toggle("change");
    backdrop.classList.toggle("toggle");
})
backdrop.addEventListener('click',()=>{
    ham.classList.toggle("change");
    backdrop.classList.toggle("toggle");
})



const posts = document.querySelector(".posts");
fetch("http://localhost:8080/")
.then(res=>{
    if(res.status!='200')
     throw new Error('error');
    return res.json()})
.then(res=>{
    res.posts.map(info=>{
        var date=info.createdAt;
        console.log(info);
        date=date.substring(0,10);
        var ele= `<div class="post-title">
            <h1>${info.title}</h1>
            <div class="post-user">
                <h3 class="name">Author: ${info.userId.username}</h3>
                <h3 class="time"> Created at :${date}</h3>
            </div>
        </div>

        <div class="post-info">
            <p>${info.text}</p>
            <a href=""> <i class="fa fa-ellipsis-h" style ="font-size: 30px; padding-right: 20px;" aria-hidden="true"></i>
            </a>
        </div>`;

    var newele= document.createElement('div');
    newele.classList.add("post");
    newele.innerHTML=ele;
    posts.appendChild(newele);

   
    });
    console.log(ans);
})
.catch(err=>console.log(err));

