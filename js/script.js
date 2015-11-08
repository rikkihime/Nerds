var write_us = document.querySelector(".btn-write-us");
var popup = document.querySelector(".popup");



write_us.addEventListener("click", function(e){
    e.preventDefault();
    popup.classList.add("opened");
});