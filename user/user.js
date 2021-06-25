var form = document.querySelector('.post-form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    var fd = new FormData(this);
    var entries = fd.entries(fd);
    const obj =Object.fromEntries(entries);
    obj.
    console.log(obj);
})
