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
        

        /*Création de l'évenement au click*/
        button.addEventListener('click', function(){
            let productOptions = {
                couleur: document.getElementById('colors').value,
                quantite: parseInt(document.getElementById('quantity').value), 
                id: id, 
                };
            /*On crée la variable qui récupère le local Storage*/
            let cart = JSON.parse(localStorage.getItem("toAdd"));
            /*On verifie si une couleur est bien selectionée*/
            if (productOptions.couleur ===""){
                alert("Veuillez sélectionner une couleur");    
            }
            /*On verifie que la quantité est bien entre 1 et 100*/
            else if(productOptions.quantite > 100){
                    alert("Vous ne pouvez pas commander plus de 100 articles");
            }
            else if(productOptions.quantite < 1){
                    alert("Veuillez séléctionner un nombre d'articles compris entre 1 et 100")
            }
                else{
                    /*productOptions;*/
                
                /*On verifie si cart existe*/        
                if (cart){
                    /*Puis on a va rechercher les infos d'id et de couleur pour vérifier s'il y a deja un meme produit dans le LS*/
                    let getProducts = cart.find( p => p.id == productOptions.id && p.couleur == productOptions.couleur);
                    /*Si c'est le cas on incrémente la quantité*/
                    if(getProducts){
                        let addNewQuantity = getProducts.quantite + productOptions.quantite;
                        getProducts.quantite = addNewQuantity;
                        /*On envoi les données au LS*/
                        localStorage.setItem("toAdd", JSON.stringify(cart));
                        /*On alerte l'utilisateur que le produit a été ajouté*/
                        alert ("Votre article a bien été ajouté au panier");
                        }
                    /*Sinon on ajoute un nouveau produit au LS*/
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