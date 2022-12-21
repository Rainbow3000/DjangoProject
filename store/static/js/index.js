

let hour = document.getElementById('Hour');
let day = document.getElementById('Day');
let min = document.getElementById('Min');
let secound = document.getElementById('Second');


let myDay = 7;
let myHour = 16;
let myMin = 1;
let mySecound = 48;

hour.innerHTML = myHour;
day.innerHTML = myDay;
min.innerHTML = myMin;
secound.innerHTML = mySecound;

setInterval(() => {
    mySecound++;
    secound.innerHTML = mySecound;
    if (mySecound == 60) {
        mySecound = 0;
        secound.innerHTML = mySecound;
        myMin--;
        min.innerHTML = myMin;
    }
    if (myMin == 0) {
        myMin = 60;
        min.innerHTML = myMin;
        myHour--;
        hour.innerHTML = myHour;
    }

    if (myHour == 0) {
        myHour = 60;
        hour.innerHTML = myHour
        myDay--;
        day.innerHTML = myDay
    }
    if (day == 0) {
        myDay = 7;
        day.innerHTML = myDay
    }
}, 1000)



const sizeAImage = document.getElementById("myProduct__Discount").clientWidth;

const arrImage = document.getElementsByClassName("Product__discount-item");
let sumSizeImage = sizeAImage * arrImage.length;
let sizeImageDefaul = 950;
let incFashion = 0;
const sliceProductDiscount = document.getElementsByClassName("Product__discount-wrap")[0];
function Come() {
    if (sumSizeImage > sizeImageDefaul) {
        sizeImageDefaul += 190;
        incFashion += 192;
        sliceProductDiscount.style.marginLeft = '-' + incFashion + 'px';
    }
}

function Back() {
    if (incFashion == 0) {
        incFashion = 0;

    } else {
        incFashion -= 192;
        sizeImageDefaul -= 190;
        sliceProductDiscount.style.marginLeft = '-' + incFashion + 'px';
    }
}

document.getElementsByClassName("fa-chevron-right")[0].addEventListener('click', Come)
document.getElementsByClassName("fa-chevron-left")[0].addEventListener('click', Back)


const sizeANav = 205;
const sizeNavContainer = document.getElementById("fs__nav").clientWidth;
const quantityNav = document.getElementsByClassName("fashion__nav-item");
const sliceNav = document.getElementsByClassName("fashion__slice")[0];
const totalSizeNav = sizeANav * (quantityNav.length);
const sizeNavRemaining = totalSizeNav - sizeNavContainer;

let initSizeNav = 0;
function comeNav() {
    if (sizeNavRemaining > initSizeNav) {
        initSizeNav = sizeANav;
        sliceNav.style.marginLeft = '-' + sizeANav + 'px';
    }
}

function backNav() {
    if (initSizeNav === 0) {
        initSizeNav = 0;
    } else {
        initSizeNav -= sizeANav;
        sliceNav.style.marginLeft = initSizeNav + 'px';
    }
}

document.getElementsByClassName("fs__d-one")[0].addEventListener('click', backNav);
document.getElementsByClassName("fs__d-two")[0].addEventListener('click', comeNav);

//sport
const sizeANavSport = 205;
const sizeNavContainerSport = document.getElementById("fs__nav").clientWidth;
const quantityNavSport = document.getElementsByClassName("item__sport");
const sliceNavSport = document.getElementsByClassName("slice__sport")[0];
const totalSizeNavSport = sizeANavSport * (quantityNavSport.length);
const sizeNavRemainingSport = totalSizeNavSport - sizeNavContainerSport;

let initSizeNavSport = 0;
function comeNavSport() {

    if (sizeNavRemainingSport > initSizeNavSport) {
        initSizeNavSport = sizeANavSport;
        sliceNavSport.style.marginLeft = '-' + sizeANavSport + 'px';
    }
}

function backNavSport() {
    if (initSizeNavSport === 0) {
        initSizeNavSport = 0;
    } else {
        initSizeNavSport -= sizeANavSport;
        sliceNavSport.style.marginLeft = initSizeNavSport + 'px';
    }
}

document.getElementsByClassName("fs__d-oneSport")[0].addEventListener('click', comeNavSport);
document.getElementsByClassName("fs__d-twoSport")[0].addEventListener('click', backNavSport);

//Electronics
const sizeANavElectro = 205;
const sizeNavContainerElectro = document.getElementById("electro__nav").clientWidth;
const quantityNavElectro = document.getElementsByClassName("electro__item");
const sliceNavElectro = document.getElementsByClassName("electro__slice")[0];
const totalSizeNavElectro = sizeANavElectro * (quantityNavElectro.length);
const sizeNavRemainingElectro = totalSizeNavElectro - sizeNavContainerElectro;

let initSizeNavElectro = 0;
function comeNavElectro() {
    if (sizeNavRemainingElectro > initSizeNavElectro) {
        initSizeNavElectro = sizeANavElectro;
        sliceNavElectro.style.marginLeft = '-' + sizeANavElectro + 'px';
    }
}

