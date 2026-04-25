let apprenants = []
let livrables = []

// CHARGER les données sauvegardées au démarrage
function charger() {
    // localStorage.getItem("apprenants")lit le texte stocké ds "apprenants"
    apprenants = JSON.parse(localStorage.getItem("apprenants")) || []

    livrables = JSON.parse(localStorage.getItem("livrables")) || []
}
// SAUVEGARDER les données après chaque action
function sauvegarder(){
    localStorage.setItem("apprenants", JSON.stringify(apprenants))
    localStorage.setItem("livrables", JSON.stringify(livrables))

}
function afficherApprenants() {
    let liste_apprenants = document.getElementById("liste-apprenants")

    liste_apprenants.innerHTML = "" 

    apprenants.forEach(apprenant => { 
        liste_apprenants.innerHTML += ` 
            <div>
                ${apprenant.prenom} ${apprenant.nom}
                <button onclick="supprimerApprenant(${apprenant.id})">
                    ❌
                </button>
            </div>
        `
    })
}

function supprimerApprenant(id) {

    apprenants = apprenants.filter(apprenant => apprenant.id !== id)

    livrables = livrables.filter(l => l.apprenantId !== id)

    sauvegarder()
    afficherApprenants()
    afficherApprenants()
}
function afficherLivrables() {

    let container = document.getElementById("liste-livrables")
    container.innerHTML = ""

    // on récupère les valeurs des filtres
    let filtreApprenant = document.getElementById("filtre-apprenant").value
    let filtreType = document.getElementById("filtre-type").value

    let filtres = livrables.filter(livrable => {

        let matchApprenant = filtreApprenant === "" || livrable.apprenantId == filtreApprenant
        let matchType = filtreType === "" || livrable.type === filtreType

        return matchApprenant && matchType
    })

    filtres.forEach(livrable => {

        let apprenant = apprenants.find(a => a.id === livrable.apprenantId)

        container.innerHTML += `
            <div>
                <h4>${livrable.titre}</h4>
                <p>Type : ${livrable.type}</p>
                <p>Apprenant : ${apprenant ? apprenant.prenom : "inconnu"}</p>
                <p>Statut : ${livrable.statut}</p>

                ${livrable.statut !== "termine" ? `
                    <button onclick="changerStatut(${livrable.id})">
                        Terminer
                    </button>
                ` : `<span>✅ Terminé</span>`}
            </div>
        `
    })
}
document.getElementById("form-apprenant").addEventListener("submit", function(e) {

    e.preventDefault()

    let prenom = document.getElementById("input-prenom").value
    let nom = document.getElementById("input-nom").value
    let email = document.getElementById("input-email").value
    if (prenom === "" || nom === "" || email === "") {
        alert("Remplis tous les champs")
        return
    }
    let nouvelApprenant = {
        id: Date.now(),
        prenom,
        nom,
        email
    }

    apprenants.push(nouvelApprenant)

    sauvegarder()
    afficherApprenants()
    remplirSelectApprenants()
    remplirFiltreApprenants()
    // repartir vide
    document.getElementById("input-prenom").value = ""
    document.getElementById("input-nom").value = ""
    document.getElementById("input-email").value = ""
})
document.getElementById("form-livrables").addEventListener("submit", function(e) {

    e.preventDefault()

    let titre = document.getElementById("input-titre").value
    let type = document.getElementById("select-type").value
    let apprenantId = Number(document.getElementById("select-apprenant").value)

    if (titre === "" || type === "" || !apprenantId) {
        alert("Remplis tous les champs")
        return
    }

    let nouveauLivrable = {
        id: Date.now(),
        titre,
        type,
        apprenantId,
        statut: "a_faire"
    }

    livrables.push(nouveauLivrable)

    sauvegarder()
    afficherLivrables()

    // reset
    document.getElementById("input-titre").value = ""
    document.getElementById("select-type").value = ""
    document.getElementById("select-apprenant").value = ""
})
function remplirSelectApprenants() {

    let select = document.getElementById("select-apprenant")

    select.innerHTML = ""

    // option par défaut
    select.innerHTML = `<option value="">-- Choisir un apprenant --</option>`

    // on remplit avec les apprenants
    apprenants.forEach(apprenant => {

        select.innerHTML += `
            <option value="${apprenant.id}">
                ${apprenant.prenom} ${apprenant.nom}
            </option>
        `
    })
}
function remplirFiltreApprenants() {

    let select = document.getElementById("filtre-apprenant")

    select.innerHTML = `<option value="">Tous les apprenants</option>`

    apprenants.forEach(apprenant => {

        select.innerHTML += `
            <option value="${apprenant.id}">
                ${apprenant.prenom} ${apprenant.nom}
            </option>
        `
    })
}
function changerStatut(id) {

    livrables = livrables.map(livrable => {

        if (livrable.id === id) {
            return {
                ...livrable,
                statut: "termine"
            }
        }

        return livrable
    })

    sauvegarder()
    afficherLivrables()
}

charger()
afficherApprenants()
afficherLivrables()
remplirSelectApprenants()
remplirFiltreApprenants()
document.getElementById("filtre-apprenant").addEventListener("change", afficherLivrables)
document.getElementById("filtre-type").addEventListener("change", afficherLivrables)