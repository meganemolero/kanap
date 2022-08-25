/*Récupération du panier dans le localStorage*/
let cart = JSON.parse(localStorage.getItem("toAdd"));

/*Fonction qui va aller requeter l'api*/
async function addToBasket(){
    if(cart){
          /*Boucle pour aller récupérer tous les produits dans le LS*/
          for (productsAddToBasket of cart){
            /*Création de la variable qui va regrouper les éléments récupérés dans le LS*/
            let productsOnCart = 
                  {
                  id : toAdd.id,
                  couleur: toAdd.couleur,
                  quantite: toAdd.quantite
                  }
                fetch('http://localhost:3000/api/products/' + productsOnCart.id)
                  .then(function(reponse) {
                    if (reponse.ok) {
                    return reponse.json();
                    }
                    })
                  .then(function(productsAddToBasket) {
           
                  /*Lien avec la section #cart__items*/
                  const cartItems = document.getElementById('cart__items');

                  /*Création de la balise article*/
                  let cartArticle = document.createElement('article');
                  cartArticle.classList.add = 'cart__item';
                  cartArticle.dataset.id = productsOnCart.id;
                  cartArticle.dataset.color = productsOnCart.couleur;
                  cartItems.appendChild(cartArticle);

                  /*Création de la balise div cart__item__img*/
                  let cartDivImg = document.createElement('div');
                  cartDivImg.classList.add = 'cart__item__img';
                  cartArticle.appendChild(cartDivImg);

                  /*Création de la balise img*/
                  let cartImg = document.createElement('img');
                  cartImg.src = productsAddToBasket.imageUrl;
                  cartImg.alt = productsAddToBasket.altTxt;
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
                  cartDescriptionName.innerText = productsAddToBasket.name;
                  cartDivContentDescription.appendChild(cartDescriptionName);

                  /*Création de la balise p couleur*/
                  let cartDescriptionPColor = document.createElement('p');
                  cartDescriptionPColor.innerText = productsOnCart.couleur;
                  cartDivContentDescription.appendChild(cartDescriptionPColor);

                  /*Création de la balise p prix*/
                  let cartDescriptionPPrice = document.createElement('p');
                  cartDescriptionPPrice.innerText = productsAddToBasket.price;
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
                  cartSettingsQuantityP.value = productsOnCart.quantite;        
                  cartArticle.innerText = "Qté : "
                  cartSettingsQuantity.appendChild(cartSettingsQuantityP);

                  /*Création de la balise input et de ses attributs*/
                  let cartInputQuantity = document.createElement('input');
                  cartInputQuantity.classList.add='itemQuantity';
                  cartInputQuantity.type = "number";
                  cartInputQuantity.name = "itemQuantity";
                  cartInputQuantity.min = 1 ;
                  cartInputQuantity.max = 100;
                  cartInputQuantity.value = productsOnCart.quantite;
                  cartSettingsQuantity.appendChild(cartInputQuantity);
                  /*Modifier la quantité d'un produit*/
                  cartInputQuantity.addEventListener("change", (m) => {
                    m.preventDefault();
                    let modifyId = productsOnCart.id;
                    let modifyCouleur = productsOnCart.couleur;
                    let modifyProduct = cart.find(p => p.id == modifyId && p.couleur == modifyCouleur);
                        if(modifyProduct){
                          modifyProduct = productsOnCart.quantite;
                          localStorage.setItem("toAdd", JSON.stringify(cart));

                         } else {
                            cart.push(productOptions);
                            localStorage.setItem("toAdd", JSON.stringify(cart));
                         }
                    calculTotals
                    reload
                  }
                  )
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
                  /*Supprimer un produit contenu dans le local storage*/
                  cartSettingsDeleteP.addEventListener("click", (e) => {
                    e.preventDefault();
                    let deleteId = productsOnCart.id;
                    let deleteCouleur = productsOnCart.couleur;
                    let deleteItem = cart.filter (p => p.id != deleteId || p.couleur != deleteCouleur).remove();
                    localStorage.setItem("toAdd", JSON.stringify(cart));
                    calculTotals
                    reload
                  }
                  )
                  function reload (){
                    document.location.reload
                  }
                  }
                  )
          }
    }
    function calculTotals(){
      /*On recherche les éléments du DOM*/
      let totalQuantity = document.getElementById('totalQuantity');
      let totalPrice = document.getElementById('totalPrice');
      /*On initialise les compteurs à 0 par défaut*/
      let totalProducts = 0;
      let totalProductsPrice = 0;
      /*On fait les calculs*/
      totalProducts += parseInt(productsOnCart.quantite);
      totalProductsPrice +=productsAddToBasket.price * parseInt(productsOnCart.quantite);
    }
};
/*Mise en place des formulaires de contact*/

/*Création des variables qui vont nous être utiles*/

/*Variables de regex*/
/*Adresse mail*/
let regexEmail = new RegExp (/^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z0-9-][.]{1}[a-z]{2,3}$/);
/*Adresse postale*/
let regexAdress = new RegExp (/^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ0-9_-]$/);
/*Nom, prénom et ville*/
let regexInfos = new RegExp (/^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{2,}$/);

/*Variables pour les différents Input*/
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let adress = document.getElementById('address');
let city = document.getElementById('city');
let email = document.getElementById('email');

/*Variables pour les messages d'erreur*/
let firstNameErrorMessage = document.getElementById('firstNameErrorMsg');
let lastNameErrorMessage = document.getElementById('lastNameErrorMsg');
let adressErrorMessage = document.getElementById('addressErrorMsg');
let cityErrorMessage = document.getElementById('cityErrorMsg');
let emailErrorMessage = document.getElementById('emailErrorMsg');


/*Messages d'erreur à insérer dans les conditions*/
firstNameErrorMessage.innerText = "Veuillez saisir au minimim 2 lettres. Les chiffres et les symboles sont interdits. ";
lastNameErrorMessage.innerText =  "Veuillez saisir au minimim 2 lettres. Les chiffres et les symboles sont interdits. ";
adressErrorMessage.innerText = "Les symboles sont interdits";
cityErrorMessage.innerText = "Veuillez saisir au minimim 2 lettres. Les chiffres et les symboles sont interdits. " ; 
emailErrorMessage.innerText = "Adresse email invalide";  

  


  





