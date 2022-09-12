/*Récupération du panier dans le localStorage*/
let cart = JSON.parse(localStorage.getItem("toAdd"));
/*Fonction asynchrone qui va créer un tableau des objets présent dans la panier donc dans le LS*/
async function addToBasket(){
    if(cart){
          /*Boucle pour aller récupérer tous les produits dans le LS*/
          for (let toAdd of cart){
            /*Création de la variable qui va regrouper les éléments récupérés dans le LS*/
            let productsOnCart = 
                  {
                  id : toAdd.id,
                  couleur: toAdd.couleur,
                  quantite: toAdd.quantite
                  }
                /*Récupération des données de l'API*/
                fetch('http://localhost:3000/api/products/' + productsOnCart.id)
                  .then(function(reponse) {
                    if (reponse.ok) {
                    return reponse.json();
                    }
                    })
                  .then(function(toAdd) {
                  /*Création des éléments du DOM en createElements*/
                  /*Lien avec la section #cart__items*/
                  const cartItems = document.getElementById('cart__items');

                  /*Création de la balise article*/
                  let cartArticle = document.createElement('article');
                  cartArticle.className = 'cart__item';
                  cartArticle.dataset.id = productsOnCart.id;
                  cartArticle.dataset.color = productsOnCart.couleur;
                  cartItems.appendChild(cartArticle);

                  /*Création de la balise div cart__item__img*/
                  let cartDivImg = document.createElement('div');
                  cartDivImg.className = 'cart__item__img';
                  cartArticle.appendChild(cartDivImg);

                  /*Création de la balise img*/
                  let cartImg = document.createElement('img');
                  cartImg.src = toAdd.imageUrl;
                  cartImg.alt = toAdd.altTxt;
                  cartDivImg.appendChild(cartImg);

                  /*Création de la balise div cart__item__content*/
                  let cartDivContent = document.createElement('div');
                  cartDivContent.className = 'cart__item__content';
                  cartArticle.appendChild(cartDivContent);

                  /*Création de la balise div cart__item__content_description*/
                  let cartDivContentDescription = document.createElement('div');
                  cartDivContentDescription.className = 'cart__item__content__description';
                  cartDivContent.appendChild(cartDivContentDescription);

                  /*Création de la balise h2*/
                  let cartDescriptionName = document.createElement('h2');
                  cartDescriptionName.innerText = toAdd.name;
                  cartDivContentDescription.appendChild(cartDescriptionName);

                  /*Création de la balise p couleur*/
                  let cartDescriptionPColor = document.createElement('p');
                  cartDescriptionPColor.innerText = productsOnCart.couleur;
                  cartDivContentDescription.appendChild(cartDescriptionPColor);

                  /*Création de la balise p prix*/
                  let cartDescriptionPPrice = document.createElement('p');
                  cartDescriptionPPrice.innerText = toAdd.price + " €";
                  cartDivContentDescription.appendChild(cartDescriptionPPrice);

                  /*Création de la balise div cart__item__content__settings*/
                  let cartDivContentSettings = document.createElement('div');
                  cartDivContentSettings.className = 'cart__item__content__settings';
                  cartDivContent.appendChild(cartDivContentSettings);

                  /*Création de la balise div cart__item__content__settings__quantity*/
                  let cartSettingsQuantity = document.createElement('div');
                  cartSettingsQuantity.className = 'cart__item__content__settings__quantity';
                  cartDivContentSettings.appendChild(cartSettingsQuantity);

                  /*Création de la balise p quantité*/
                  let cartSettingsQuantityP = document.createElement('p');
                  cartSettingsQuantityP.value = productsOnCart.quantite;        
                  cartSettingsQuantityP.innerText = "Qté : "
                  cartSettingsQuantity.appendChild(cartSettingsQuantityP);

                  /*Création de la balise input et de ses attributs*/
                  let cartInputQuantity = document.createElement('input');
                  cartInputQuantity.className ='itemQuantity';
                  cartInputQuantity.type = "number";
                  cartInputQuantity.name = "itemQuantity";
                  cartInputQuantity.min = 1 ;
                  cartInputQuantity.max = 100;
                  cartInputQuantity.value = productsOnCart.quantite;
                  cartSettingsQuantity.appendChild(cartInputQuantity);
                  /*Modifier la quantité d'un produit*/
                  /*Evenement de modification*/
                  cartInputQuantity.addEventListener("change", (m) => {
                    m.preventDefault();
                    /*Création de variables utilisées lors de la modification*/
                    /*Nous avons besoin de récupérer l'id et la couleur stockés dans le LS*/
                    let modifyId = productsOnCart.id;
                    let modifyCouleur = productsOnCart.couleur;
                    /*Nous allons rechercher avec la méthode find et comparer les id et les couleurs des objets modifiés*/
                    let modifyProduct = cart.find((p) => p.id == modifyId) && cart.find((p) => p.couleur == modifyCouleur);
                        if(modifyProduct){
                          modifyProduct.quantite = Number(cartInputQuantity.value);
                          localStorage.setItem("toAdd", JSON.stringify(modifyProduct));

                         } else {
                            cart.push(productOptions);
                            localStorage.setItem("toAdd", JSON.stringify(cart));
                         }
                    /*On joue la fonction de rechargement de la page*/
                    reload();
                    calculTotals();
                  }
                  )
                  /*Création du bouton "supprimer"*/
                  /*Création de la div*/
                  let cartSettingsDelete = document.createElement('div');
                  cartSettingsDelete.className = 'cart__item__content__settings__delete';
                  cartDivContentSettings.appendChild(cartSettingsDelete);
                  /*Création du paragraphe*/
                  let cartSettingsDeleteP = document.createElement('p');
                  cartSettingsDeleteP.className = 'deleteItem';
                  cartSettingsDeleteP.innerText = "Supprimer";
                  cartSettingsDelete.appendChild(cartSettingsDeleteP);
                  /*Supprimer un produit contenu dans le local storage*/
                  /*On crée l'evenement de suppression au click sur le bouton supprimer*/
                  cartSettingsDeleteP.addEventListener("click", (e) => {
                    e.preventDefault();
                    /*On crée les variables utilisées lors de la suppression*/
                    let deleteId = productsOnCart.id;
                    let deleteCouleur = productsOnCart.couleur;
                    /*La méthode .filter permet d'aller rechercher les éléments précis que l'on veut supprimer en fonction de l'id et la couleur*/
                    /*le .remove est une fonction du localStorage pour supprimer un élément*/
                    let deleteItem = cart.filter (p => p.id != deleteId || p.couleur != deleteCouleur);
                    e.target.closest('.cart__item').remove();
                    /*On actualise le LS*/
                    localStorage.setItem("toAdd", JSON.stringify(deleteItem));
                    /*On va calculer le prix total*/
                    let totalPrice = querySelector('#totalPrice');
                    let totalAmount = 0;
                    totalAmount =+ Number(cartInputQuantity.value) * Number(toAdd.price);
                    totalPrice.innerText = totalAmount;
                  /*On joue la fonction d'actualisation de la page*/
                    reload();

                  }
                  )
                  }
                  )
          }
          
         
    }
    else{
      alert("Le panier est vide")
    } 
}
/*On joue la fonction principale que l'on vient de créer*/
addToBasket();
/*Fonction pour actualiser la page actuelle*/
function reload (){
  document.location.reload()
}
/*Fonction pour calculer le prix total et les quantités totales*/
function calculTotals(){
  if(cart){
    let totalQuantity = cart;
    let totalProducts = document.querySelector('#totalQuantity');
    let totalItems = 0;
    for (let toAdd of totalQuantity){
        totalItems += Number(toAdd.totalQuantity);
        }
  totalProducts.textContent = totalItems;
  } 
  } 



