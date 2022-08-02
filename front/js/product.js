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
        }

        let button = document.querySelector("#addToCart");
        button.addEventListener('click', function(){



    let productOptions = {
        couleur: document.getElementById('colors').value,
        quantite: parseInt(document.getElementById('quantity').value), 
        id: id, 
        };
    let cart = JSON.parse(localStorage.getItem("toAdd"));

    /*function addToCart(){
        cart = [];
        cart.push(productOptions);
        localStorage.setItem("ToAdd", JSON.stringify(cart))
    };*/
    })   
})
    

    
    
    
    
   
    

   

    
    

    


    /*
    .catch((error) => console.log("erreur 404"+ error));
    */