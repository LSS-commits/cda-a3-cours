var images = ['bowser.png', 'luigi.png', 'mario.png', 'peach.png', 'toad.png', 'toadette.png', 'yoshi.png']

// SLIDER IMG AU CLIC SUR LE BTN
// var compteur = 0

// function switchImage() {
//     let image = document.querySelector('img')

//     image.setAttribute('src', `./images/${images[compteur]}`)
//     image.setAttribute('alt', images[compteur].replace('.png', ''))
//     console.log(images[compteur]);
//     compteur++
//     return compteur;

// }

var intervalle;

// démarrer l'intervalle (image switche toutes les 2 secs)
function start(){
    intervalle = setInterval(
        switchImage,
        1000
    )
}

// arrêter l'intervalle
function stop(){
    clearInterval(intervalle)
}

// CORRECTION 
function switchImage() {
    var image = document.querySelector('img')

    // CHEMIN ABSOLU (POURRAIT POSER PB ICI)
    // console.log(image.src);

    // CHEMIN RELATIF
    var src = image.getAttribute('src');
    // récupérer le nom du fichier après le dernier slash dans le src
    var position = images.indexOf(src.substring(src.lastIndexOf('/') + 1))

    position++ 

    // pour retourner à la première image à la fin du tableau
    if (position == images.length) {
        position = 0
    }
    image.setAttribute('src', `./images/${images[position]}`)
    // image.setAttribute('alt', `${images[position].replace('.png', '')}`)
    // OU
    // image.alt = images[position].replace('.png', '');

    // OU POUR QUE CA FONCTIONNE AVEC TOUTES LES EXTENSIONS D'IMAGES 
    // on récupère le nom de l'image sans .extension
    image.alt = images[position].substring(0, images[position].indexOf('.'))

}