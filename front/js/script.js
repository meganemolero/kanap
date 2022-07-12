/*connexion à l'api*/
fetch('http://localhost:3000/api/products')
  .then(function(reponse) {
    if (reponse.ok) {
      return reponse.json();
    }
  })
  .then(function(value) {
/*boucle pour recupérer tous les produits*/
    value.forEach(products => {
/*creation des éléments en dynamique*/
/*lien avec la section #items */       
const items = document.getElementById('items');
/*création de la balise a*/
let elemA = document.createElement('a');
elemA.href = './product.html?id=42';
items.appendChild(elemA);
/*Création de la balise article*/
let elemArticle = document.createElement('article');
elemA.appendChild(elemArticle);
/*Création de la balise img avec ses attributs*/
let elemImg = document.createElement('img');
elemImg.src = products.imageUrl;
elemImg.alt = products.altTxt;
elemArticle.appendChild(elemImg);
/*Création de la balise h3*/
let elemH3 = document.createElement('h3');
elemH3.classList.add = 'productName';
elemH3.innerText = products.name;
elemArticle.appendChild(elemH3);
/*Création de la balise p*/
let elemP = document.createElement('p');
elemP.classList.add = 'productDescription'; 
elemP.innerText = products.description;
elemArticle.appendChild(elemP);
}) 
})