function backNavElectro() {
    if (initSizeNavElectro === 0) {
        initSizeNavElectro = 0;
    } else {
        initSizeNavElectro -= sizeANavElectro;
        sliceNavElectro.style.marginLeft = initSizeNavElectro + 'px';
    }
}

document.getElementsByClassName("direction__electro-left")[0].addEventListener('click', comeNavElectro);
document.getElementsByClassName("direction__electro-right")[0].addEventListener('click', backNavElectro);


const fsTypeOne = document.getElementById("typeOne");
const fsTypeTwo = document.getElementById("typeTwo");
const fsTypeThree = document.getElementById("typeThree");
const fsTypeFour = document.getElementById("typeFour");
const arrowActive = document.getElementsByClassName("fa-caret-up")[0];
function changeType(id) {
    if (id == "fsTypeOne") {
        fsTypeOne.style.borderColor = "orange";
        fsTypeTwo.style.borderColor = "white";
        fsTypeThree.style.borderColor = "white";
        fsTypeFour.style.borderColor = "white";
        fsTypeOne.style.color = "orange";
        fsTypeTwo.style.color = "#333";
        fsTypeThree.style.color = "#333";
        fsTypeFour.style.color = "#333";
        arrowActive.style.left = "45px";
    } else if (id == "fsTypeTwo") {
        fsTypeOne.style.borderColor = "white";
        fsTypeTwo.style.borderColor = "orange";
        fsTypeThree.style.borderColor = "white";
        fsTypeFour.style.borderColor = "white";
        fsTypeTwo.style.color = "orange";
        fsTypeOne.style.color = "#333";
        fsTypeThree.style.color = "#333";
        fsTypeFour.style.color = "#333";
        arrowActive.style.left = "160px";
    } else if (id == "fsTypeThree") {
        fsTypeOne.style.borderColor = "white";
        fsTypeTwo.style.borderColor = "white";
        fsTypeThree.style.borderColor = "orange";
        fsTypeFour.style.borderColor = "white";
        fsTypeThree.style.color = "orange";
        fsTypeOne.style.color = "#333";
        fsTypeTwo.style.color = "#333";
        fsTypeFour.style.color = "#333";
        arrowActive.style.left = "260px";
    } else {
        fsTypeOne.style.borderColor = "white";
        fsTypeTwo.style.borderColor = "white";
        fsTypeThree.style.borderColor = "white";
        fsTypeFour.style.borderColor = "orange";
        fsTypeFour.style.color = "orange";
        fsTypeOne.style.color = "#333";
        fsTypeTwo.style.color = "#333";
        fsTypeThree.style.color = "#333";
        arrowActive.style.left = "380px";
    }
}



const sizeAFsItem = 335;
const heighFashionProduct = 670;
const quantityFashionProduct = document.getElementsByClassName("fashion__main-item");
let quantityFsItem = (quantityFashionProduct.length / 4);
let sizeFsCurrent = 0;
let sizeChange = 0;
if (quantityFsItem % 2 === 0) {
    quantityFsItem = quantityFsItem;
} else {
    quantityFsItem = Math.floor(quantityFsItem + 1);
}

if (quantityFashionProduct.length <= 4) {
    sizeFsCurrent = 335;
} else {
    sizeFsCurrent = sizeAFsItem * quantityFsItem;
}
const sliceFs = document.getElementsByClassName("fashion__main-wrap")[0];

let heightInitFs = 670;
const sizeRemainingFs = sizeFsCurrent - heighFashionProduct;
function fsCome() {
    if (sizeFsCurrent == 335) {
        return;
    }
    if (sizeFsCurrent > heightInitFs) {
        heightInitFs += 335;
        sizeChange += 335;
        sliceFs.style.marginTop = '-' + sizeChange + 'px';
    }
}

function fsBack() {
    if (sizeChange == 0) {
        sizeChange = 0;
    } else {
        heightInitFs -= 335;
        sizeChange -= 335;
        console.log(sizeChange);
        sliceFs.style.marginTop = '-' + sizeChange + 'px';
    }
}


document.getElementById('chevron-down').addEventListener('click', fsCome);
document.getElementById('chevron-up').addEventListener('click', fsBack);

// sport 

const sizeAFsItemSport = 335;
const heighFashionProductSport = 670;
const quantityFashionProductSport = document.getElementsByClassName("sport__main-item");
let sizeFsCurrentSport = 0;
let quantityFsItemSport = (quantityFashionProductSport.length / 4);

if (quantityFsItemSport % 2 === 0) {
    quantityFsItemSport = quantityFsItemSport;
} else {
    quantityFsItemSport = Math.floor(quantityFsItemSport + 1);
}
if (quantityFashionProductSport.length <= 4) {
    sizeFsCurrentSport = 335;
} else {
    sizeFsCurrentSport = sizeAFsItemSport * quantityFsItemSport;
}
const sliceFsSport = document.getElementsByClassName("sport__main-wrap")[0];
let heightInitFsSport = 670;
let incSport = 0;
let decSport = 0;

