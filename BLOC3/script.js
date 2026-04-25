//on recupere l'element pour ajouter l'evenement
let bouton = document.getElementById("bouton")

bouton.addEventListener("click", function(){

    //recupere tout les champs qu'on doit avoir pour retourner les valeurs
    let nom = document.getElementById("nom").value
    let prenom = document.getElementById("prenom").value
    let age = document.getElementById("age").value
    let sexe = document.querySelector("input[name='Sexe']:checked")
    let loisir = document.querySelectorAll("input[name='Loisir']:checked")
    let pays = document.getElementById("pays").value
    let commentaire = document.getElementById("commentaire").value

    //verifier chaque champs
    if (nom === "" ){
        alert("Le champ Nom est vide")
        return //si un champ est vide on arrete tout on verifie pas les autres champs
    }
    if (prenom === ""){
        alert("Le champ prenom est vide")
        return 
    }
    if (age === ""){
        alert("Le champ age est vide")
        return 
    }
    if (sexe === null){
        alert("Le champ sexe est vide")
        return
    }
    if (loisir.length === 0){
        alert("Le champ loisir est vide")
        return
    }
    if (pays === ""){
        alert("Le champ pays est vide")
        return
    }
    if (commentaire === ""){
        alert("Le champ comm est vide")
        return
    }

    let valeursLoisirs = []  //Créer le tableau vide
    for (let i = 0; i < loisir.length; i++) {   //parcourt chak case coché
    valeursLoisirs.push(loisir[i].value)        //ajouter dans le tableau
    }
    let texteLoisirs = valeursLoisirs.join(", ") //transforme le tab en texte


    let message = "Nom : " + nom + 
              "\nPrénom : " + prenom + 
              "\nÂge : " + age + 
              "\nSexe : " + (sexe ? sexe.value : "Non coché") + 
              "\nLoisirs : " + texteLoisirs + 
              "\nPays : " + pays + 
              "\nCommentaire : " + commentaire


    alert(message)


})