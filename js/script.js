var write_us = document.querySelector(".btn-write-us");
var popup = document.querySelector(".popup");
var close = document.querySelector(".popup-close");
var reset = document.querySelector(".btn-reset");

var login = popup.querySelector("[name='login']");
var email = popup.querySelector("[name='email']");
var note = popup.querySelector("[name='note']");

var form = popup.querySelector("form");

var login_storage = localStorage.getItem("login");
var email_storage = localStorage.getItem("email");






write_us.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("opened");
    if (login_storage && email_storage) {
        login.value = login_storage;
        email.value = email_storage;
        note.focus();
    } else if (login_storage) {
        login.value = login_storage;
        email.focus();
    } else {
        login.focus();
    }  
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("opened");
    popup.classList.remove("popup-error");
});

reset.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("opened");
    popup.classList.remove("popup-error");
});

form.addEventListener("submit", function(event) {
    if (!login.value || !email.value || !note.value) {
        event.preventDefault();
        popup.classList.remove("popup-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("popup-error");
      
    } else {
        localStorage.setItem("login", login.value);
        localStorage.setItem("email", email.value);
    }
}); 

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("opened")) {
            popup.classList.remove("opened");
            popup.classList.remove("popup-error");
        }
    }
});