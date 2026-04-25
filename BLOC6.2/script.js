/* */
let users = []
let taches = []

/* on sauvegarde dans le storage*/
function sauvegarder(){
    localStorage.setItem("users", JSON.stringify(users)) //la valeur ici est un TAB et storage prend du texte on convertit avec JSON.stingfy()
    localStorage.setItem("taches", JSON.stringify(taches))
}
/*recuperer les valeurs sauvegarde */
function recuperer(){
    users = JSON.parse(localStorage.getItem("users")) || [] //on remets le texte sauvegarde en TAB avec JSON.parse() et mettre || [] si ya rien
    taches = JSON.parse(localStorage.getItem("taches")) || []
}
/*afficherUsers() */
function afficherUsers(){
    let liste_users = document.getElementById("liste-users")
    liste_users.innerHTML = "" //on vide sinn les users se repetent

    //parcourir le tableau et injecter du HTML
    users.forEach(user => {        //pour chak user du TAB users execute
        if (user.archive === true) return //si le user est archiver on skip

        liste_users.innerHTML += `
            <div class="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                <span class="font-medium text-gray-700">${user.prenom} ${user.nom}</span>
                <div class="flex gap-2">
                    <button onclick="archiverUser(${user.id})" 
                        class="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-lg hover:bg-yellow-200 transition">
                        Archiver
                    </button>
                    <button onclick="modifierUser(${user.id})"
                        class="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-lg hover:bg-blue-200 transition">
                        Modifier
                    </button>
                </div>
            </div>
        `   //ici on a creer un btn archiver dans le html avec Id
    })
}
/*fonction sur l'evenement bouton du form */
document.getElementById("form-user").addEventListener("submit", function(e){

    e.preventDefault() // e n'exécute pas ton comportement par défaut.(rechargepage)

    let prenom = document.getElementById("input-prenom").value
    let nom = document.getElementById("input-nom").value
    let email = document.getElementById("input-email").value

    if (prenom === "" || nom === "" || email === "") { //tout les champs doivent etre rempli
        alert("Remplis tous les champs")
        return
    }

    let nouvelUser = {
        id : Date.now(), //retourne un nombre basé sur l'heure exacte pour que l'ID soit unique
        prenom,
        nom,
        email
    }
    users.push(nouvelUser)

    sauvegarder()
    afficherUsers()
    remplirSelectUsers()
    

    document.getElementById("input-prenom").value = ""
    document.getElementById("input-nom").value = ""
    document.getElementById("input-email").value = ""
})

/* remplir les users dans l'option du select user*/
function remplirSelectUsers(){
    let select = document.getElementById("select-user") //on cible le select du HTML

    select.innerHTML = `<option value="">-- Choisir un utilisateur --</option>` // on le remet proprement car quand on met select.innerhtml ca ecrase tt le contenu html

    users.forEach(user => {
        //pour chaque user on ajoute une option dans le select
        select.innerHTML += `
            <option value="${user.id}"> ${user.prenom} ${user.nom} </option>
        `
    })
}
/* permet d'archiver un user */
function archiverUser(id){
    //dans le tableau users, trouve le user qui a cet id
    let user = users.find(u => u.id === id)
    if(!user) return
    user.archive = true

    sauvegarder()
    afficherUsers()
    remplirSelectUsers()

}
/* modifier utilisateur */
function modifierUser(id){
    //syntaxe pour trouver un élément dans un tableau par son id 
    let user = users.find(u => u.id === id)
    if (!user) return

    let nouveauPrenom = prompt("Nouveau prénom")
    let nouveauNom = prompt("Nouveau nom")
            //Si nouveauPrenom existe, alors on le remplace par cette valeur.”
    if (nouveauPrenom) user.prenom = nouveauPrenom
    if (nouveauNom) user.nom = nouveauNom

    sauvegarder()
    afficherUsers()
}

/* fonction affinchant les taches */
function afficherTaches(){
    let liste_taches = document.getElementById("liste-taches")
    let filtre = document.getElementById("filtre-user").value

    liste_taches.innerHTML = ""  

    taches.forEach(tache => {
        //Si on a filtré un user  ET 'id du user de cette tâche ne correspond pas au filtre choisi
        //On ignore les tâches qui ne correspondent pas au filtre pour n’afficher que les bonnes
        if (filtre !== "" && tache.userId !== Number(filtre)) return
        let user = users.find(u => u.id === tache.userId) //je cherche quel utilisateur est lié à cette tâche
        liste_taches.innerHTML += `
            <div class="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 ${tache.terminee ? 'opacity-50' : ''}">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="font-medium text-gray-800 ${tache.terminee ? 'line-through' : ''}">${tache.titre}</p>
                        <p class="text-sm text-gray-500">${user ? user.prenom + ' ' + user.nom : 'inconnu'}</p>
                    </div>
                    <div class="flex gap-2">
                        ${!tache.terminee ? `
                            <button onclick="terminerTache(${tache.id})"
                                class="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-lg hover:bg-green-200 transition">
                                ✅ Terminer
                            </button>` : `<span class="text-green-600 text-sm font-medium">Terminée</span>`}
                        <button onclick="supprimerTache(${tache.id})"
                            class="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-lg hover:bg-red-200 transition">
                            🗑️ Supprimer
                        </button>
                    </div>
                </div>
            </div>
        `
    } )
}

/* on ajoute tache */
document.getElementById("form-tache").addEventListener("submit", function(e){
    e.preventDefault()

    let titre = document.getElementById("input-tache").value
    let iduser = document.getElementById("select-user").value

    if (titre === "" || iduser === "") { //tout les champs doivent etre rempli
        alert("Remplis tous les champs")
        return
    }
    
    let nouvelTache = {
        id : Date.now(),
        titre : titre,
        userId : Number(iduser), 
        terminee : false
    }
    taches.push(nouvelTache)

    sauvegarder()
    afficherTaches()

    document.getElementById("input-tache").value = ""
    document.getElementById("select-user").value = ""
})

function terminerTache(id){
    let tache = taches.find(t => t.id === id)
    if(!tache) return //Si la tâche n’existe pas
    tache.terminee = true

    sauvegarder()
    afficherTaches()
}
function supprimerTache(id){
    //Filtrer taches[] pour retirer la tâche avec cet id
    taches = taches.filter(t => t.id !== id)

    sauvegarder()
    afficherTaches()
}
function remplirFiltreUsers(){
    let select = document.getElementById("filtre-user")

    select.innerHTML = `<option value="">--Tous les utilisateurs--</option>`
    users.forEach(user => {
        select.innerHTML += `
        <option value="${user.id}"> ${user.prenom} ${user.nom} </option>
        `
    })
}
document.getElementById("filtre-user").addEventListener("change", afficherTaches)
recuperer()        
afficherUsers()     
afficherTaches()   
remplirSelectUsers() 
remplirFiltreUsers() 
