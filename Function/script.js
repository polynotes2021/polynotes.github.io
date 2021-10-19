window.addEventListener('scroll', function(){
    let nav = document.getElementById('nav');
    nav.classList.toggle('top-scrll', window.scrollY > 0);
})

document.querySelector('#close').addEventListener('click', function(){
    document.querySelector('.popupcontainer').style.display = "none";
});
