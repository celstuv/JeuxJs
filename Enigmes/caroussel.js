/*Création du carousel*/
var divElt = document.getElementById('carousel'); //sélectionner div
var imageElt = document.createElement('img'); //créer la balise img
imageElt.id = 'imagesCarousel'; //donner l'id
imageElt.src = "images/space-invaders.jpg"; //ajouter l'image 3
imageElt.style.width = "100%"; //ajuster la taille

document.getElementById("carousel").appendChild(imageElt); //rattacher div et images


function carousel() { //fonction onclick
  /*La variable image cilbe l'attribut src afin d'incorperer les images du carousel*/
  var imageCarousselElt = document.getElementById('imagesCarousel').getAttribute('src');
  //console.log(imageCarousselElt);


  switch (imageCarousselElt) {
    case 'images/space-invaders.jpg':
      document.getElementById('imagesCarousel').src = 'images/game-hell.jpg';
      break;
    case 'images/game-hell.jpg':
      document.getElementById('imagesCarousel').src = 'images/2.jpg';
      break;
    case 'images/2.jpg':
      document.getElementById('imagesCarousel').src = 'images/space-invaders.jpg';
      break;
  }
}
setInterval(carousel, 2000);
