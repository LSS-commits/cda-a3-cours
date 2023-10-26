function afficherMessage() {
    alert('Salut')
}

var intro = window.document.getElementById('intro')
// console.log(intro);
// console.log(intro.innerHTML);

// AVEC UNE LIGNE ENTRE LES CONTENUS TEXTUELS
// console.log(intro.innerText);
// SIMPLE RETOUR A LA LIGNE
// console.log(intro.textContent);

// rouges est un tableau d'objets
var rouges = document.getElementsByClassName('rouge')

// for(const rouge of rouges){
//     console.log(rouge.innerHTML);
// }


var paragraphes = document.getElementsByTagName('p')
// for (const paragraphe of paragraphes) {
//     console.log(paragraphe.innerHTML);
// }


// récupérer tous les paragraphes qui ne sont pas le premier enfant de leur parent
var notFirstParagraphes = document.querySelectorAll('p:not(:first-child)')
// for (const parag of notFirstParagraphes) {
//     console.log(parag.innerHTML);
// }


// récupérer le premier élément qui respecte la condition
var notFirstParagraphe = document.querySelector('p:not(:first-child)')
// console.log(notFirstParagraphe.innerHTML);

// récupérer élément par son attribut 
var lien = document.querySelector("[href='http://www.francefootball.fr']")
// console.log(lien);


// récupérer la valeur de l'attribut
var lien = document.querySelector('a')
// console.log(lien.getAttribute('href'));

// modifier le lien au clic sur le bouton switch
function switchLink() {
    // modifier la valeur de l'attribut 
    lien.setAttribute('href', 'http://www.francetvinfo.fr')

    // raccourci possible
    // lien.href = "http://www.francetvinfo.fr";
    // MAIS NE FONCTIONNE PAS POUR TOUS LES ATTRIBUTS
    
    // modifier le contenu textuel du lien
    lien.innerHTML = "consultez l'actualité"
}


var firstParagraphe = document.querySelector('p')
// retourne un tableau
// console.log(firstParagraphe.classList);
// retourne une string
// console.log(firstParagraphe.className);

var classes = firstParagraphe.classList
// classes.remove('rouge')
// classes.add('bleu')
// OU SIMPLEMENT
// classes.replace('rouge', 'bleu') 

// toggle = si on trouve on supprime, si on ne trouve pas on ajoute
// classes.toggle('rouge')
// classes.toggle('bleu')

// console.log(classes.contains('rouge'));

// switcher les couleurs
function changeColor(){
    for (const paragraphe of paragraphes) {
        let paragClass = paragraphe.classList
        if (paragClass.contains('bleu')) {
            paragClass.replace('bleu', 'rouge')
        }else{
            paragClass.replace('rouge', 'bleu')
        }
    }
}