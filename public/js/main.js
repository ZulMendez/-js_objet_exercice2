// # Exo 1
// Créer un exercice ou une personne rentre dans un magasin avec une somme d'argent et a la fin il faut soustraire l'argent depensé
// ex: je rentre dans un magasin, j'ai 30€, j'achete un chocolat qui coute 2€, et une tartine qui coute 3,50€.
// Au final, j'ai 24,50€ 

// exo1

// let personne = {
//     argent: 30,
//     panier: [],
// }

// let magasin = {
//     chocolat: {
//         nom: 'choco',
//         price: 2,
//     },
//     tartine: {
//         nom: 'tartine',
//         price: 3,
//     },
//     vendre(a) {
//         let ask = confirm('faire des achats ?')
//         while (ask == true) {
//             let acheter = prompt('Quel element veux-tu ?')
//             for (const key in this) {
//                 if (key == acheter) {
//                     a.panier.push(key)
//                     a.argent -= magasin[key].price
//                     // a.argent = a.argent - magasin[key].price
//                 }
//             }
//             ask = confirm('faire des achats ?')
//         }
//     }
// }

// magasin.vendre(personne)


// # Exo 2
// - Créer un objet "vieille_dame" avec une propriété "age" assez élevée une propriété "nom" contenant un "prenom" et un "nom de famille", une dernière propriété "moral" avec comme valeur "mal"
// - une propriété "objet" par exemple une canne 
// - une method se_plaindre qui selon son moral fait une alert différente, si son moral = mal alors elle dira "Vous me dérangez", si son moral = bien alors elle dira bonjour monsieur + le nom du vieil_homme

let vieille_dame = {
    identité: {
        nom : 'Bertrand',
        prenom : 'Marie',
        age : 80,
    },
    moral : 'mal',
    accessoire : 'canne',
    se_plaindre(){
        prompt('Vous allez bien?')
        if (this.moral == 'mal') {
            alert(`Vous me dérangez ${a.prenom}`)
        } else {
            alert(`Bonjour ${a.prenom}`)
        }
    },
    se_promener(){
        if (this.moral == "bien") {
            console.log(`Se promene`);
            this.accessoire = "perdu"
        } else {
            console.log(`Ne souhaite pas se promener`);
        }
    }
}

let viel_homme = {
    nom: 'Garcia',
    prenom : "Richard",
    age : 72,
    saluer(a) {
        console.log(`Bonjour ${a.idendite.prenom}  `);
    },
    adoucir(a){
        a.moral = "bien"
        console.log(`L'homme charmant`);
    }
}


viel_homme.saluer(vielle_dame)
vielle_dame.reponse(viel_homme)
vielle_dame.se_promener()
viel_homme.adoucir(vielle_dame)
vielle_dame.reponse(viel_homme)
vielle_dame.se_promener()


// # Exo 2 B
// - Rajouter une method "se_promener" à la vieille_dame, qui change la valeur de l'objet à perdu 
// # Exo 3
// - Rajouter a vieil_homme une propriété "age","prenom" et une method saluer qui dira bonjour "le prenom de la vieille_dame + son nom de famille" et juste après lancera la fonction se_plaindre de la vieille dame 
// - Rajoutez égalment une method adoucir, cette method changera le moral de la vieille_dame en "bien" -->



