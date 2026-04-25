let bouton = document.getElementById("bouton")
let maliste = document.getElementById("maliste")
let textesaisi = document.getElementById("textesaisi")

//ajouter un events pour bouton
bouton.addEventListener("click", function(){
    let valeurtextesaisi = textesaisi.value //stocker dans une variable la valeur du texte saisi
    let li = document.createElement("li") //creer une liste dynamiquement et stocker dans une var
    li.textContent = valeurtextesaisi  //le contenu de la li doit etre la valeur du texte saisi
    maliste.append(li)   // ajouter la li dans maliste ul

    textesaisi.value = ""

    if (valeurtextesaisi === "")
        alert("Veuillez saisir quelque chose")
        return
})
