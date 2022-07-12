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
const items = document.getElementById('items');
let elemA = document.createElement('a');
elemA.href = './product.html?id=42';
items.appendChild(elemA);
let elemArticle = document.createElement('article');
elemA.appendChild(elemArticle);
let elemImg = document.createElement('img');
elemImg.src = products.imageUrl;
elemImg.alt = products.altTxt;
elemArticle.appendChild(elemImg);
let elemH3 = document.createElement('h3');
elemH3.classList.add = 'productName';
elemH3.innerText = products.name;
elemArticle.appendChild(elemH3);
let elemP = document.createElement('p');
elemP.classList.add = 'productDescription'; 
elemP.innerText = products.description;
elemArticle.appendChild(elemP);
}) 
})


