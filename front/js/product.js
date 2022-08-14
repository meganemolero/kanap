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
        /*Fonction qui crée les objets à stocker dans le local Storage*/
        let productOptions = {
            couleur: document.getElementById('colors').value,
            quantite: parseInt(document.getElementById('quantity').value), 
            id: id, 
            };

        /*Création de l'évenement au click*/
        button.addEventListener('click', function(){
            if (productOptions.couleur ===""){
                alert("Veuillez sélectionner une couleur");    
            }
                else if(productOptions.quantite > 100){
                    alert("Il n'est pas possible de commander plus de 100 produits par commande");
                }
            else{
                productOptions;
                /*On crée la variable qui récupère le local Storage*/
                let cart = JSON.parse(localStorage.getItem("toAdd"));
                /*Si cart existe alors push en tableau et transfère les données au local Storage*/        
                if (cart){
                    let getProducts = cart.find( cart =>(cart.id === productOptions.id && cart.color === productOptions.couleur));
                    if(cart && getProducts !==undefined){
                        let addNewQuantity = productOptions.quantite + parseInt(/*nouvelle quantité*/);
                        localStorage.setItem("toAdd", JSON.stringify(cart));
                        }
                    else{
                        cart.push(productOptions);
                        localStorage.setItem("toAdd", JSON.stringify(cart));
                        }
                /*Sinon on crée un tableau vide qu'on transfère au local Storage*/     
                }else{
                cart =[];
                cart.push(productOptions);  
                localStorage.setItem("toAdd", JSON.stringify(cart)); 
                }

            }
        })
    })


    

    
    
    
    
   
    

   

    
    

    


    /*
    .catch((error) => console.log("erreur 404"+ error));
    */