let params = new URL(window.location.href);
let id = params.searchParams.get('id');
let url = 'http://localhost:3000/api/products/' + id;


fetch(url)
    .then(function(reponse) {
        if(reponse.ok){
            return reponse.json();
        }
    })
    .then(function(product){
        
        let items = document.getElementById('title');
        items.innerHTML = product.name;

        let price = document.getElementById('price');
        price.innerHTML = product.price;

        let description = document.getElementById('description');
        description.innerHTML = product.description;

        for(let color of product.colors){
            let elemOption = document.createElement('option');
            elemOption.value = color;
            elemOption.innerText = color;
            let colors = document.getElementById('colors');
            colors.appendChild(elemOption); 
        };
    })

    /*Données utiles pour la récupération dans le local storage à savoir quantité et couleur*/

    let productColor = document.querySelector("#colors");
    let productQuantity = document.querySelector("#quantity");
    let productId = id;
    

    /*Création du tableau rassemblant les données à récupérer*/

    let productOptions = [productId, productQuantity, productColor];

    /*Création de la variable qui gère le bouton*/

    let button = document.querySelector("#addToCart");

    /*Création de l'évenement au click du bouton*/

    button.addEventListener('click', addToCart);

    /*Création de la fonction d'ajout au panier*/

    function addToCart(){
        localStorage.setItem("ToAdd", JSON.stringify(productOptions))
    };
    
    

    
    
    
    
   
    

   

    
    

    


    /*
    .catch((error) => console.log("erreur 404"+ error));
    */