/*Récupération des informations via url searchParams*/
let params = new URL(window.location.href);
let id = params.searchParams.get('id');

/*Récupération des éléments du DOM*/
let orderNumber = document.getElementById("orderId");
orderNumber.innerText = id;
