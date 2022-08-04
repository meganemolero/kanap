/*Récupération du panier dans le localStorage*/
let productsPutOnLocalStorage = JSON.parse(localStorage.getItem("toAdd"));
let TotalQuantity = 0;
let TotalPrice = 0;





/*fetch('http://localhost:3000/api/products' + id)
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
  cartArticle.dataset.id = productAddToCart._id;
  cartArticle.dataset.color = /*couleur récupérée dans le local storage*/
  cartItems.appendChild(cartArticle);
  /*Création de la balise div cart__item__img*/
  let cartDivImg = document.createElement('div');
  cartArticle.appendChild(cartDivImg);
  /*Création de la balise img*/
  let cartImg = document.createElement('img');
  cartImg.src = productAddToCart.imageUrl;
  cartImg.alt = productAddToCart.altTxt;
  cartDivImg.appendChild(cartImg);
  /*Création de la balise div cart__item__content*/
  let cartDivContent = document.createElement('div');
  cartArticle.appendChild(cartDivContent);
  /*Création de la balise div cart__item__content_description*/
  let cartDivContentDescription = document.createElement('div');
  cartArticle.appendChild(cartDivContentDescription);
  /*Création de la balise h2*/
  let cartDescriptionName = document.createElement('h2');
  cartDescriptionName.innerText = productAddToCart.name;
  cartDivContentDescription.appendChild(cartDescriptionName);
  /*Création de la balise p couleur*/
  let cartDescriptionPColor = document.createElement('p');
  cartDescriptionPColor.innerText = /*couleur récupérée dans le local Storage*/
  cartDivContentDescription.appendChild(cartDescriptionPColor);
  /*Création de la balise p prix*/
  let cartDescriptionPPrice = document.createElement('p');
  cartDescriptionPPrice.innerText = productAddToCart.price;
  cartDivContentDescription.appendChild(cartDescriptionPPrice);
  /*Création de la balise div cart__item__content__settings*/
  let cartDivContentSettings = document.createElement('div');
  cartArticle.appendChild(cartDivContentDescription);
  /*Création de la balise div cart__item__content__settings__quantity*/
  let cartSettingsQuantity = document.createElement('div');
  cartDivContentSettings.appendChild(cartSettingsQuantity);
  /*Création de la balise p quantité*/
  let cartSettingsQuantityP = document.createElement('p');
  cartArticle.innerText = /*quantité récupérée dans le local storage*/
  cartSettingsQuantity.appendChild(cartSettingsQuantityP);
  /*Création de la balise input et de ses attributs*/
  let cartInputQuantity = document.createElement('input');
  cartInputQuantity.setAttribute("type", "number");
  cartInputQuantity.classList.add='itemQuantity';
  cartInputQuantity.setAttribute("name","itemQuantity");
  cartInputQuantity.setAttribute("min", "1");
  cartInputQuantity.setAttribute("max","100");
  cartInputQuantity.value = productAddToCart.price;
  cartSettingsQuantity.appendChild(cartInputQuantity);
  /*Création de la balise div cart__item__content__settings__delete
  let cartSettingsDelete = document.createElement('div');
  cartDivContentSettings.appendChild(cartSettingsDelete);
  /*Création de la balise p supprimer
  let cartSettingsDeleteP = document.createElement('p');
  cartSettingsDeleteP.innerText = "Supprimer";
  cartSettingsDelete.appendChild(cartSettingsDeleteP);
  /*Récupération de la valeur de la quantité
  let cartTotalQuantity = document.getElementById('totalQuantity');
  cartTotalQuantity.value = /*Total du nombre d'articles;
  let cartPriceDiv = document.getElementsByClassName('cart__price');
  cartPriceDiv.appendChild(cartTotalQuantity);
  /*Récupération de la valeur du prix total
  let CartTotalPrice = document.getElementById('totalPrice');
  CartTotalPrice.value = cartTotalQuantity*productAddToCart.price;
  cartPriceDiv.appendChild(CartTotalPrice);
  /*Affichage des différents messages d'erreur

  


  





