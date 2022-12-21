

var miDec = document.getElementsByClassName('quantity-decrement-cart')
var miInc = document.getElementsByClassName('quantity-increment-cart')
var quantityProduct = document.getElementsByClassName('quantity-product');
var ID = document.getElementsByClassName('IDCartProc'); 
for (let i = 0; i < miInc.length; i++) {
     let myI = i;
    miInc[i].onclick = function () {
        var quantity = parseInt(quantityProduct[myI].innerText);
        quantityProduct[myI].innerText = (quantity + 1).toString();
        quantityProduct[myI].style.fontSize = "30px";
        let myID = parseInt(ID[myI].innerText);
        let myQuantity = parseInt(quantityProduct[myI].innerText);
        let d = 1;
    }
}

for (let i = 0; i < miDec.length; i++) {
    let myI = i;
    miDec[i].onclick = function () {
        var quantity = parseInt(quantityProduct[myI].innerText);
        quantityProduct[myI].innerText = (quantity - 1).toString();
        quantityProduct[myI].style.fontSize = "30px";
        let myID = parseInt(ID[myI].innerText);
        let myQuantity = parseInt(quantityProduct[myI].innerText);
        let d = 1;
    }
}

var iv1 = document.getElementsByClassName('item-view-1')[0];
var iv2 = document.getElementsByClassName('item-view-2')[0];
var iv3 = document.getElementsByClassName('item-view-3')[0];

iv1.onclick = function () {
    iv1.style.borderBottom = "3px solid orange";
    iv2.style.border = "none";
    iv3.style.border = "none";
    document.getElementsByClassName('main-view-description')[0].style.display = "block";
    document.getElementsByClassName('main-view-review')[0].style.display = "none";
}
iv2.onclick = function () {
    iv1.style.border = "none";
    iv2.style.borderBottom = "3px solid orange";
    iv3.style.border = "none";

    document.getElementsByClassName('main-view-description')[0].style.display = "none";
    document.getElementsByClassName('main-view-review')[0].style.display = "block";
}
iv3.onclick = function () {
    iv1.style.border = "none";
    iv2.style.border = "none";
    iv3.style.borderBottom = "3px solid orange";
}
function crawDataDetails(id) {
}

let vdes = document.getElementById('view-des');

let vinc = document.getElementById('view-inc');

vdes.onclick = function () {
    let vquantity = parseInt(document.getElementById('view-quantity').innerText);
    if (vquantity < 2) {
        return;
    } else {
        document.getElementById('view-quantity').innerText = vquantity - 1; 
    }
}

vinc.onclick = function () {
    let vquantity = parseInt(document.getElementById('view-quantity').innerText);
    document.getElementById('view-quantity').innerText = vquantity + 1;
    
}

function addCartDetails() {
    let myid = parseInt(document.getElementById('myID-view').innerText);
    let quantityView = parseInt(document.getElementById('view-quantity').innerText);
}
document.getElementsByClassName('info-add')[0].addEventListener('click', addCartDetails)
 