// Sélection de la balise h1
var titreh1 = document.querySelector('h1')
// Ajouter titre h1
titreh1.textContent = 'Enigmes'
titreh1.id = 'titreEnigmes'

// Création de l'élément p
var para = document.createElement('p')
// Ajout de son id
para.id = 'instructions'
// Mettre du style css
para.style.marginTop = '10px'
// Mettre du style css
para.style.fontSize = '0.55em'
// Le rattacher à la balise h1
para.innerHTML = "3 questions au total - Elles apparaissent au fur à mesure dès que vous trouvez la bonne réponse <br> Attention, Vous n'avez que 3 tentatives par question"
document.querySelector('h1').appendChild(para)

// Déclaration des variables
var question1 = document.getElementById('q1')
var question2 = document.getElementById('q2')
var question3 = document.getElementById('q3')
var divElt = document.getElementById('bravo')

var form1 = document.getElementById('devinette1')
var form2 = document.getElementById('devinette2')
var form3 = document.getElementById('devinette3')

// Les devinettes sont masquées
document.getElementById('devinette2').style.display = 'none'
document.getElementById('devinette3').style.display = 'none'
document.getElementById('bravo').style.display = 'none'
document.getElementById('perdu').style.display = 'none'

document.getElementById('bravo').style.alignItems = 'center'
document.getElementById('perdu').style.alignItems = 'center'

var score = 0
var i = 0 // nombre d'essais
// function buttonClick() {
//   i++
//   document.getElementById('btn').value = i
//     if (i >= 3) {
//       document.getElementById('aideReponse').innerHTML = "STOP ! 3 essais déjà réalisés, vous avez perdu"
//       document.getElementById("btn").style.display='none'
//     }
// }

// Déclation du formulaire
// Quand on click sur le bouton submit .....
form1.addEventListener('submit', function(e) {
  // Déclaration de la variable prenant la valeur de l'input question1
  var questionElt = form1.elements.q1.value // où chercher ? dans l'input
  var masque1 = /avenir/ // quel est le mot rechercher ?
  // Mettre la reponse dans input caché et recherche de la correspondance entre la saisie réalisée dans l'input question1 et réponse attendue
  document.getElementById('q1hidden').value = questionElt.match(masque1)
  // stockée réponse dans variable
  var resultat = document.getElementById('q1hidden').value

  // console.log(resultat)
  switch (resultat) {
    case 'avenir': // !!! string attendu, il faut du texte absolument !!!
      // alert pour la  bonne réponse
      document.getElementById('aideReponse').textContent = "Bravo ! Vous avez trouvé la bonne réponse \ud83d\ude00"
      // la 2eme devinette apparaît
      document.getElementById('devinette2').style.display = 'block'
      // La 3eme devinett 3 reste cachée
      document.getElementById('devinette3').style.display = 'none'
      // l'image reste masquée
      document.getElementById('bravo').style.display = 'none'
      // Calcul du score
      score++
      // console.log(score)
      break
    default:
      // ********************* METTRE UN COMPTEUR DE REPONSE ********************* //
      // Calcul du nombre d'essai
      i++
      // console.log(i)
      if (i >= 3) {
        document.getElementById('tentative1').innerHTML = "3 essais déjà réalisés, Vous n'avez pas trouvé la bonne réponse \ud83d\ude15"
        document.getElementById('btn').disabled = true
        document.getElementById('perdu').style.display = 'block'
      }
      document.getElementById('aideReponse').textContent = "essai(s) n° " + i
      document.getElementById('devinette2').style.display = 'none'
      document.getElementById('devinette3').style.display = 'none'
      document.getElementById('bravo').style.display = 'none'
  }
  e.preventDefault() // Annulation de l'envoi des données
})


form2.addEventListener('submit', function(e) {
  var questionElt2 = form2.elements.q2.value
  var masque2 = /charbon/

  document.getElementById('q2hidden').value = questionElt2.match(masque2)
  var resultat2 = document.getElementById('q2hidden').value // stockée réponse dans variable
  // console.log(questionElt2)
  switch (resultat2) {
    case 'charbon':
      document.getElementById('aideReponse2').textContent = "Bravo ! Vous avez trouvé la bonne réponse \ud83d\ude00"
      question1.value = 'avenir'
      document.getElementById('devinette3').style.display = 'block'
      document.getElementById('bravo').style.display = 'none'
      score++
      // console.log(score)
      break
    default:
      // Calcul du nombre d'essai
      i++
      // console.log(i)
      if (i >= 3) {
        document.getElementById('tentative2').innerHTML = "3 essais déjà réalisés, Vous n'avez pas trouvé la bonne réponse \ud83d\ude15"
        document.getElementById('btn2').disabled = true
        document.getElementById('perdu').style.display = 'block'
      }
      // document.getElementById('aideReponse1').textContent = "Vous n'avez pas trouvé la bonne réponse \ud83d\ude15"
      question1.value = 'avenir'
      document.getElementById('aideReponse2').textContent = "essai(s) n° " + i
      document.getElementById('devinette3').style.display = 'none'
      document.getElementById('bravo').style.display = 'none'
  }
  e.preventDefault() // Annulation de l'envoi des données
})

form3.addEventListener('submit', function(e) {
  var questionElt3 = form3.elements.q3.value
  var masque3 = /errreur/ // quel est le mot rechercher ?

  document.getElementById('q3hidden').value = questionElt3.match(masque3)
  var resultat3 = document.getElementById('q3hidden').value // stockée réponse dans variable

  // console.log(questionElt2)
  switch (resultat3) {
    case 'errreur':
      document.getElementById('aideReponse3').textContent = "Bravo ! Vous avez trouvé la bonne réponse \ud83d\ude00"
      question1.value = 'avenir'
      question2.value = 'charbon'
      score++
      console.log(score)
      break
    default:
      // Calcul du nombre d'essai
      i++
      console.log(i)
      if (i >= 3) {
        document.getElementById('tentative3').innerHTML = "3 essais déjà réalisés, Vous n'avez pas trouvé la bonne réponse \ud83d\ude15"
        document.getElementById('btn3').disabled = true
        document.getElementById('perdu').style.display = 'block'
      }
      document.getElementById('aideReponse3').textContent = "essai(s) n° " + i
  }
  e.preventDefault() // Annulation de l'envoi des données
  if (score === 3) {
    document.getElementById('bravo').style.display = 'block'
    document.getElementById('score').textContent = "Vous avez obtenu : " + score + ' points'
  }
})
