/*Récupération des informations via url searchParams*/
let orderId = new URL(window.location.href).searchParams;
let id = orderId.get('orderId');


/*Récupération des éléments du DOM*/
function getOrderNumber(){
    console.log(id);
    let orderNumber = document.getElementById("orderId");
    orderNumber.innerText = id;
    localStorage.clear();
};
getOrderNumber();
