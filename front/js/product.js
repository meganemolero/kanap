/*Mise en place de URL Search Params pour récupérer l'id du produit correspondant*/
let params = new URL(window.location.href);
let id = params.searchParams.get('id');
let url = 'http://localhost:3000/api/products/' + id;

/*Fetch pour se connecter à l'API*/
fetch(url)
    .then(function(reponse) {
        if(reponse.ok){
            return reponse.json();
        }
    })
    /*Fonction qui récupère les différentes caractéristiques des produits*/
    .then(function(product){
        
        let items = document.getElementById('title');
        items.innerHTML = product.name;

        let price = document.getElementById('price');
        price.innerHTML = product.price;

        let description = document.getElementById('description');
        description.innerHTML = product.description;
        /*Boucle pour récupérer les listes de couleurs associées aux différents produits*/
        for(let color of product.colors){
            let elemOption = document.createElement('option');
            elemOption.value = color;
            elemOption.innerText = color;
            let colors = document.getElementById('colors');
            colors.appendChild(elemOption); 
        }
        /*Création de la variable qui gère le bouton "ajouter au panier"*/
        let button = document.querySelector("#addToCart");
        /*Création de l'évenement au click*/
        button.addEventListener('click', function(){
        /*Fonction qui crée les objets à stocker dans le local Storage*/
        let productOptions = {
        couleur: document.getElementById('colors').value,
        quantite: parseInt(document.getElementById('quantity').value), 
        id: id, 
        };
        /*Création du tableau - Parse pour traiter l'objet*/
        /*Possibilité d'ajouter plusieurs articles*/
        let cart = localStorage.getItem("toAdd");
        if (cart ===null){
            cart = []   
        }else{
            cart = JSON.parse(localStorage.getItem("toAdd"));
            cart = [];
            cart.push(productOptions);  
            /*Envoi des valeurs dans le local Storage*/
            localStorage.setItem("ToAdd", JSON.stringify(cart))
        }
        
            
        })
    })


    

    
    
    
    
   
    

   

    
    

    


    /*
    .catch((error) => console.log("erreur 404"+ error));
    */