function fsComeSport() {
    if (sizeFsCurrentSport > heightInitFsSport) {
        incSport += 335;
        heightInitFsSport += 335;
        sliceFsSport.style.marginTop = '-' + incSport + 'px';
    }
}

function fsBackSport() {
    if (incSport == 0) {
        incSport = 0;
        return;
    }
    heightInitFsSport -= 335;
    incSport -= 335;
    sliceFsSport.style.marginTop = - incSport + 'px';
}


document.getElementById('chevron__sport-down').addEventListener('click', fsComeSport);
document.getElementById('chevron__sport-up').addEventListener('click', fsBackSport);

//electronics


const sizeAFsItemElectro = 335;
const heighFashionProductElectro = 670;
const quantityFashionProductElectro = document.getElementsByClassName("electro__main-item");
let sizeFsCurrentElectro = 0;
let quantityFsItemElectro = (quantityFashionProductElectro.length / 4);

if (quantityFsItemElectro % 2 === 0) {
    quantityFsItemElectro = quantityFsItemElectro;
} else {
    quantityFsItemElectro = Math.floor(quantityFsItemElectro + 1);
}
if (quantityFashionProductElectro.length <= 4) {
    sizeFsCurrentElectro = 335;
} else {
    sizeFsCurrentElectro = sizeAFsItemElectro * quantityFsItemElectro;
}
const sliceFsElectro = document.getElementsByClassName("electro__main-wrap")[0];
let heightInitFsElectro = 670;
let incElectro = 0;
let decElectro = 0;

function fsComeElectro() {
    if (sizeFsCurrentElectro > heightInitFsElectro) {
        incElectro += 335;
        heightInitFsElectro += 335;
        sliceFsElectro.style.marginTop = '-' + incElectro + 'px';
    }
}

function fsBackElectro() {
    if (incElectro == 0) {
        incElectro = 0;
        return;
    }
    heightInitFsElectro -= 335;
    incElectro -= 335;
    sliceFsElectro.style.marginTop = - incElectro + 'px';
}


document.getElementById('chevron__electro-down').addEventListener('click', fsComeElectro);
document.getElementById('chevron__electro-up').addEventListener('click', fsBackElectro);




const sizeASlice = 924;

const quantitySlice = document.getElementsByClassName("body__slice-item");

const sumSizeSlice = sizeASlice * quantitySlice.length;

const sizeSliceRemaining = sumSizeSlice - sizeASlice;

const Slice = document.getElementsByClassName("slice__wrap")[0];
let initSizeSile = 924;
let incSizeSlice = 0;
function changeSlice() {
    if (sizeSliceRemaining > initSizeSile) {
        initSizeSile += 924;
        Slice.style.marginLeft = '-' + initSizeSile + 'px';
    } else {
        initSizeSile = 0;
        Slice.style.marginLeft = '-' + initSizeSile + 'px';
    }
}

setInterval(() => {
    changeSlice();
}, 3000)


function quickView() {
    document.getElementsByClassName('overlay')[0].style.display = 'block';
}
function offQuickView() {
    document.getElementsByClassName('overlay')[0].style.display = 'none';
}
var quickViewPR = document.getElementsByClassName('fa-search-plus');

for (let i = 0; i < quickViewPR.length; i++) {
    quickViewPR[i].onclick = quickView;
}

let myIDCart = 0;
function crawData(id) {
    var x = document.getElementsByClassName('discount_' + id)[0];
    var img = x.getElementsByTagName('img')[0].src;
    var urlImage = img.split('/');
    urlImage.splice(0, 3);
    const myUrl = urlImage.join('/');
    document.getElementById("Main__quickImage").src = '/' + myUrl;
    var name = x.getElementsByClassName('discount_ProductName')[0].innerText;
    document.getElementById('Main__quickName').innerHTML = name;
    var price = document.getElementsByClassName('Product__price-des')[0].innerHTML;
    document.getElementById('Main__quickPrice').innerHTML = price;
    var description = x.getElementsByClassName('discountDescription')[0].innerHTML;
    document.getElementsByClassName('Main__quickDescription')[0].innerHTML = description;
    myIDCart = id;
}



document.getElementsByClassName('fa-times')[0].addEventListener('click', offQuickView)



var k = document.getElementById('quantityQuickCurrent'); 
function decrementPR() {
    var x = document.getElementById('quantityQuickCurrent').innerText;
    if (parseInt(x) < 2) {
        return;
    } else {
        k.innerHTML = parseInt(x) - 1;
    }
}

function IncrementPR() {
    var x = document.getElementById('quantityQuickCurrent').innerText;
    k.innerHTML = parseInt(x) + 1;

}
document.getElementsByClassName('fa-minus')[0].addEventListener('click', decrementPR);
document.getElementsByClassName('fa-plus')[0].addEventListener('click', IncrementPR);

var quantityMyAdd = parseInt(document.getElementById('quantityQuickCurrent').innerText);

