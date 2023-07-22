let menubtn = document.querySelector(".menu")
let submenu = document.querySelector(".submenu")
let closebtn = document.querySelector(".submenu .close")

menubtn.addEventListener('click', function (){
    submenu.style.display= "block"

});
closebtn.addEventListener('click',function(){
    submenu.style.display="none"
});