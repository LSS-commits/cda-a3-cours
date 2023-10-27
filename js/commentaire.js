var addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", () => {
  var userInput = document.querySelector("#comment");

  // récupérer le commentaire
  var comment = userInput.value;

  // afficher le commentaire envoyé
  var commentsBox = document.querySelector("#comments");

  // commentsBox.innerHTML += `<p>${comment}</p>`;
  // => pas propre parce que HTML dans JS

  var p = document.createElement("p");
  p.innerHTML = comment;
  commentsBox.appendChild(p);

  // vider le champ textarea
  userInput.value = "";
});

