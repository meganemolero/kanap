/*Récupération du panier dans le localStorage*/
let productsPutOnLocalStorage = JSON.parse(localStorage.getItem("toAdd"));
let TotalQuantity = 0;
let TotalPrice = 0;
/*Vérification des informations du panier*/
if(productsPutOnLocalStorage){
  productsPutOnLocalStorage.map(function selectedProducts(){
    let selectedProductId = selectedProducts._id;
    let selectedProductColor = selectedProducts.color;
    let selectedProductQuantity = selectedProducts.quantity;
    function addToBasket(){
  
        fetch('http://localhost:3000/api/products' + id)
        .then(function(reponse) {
            if (reponse.ok) {
            return reponse.json();
            }
        })
        .then(function(productAddToCart) {

  /*Lien avec la section #cart__items*/
  const cartItems = document.getElementById('cart__items');

  /*Création de la balise article*/
  let cartArticle = document.createElement('article');
  cartArticle.classList.add = 'cart__item';
  cartArticle.dataset.id = selectedProductId;
  cartArticle.dataset.color = selectedProductColor;
  cartItems.appendChild(cartArticle);

  /*Création de la balise div cart__item__img*/
  let cartDivImg = document.createElement('div');
  cartDivImg.classList.add = 'cart__item__img';
  cartArticle.appendChild(cartDivImg);

  /*Création de la balise img*/
  let cartImg = document.createElement('img');
  cartImg.src = productAddToCart.imageUrl;
  cartImg.alt = productAddToCart.altTxt;
  cartDivImg.appendChild(cartImg);

  /*Création de la balise div cart__item__content*/
  let cartDivContent = document.createElement('div');
  cartDivContent.classList.add = 'cart__item__content';
  cartArticle.appendChild(cartDivContent);

  /*Création de la balise div cart__item__content_description*/
  let cartDivContentDescription = document.createElement('div');
  cartDivContentDescription.classList.add = 'cart__item__content__description';
  cartArticle.appendChild(cartDivContentDescription);

  /*Création de la balise h2*/
  let cartDescriptionName = document.createElement('h2');
  cartDescriptionName.innerText = productAddToCart.name;
  cartDivContentDescription.appendChild(cartDescriptionName);

  /*Création de la balise p couleur*/
  let cartDescriptionPColor = document.createElement('p');
  cartDescriptionPColor.innerText = selectedProductQuantity;
  cartDivContentDescription.appendChild(cartDescriptionPColor);

  /*Création de la balise p prix*/
  let cartDescriptionPPrice = document.createElement('p');
  cartDescriptionPPrice.innerText = productAddToCart.price;
  cartDivContentDescription.appendChild(cartDescriptionPPrice);

  /*Création de la balise div cart__item__content__settings*/
  let cartDivContentSettings = document.createElement('div');
  cartDivContentSettings.classList.add = 'cart__item__content__settings';
  cartArticle.appendChild(cartDivContentDescription);

  /*Création de la balise div cart__item__content__settings__quantity*/
  let cartSettingsQuantity = document.createElement('div');
  cartSettingsQuantity.classList.add = 'cart__item__content__settings__quantity';
  cartDivContentSettings.appendChild(cartSettingsQuantity);

  /*Création de la balise p quantité*/
  let cartSettingsQuantityP = document.createElement('p');
  cartSettingsQuantityP.value = /*quantité totale*/        
  cartArticle.innerText = /*quantité totale*/
  cartSettingsQuantity.appendChild(cartSettingsQuantityP);

  /*Création de la balise input et de ses attributs*/
  let cartInputQuantity = document.createElement('input');
  cartInputQuantity.classList.add='itemQuantity';
  cartInputQuantity.type = "number";
  cartInputQuantity.name = "itemQuantity";
  cartInputQuantity.min = 1 ;
  cartInputQuantity.max = 100;
  cartInputQuantity.value = selectedProductQuantity;
  cartSettingsQuantity.appendChild(cartInputQuantity);
  
  /*Création du bouton "supprimer"*/
  /*Création de la div*/
  let cartSettingsDelete = document.createElement('div');
  cartSettingsDelete.classList.add = 'cart__item__content__settings__delete';
  cartDivContentSettings.appendChild(cartSettingsDelete);
  /*Création du paragraphe*/
  let cartSettingsDeleteP = document.createElement('p');
  cartSettingsDeleteP.classList.add = 'deleteItem';
  cartSettingsDeleteP.innerText = "Supprimer";
  cartSettingsDelete.appendChild(cartSettingsDeleteP);

  /*Récupération de la valeur de la quantité
  let cartTotalQuantity = document.getElementById('totalQuantity');
  

  /*Récupération de la valeur du prix total
  let CartTotalPrice = document.getElementById('totalPrice');
 

  /*Affichage des différents messages d'erreur
*/
  }}})}

  


  





