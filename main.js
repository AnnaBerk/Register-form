

var link = document.querySelector(".register-link");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal-close");
var login = popup.querySelector("#user-name");
var form = popup.querySelector("register-form")
var email = popup.querySelector("#user-email")
var enter = document.querySelector(".visually-hidden");


 window.addEventListener("keydown", function(evt){
 	if(evt.keyCode === 27){
 		evt.preventDefault();

 		if(popup.classList.contains("modal-show")){
 			popup.classList.remove("modal-show")
 		}
 	}

 })

link.addEventListener("focus", function(evt){
evt.preventDefault();
	enter.classList.remove("visually-hidden");
})
link.addEventListener("blur", function(evt){
evt.preventDefault();
	enter.classList.add("visually-hidden");
})

link.addEventListener("mouseover", function(evt){
	evt.preventDefault();
	enter.classList.remove("visually-hidden");
})

link.addEventListener("mouseout", function(evt){
evt.preventDefault();
	enter.classList.add("visually-hidden");
})

link.addEventListener("click", function(evt){
	evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
});

close.addEventListener("click", function(evt){
	evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit",function(evt){
	if (!login.value|| !email.value) {
  evt.preventDefault();
  }
})
