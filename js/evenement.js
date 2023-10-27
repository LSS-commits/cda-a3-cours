var button = document.querySelector("#addTextBtn");
var text = document.querySelector("#text");

/* si la dernière valeur saisie par l'utilisateur ne respecte pas le condition, annuler l'évènement et afficher message d'erreur */
text.addEventListener("keypress", (e) => {
    var value = e.key
    if (value < 'a' || value > 'z') {
        // si valeur entrée n'est pas une lettre minuscule, saisie annulée
        e.preventDefault();
        alert("Veuillez saisir une lettre minuscule");
    }
});