/*************************************************          Mise en place des formulaires de contact      *********************************************************************/

/*Création des variables qui vont nous être utiles*/

/*Variables de regex*/
/*Adresse mail*/
let regexEmail = new RegExp ('^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z0-9._-]+[.]{1}[a-z]{2,10}$', 'g');
/*Adresse postale*/
let regexAddress = new RegExp ('^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ0-9_-]$');
/*Nom, prénom et ville*/
let regexInfos = new RegExp ('^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{2,}$');

/*Variables pour les différents Input*/
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let address = document.getElementById('address');
let city = document.getElementById('city');
let email = document.getElementById('email');

/*Variables pour les messages d'erreur*/
let firstNameErrorMessage = document.getElementById('firstNameErrorMsg');
let lastNameErrorMessage = document.getElementById('lastNameErrorMsg');
let addressErrorMessage = document.getElementById('addressErrorMsg');
let cityErrorMessage = document.getElementById('cityErrorMsg');
let emailErrorMessage = document.getElementById('emailErrorMsg');

/*Ecoute des modifications des champs du formulaire*/

/**********************************Email********************************************/

email.addEventListener("change", function(){
  validEmail(this);
})
/*Création de la fonction validEmail*/
let validEmail = function(inputEmail){
  /*On teste la regExp*/
  let testEmail = regexEmail.test(inputEmail.value);
  /*Si la regExp renvoie true*/
  if (testEmail){
      emailErrorMessage.innerText = "Adresse Email Valide";
  }
  /*Sinon si elle renvoie false*/
  else {
      emailErrorMessage.innerText = "Adresse Email invalide ";
  }
}
/**********************************Adresse********************************************/
address.addEventListener("change", function(){
  validAddress(this);
})
/*Création de la fonction validAdress*/
let validAddress = function(inputAddress){
  /*On teste la regExp*/
  let testAddress = regexAddress.test(inputAddress.value);
  /*Si la regExp renvoie true*/
  if (testAddress){
      addressErrorMessage.innerText = "Adresse valide";
  }
  /*Sinon si elle renvoie false*/
  else{
      addressErrorMessage.innerText = "Les symboles sont interdits"
  }
}
/*********************************Prénom**************************/
firstName.addEventListener("change", function(){
  validFirstName(this);
});
/*Création de la fonction validFirstName*/
let validFirstName = function(inputFirstName){
  /*On teste la regExp*/
  let testFirstName = regexInfos.test(inputFirstName.value);
  /*Si la regExp renvoie true*/
  if(testFirstName){
    firstNameErrorMessage.innerText = "Saisie valide";
  }
  /*Sinon si elle renvoie false*/
  else {
    firstNameErrorMessage.innerText = "Veuillez saisir au minimim 2 lettres. Les chiffres et les symboles sont interdits. ";
  }
}
/*********************************Nom******************************/
lastName.addEventListener("change", function(){
  validLastName(this);
})
/*Création de la fonction validLastName*/
let validLastName = function(inputLastName){
  /*On teste la regExp*/
  let testLastName = regexInfos.test(inputLastName.value);
  /*Si la regExp renvoie true*/
  if(testLastName){
    lastNameErrorMessage.innerText = "Saisie valide";
  }
  /*Sinon si elle renvoie false*/
  else {
    lastNameErrorMessage.innerText = "Veuillez saisir au minimim 2 lettres. Les chiffres et les symboles sont interdits. ";
  }
}
/********************************Ville*************************************/
city.addEventListener("change", function(){
  validCity(this);
})
/*Création de la fonction validLastName*/
let validCity = function(inputCity){
  /*On teste la regExp*/
  let testCity = regexInfos.test(inputCity.value);
  /*Si la regExp renvoie true*/
  if(testCity){
    cityErrorMessage.innerText = "Saisie valide";
  }
  /*Sinon si elle renvoie false*/
  else {
    cityErrorMessage.innerText = "Veuillez saisir au minimim 2 lettres. Les chiffres et les symboles sont interdits. ";
  }
}

