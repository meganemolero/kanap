let params = new URLSearchParams (windows.location.search);
let id = params.get ('id');
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

        let elemOption = document.createElement('option');
        elemOption.value = product.colors;
        elemOption.innerText = product.colors;

        let colors = document.getElementById('colors')
        colors.appendChild = elemOption;

    })
    .catch((error) => console.log("erreur 404"+ error));
