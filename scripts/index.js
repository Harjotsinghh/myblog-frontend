
const posts = document.querySelector(".posts");
fetch("http://localhost:8080/")
.then(res=>{
    if(res.status!='200')
     throw new Error('error');
    return res.json()})
.then(res=>{
    res.posts.map((info ,ind)=>{
        var date=info.createdAt;
        // console.log(info);
        date=date.substring(0,10);
        var ele= `
        <a href=""><div class="post-title">
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
    });
    console.log(ans);
})
.catch(err=>console.log(err));

