let bouton1 = document.getElementById("bouton1")
let nom = document.getElementById("nom")
let prenom = document.getElementById("prenom")
let listesapprenants = document.getElementById("listesapprenants")

let select = document.getElementById("selectapprenant")

let bouton2 = document.getElementById("bouton2")
let tache = document.getElementById("tache")
let listetaches = document.getElementById("listestaches")

let apprenants = []
let taches = []

bouton1.addEventListener("click", function(){
    let valeurnom = nom.value 
    let valeurprenom = prenom.value // on recupere les valeurs dans des var

    //on cree une liste dynamique
    let li = document.createElement("li")
    let Modifier = document.createElement("button")
    let Supprimer = document.createElement("button")
    let Archiver = document.createElement("button")

    Modifier.textContent = "Modifier"
    Supprimer.textContent = "Supprimer"
    Archiver.textContent = "Archiver"


    let spanApprenant = document.createElement("span")
    spanApprenant.textContent = valeurnom + " " + valeurprenom
    li.appendChild(spanApprenant)

    let Option = document.createElement("option")
    Option.textContent = valeurnom + " " + valeurprenom
    Option.value = valeurnom + " " + valeurprenom

     Archiver.addEventListener("click", function() {
    // Déplacer l'apprenant vers les archives
    li.remove()
    Option.remove()
    
    // Créer un élément dans la liste des archives
    let archiveLi = document.createElement("li")
    let archiveSpan = document.createElement("span")
    archiveSpan.textContent = spanApprenant.textContent
    archiveLi.appendChild(archiveSpan)
    
    // Ajouter un bouton Restaurer
    let restaurerBtn = document.createElement("button")
    restaurerBtn.textContent = "Restaurer"
    restaurerBtn.addEventListener("click", function() {
        // Recréer l'apprenant dans la liste principale
        archiveLi.remove()
        alert("Apprenant retiré des archives. Pour le remettre, ajoute-le manuellement.")
        
        // Recréer le li et l'option comme dans bouton1
        // (même code que pour ajouter un apprenant)
    })
    archiveLi.appendChild(restaurerBtn)
    
    document.getElementById("listeArchives").appendChild(archiveLi)
    })

    Supprimer.addEventListener("click", function() {
    li.remove()
    // aussi supprimer l'option du select
    Option.remove()
    })



    Modifier.addEventListener("click", function() {
    let nouveauNom = prompt("Nouveau nom")
    let nouveauPrenom = prompt("Nouveau prénom")
    if (nouveauNom && nouveauPrenom) {
        spanApprenant.textContent = nouveauNom + " " + nouveauPrenom
        // aussi modifier l'option du select
        Option.textContent = nouveauNom + " " + nouveauPrenom
        Option.value = nouveauNom + " " + nouveauPrenom
    }
    })

    //on met les valeur dans la liste
    //li.textContent = valeurnom + " " + valeurprenom
    

    listesapprenants.append(li)
    select.appendChild(Option)
    li.append(Modifier, Supprimer, Archiver)

    nom.value = ""
    prenom.value = ""

    apprenants.push({nom: valeurnom, prenom: valeurprenom})
    localStorage.setItem("apprenants", JSON.stringify(apprenants))
})


bouton2.addEventListener("click", function(){
    //l'apprenant sélectionné (select)
    let apprenant = select.value

    let textetache = tache.value

    //Vérification un apprenant choisi, tâche n'est pas vide
    if (apprenant === "") {
    alert("Choisis un apprenant")
    return
    }
    if (textetache === "") {
    alert("Écris une tâche")
    return
    }


    let li = document.createElement("li")
    let input = document.createElement("input")
    input.type = "checkbox"

    let span = document.createElement("span")
    span.textContent = textetache + "(pour " + apprenant + ")"

    input.addEventListener("change", function() {
    if (input.checked) {
        span.classList.add("termine")
    } else {
        span.classList.remove("termine")
    }
    })


    let btnSuppr = document.createElement("button")
    btnSuppr.textContent = "Supprimer"

    btnSuppr.addEventListener("click", function(){
        li.remove()
    })
    
    

    li.appendChild(input)
    li.appendChild(span)
    li.appendChild(btnSuppr)
    listetaches.append(li)
    tache.value = ""


})

function chargerDonnees() {
    let apprenantsSauvegardes = localStorage.getItem("apprenants")
    if (apprenantsSauvegardes) {
        apprenants = JSON.parse(apprenantsSauvegardes)
        // Ici, il faut réafficher tous les apprenants dans la page
        for (let a of apprenants) {
            // Code pour recréer l'apprenant dans la liste et le select
        }
    }
}
console.log("Apprenants chargés :", apprenants)
alert("Données chargées. " + apprenants.length + " apprenants en mémoire.")
chargerDonnees()