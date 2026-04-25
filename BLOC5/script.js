let bouton = document.getElementById("bouton")
let body = document.getElementById("body")

bouton.addEventListener("click", function(){
    body.classList.toggle("dark")
})