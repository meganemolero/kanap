/*Récupération des informations via url searchParams*/
let params = new URL(window.location.href);
let id = params.searchParams.get('orderId');

/*Récupération des éléments du DOM*/
function getOrderNumber(){
let orderNumber = document.getElementById("orderId");
orderNumber.innerText = id;

localStorage.clear();
};
getOrderNumber();
