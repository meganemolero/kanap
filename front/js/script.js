fetch("http://localhost:3000/api/products");


// créer l'élement a
let elemA = document.createElement('a');
// changer l'attribut href de l'élément a
elemA.href = './product.html?id=42';
//créer un élément article
let elemArticle = document.createElement('article');
// créer un élement article enfant de elemA
elemA.appendChild(elemArticle);
//créer un élément img
let elemImg = document.createElement('img');
//changer l'attribut src de img
elemImg.src = '.../product01.jpg';
//changer le alt de img
elemImg.alt = 'Lorem ipsum dolor sit amet, Kanap name1';
//créer un élément img enfant de article
elemArticle.appendChild(elemImg);
//créer un elément h3 de texte
let elemH3 = document.createElement('h3');
//changer la classe du h3
elemH3.class = 'productName';
//créer un texte associé au h3
let elemH3Text = document.createTextNode('Kanap name1');
//relier le texte au h3
elemH3.appendChild(elemH3Text);
//relier le h3 à l'article
elemArticle.appendChild(elemH3)
//créer l'élément p
let elemP = document.createElement('p');
//changer la classe du p
elemP.class = 'productDescription'; 
//créer un texte associé au p
let elemPText = createTextNode('Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.')
//relier le texte au p
elemP.appendChild(elemPText);
//relier le p à l'article
elemArticle.appendChild(elemP)
//chercher l'élément section et y ajouter l'élément a
document.querySelector('#items section').appendChild(elemA)




