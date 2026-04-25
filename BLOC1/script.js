//on crée des variables pour stocker le titre et bouton
let titre = document.getElementById("titre")
let bouton = document.getElementById("bouton")

//ecoute si on clique sur le bouton, execute la fonction
bouton.addEventListener("click", function() {
    titre.textContent = "changement du texte au clique"
    titre.classList.toggle("green") 

})