/*************************************************************Envoi des informations ******************************/
/*On crée une fonction pour envoyer 2 tableaux au LS ( Les informations de contact et le récapitulatif des produits présents dans le LS)*/
function createElementsToPost(){
    /*Récaptulatif des données saisies dans le formulaire*/
    let contactInfos ={
      fisrtName : firstName.value,
      lastName : lastName.value,
      address : address.value,
      city : city.value,
      email : email.value,
    };
    /*Récupérations des données produits dans le LS*/
    let productsArray = cart;
    /*Déclaration d'un tableau*/
    let cartArray = [];
    /*On boucle pour récupérer tous les produits du LS*/
    for (let i = 0; i< productsArray.length; i++){
        /*Si LS vide (ne renvoie aucune valeur)*/
        if (cartArray.find(p => p === productsArray[i][0])){
            console.log("Le panier est vide");
        }
        /*Sinon on push un tableau en récupérant les données via l'ID*/
        else{
            cartArray.push(productsArray[i].id)
        }
    }
    /*On convertit les 2 tableaux en chaine de caractère */
    let convertDataToJson = JSON.stringify({contactInfos, cartArray});
    /*Et on retourne les données converties*/
    return convertDataToJson;
}
/*On crée l'envoi des informations au click sur le bouton "Commander"*/

let orderButton = document.getElementById('order');

orderButton.addEventListener('click', (e) =>{
  e.preventDefault();

  let dataToSend = createElementsToPost();
  fetch('http://localhost:3000/api/products/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: dataToSend
  })
    .then((response) => response.json())
    .then((finalData)=>{
      if(firstName.value ==="" || lastName.value ==="" || address.value ==="" ||city.value ==="" ||email.value ===""){
        alert("Veuillez renseigner tous les champs du formulaire");
      }
      else{
        localStorage.clear();
        let confirmationPageUrl = "./confirmation.html?id=" + finalData.orderId;
        document.location.href = confirmationPageUrl;
      }
    })
    .catch ((error) => {
      alert("Nous avons rencontré un problème, veuillez réesayer ultérieurement")
    })
      
});








  


  





