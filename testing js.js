/////////////////////////
//gets all the html stuff for use in the loop later
let cards = document.querySelector("div.cards");
let para = document.createElement("p");
/////////////////////////

/////////////////////////
//gets api from online
const URL ="https://iskarr.github.io/austindonovan.github.io/api/business.json";
fetch(URL)
.then((response) => response.json())
.then((jsObject) => {
let business = jsObject.business;
console.log(business)
/////////////////////////

/////////////////////////
// loops over everything and adds everything to html using
for (let i = 0; i < business.length; i++) {
    console.log(business[i].name)


    let card = document.createElement("section");
    card.className = "card";
    document.querySelector("div.cards").appendChild(card);


    let businessName = document.createElement("h2");
    businessName.textContent = business[i].name;
    card.appendChild(businessName);
    businessName.className = "businessName"
    
    let businessAddress = document.createElement("p");
    businessAddress.textContent = business[i].address;
    card.appendChild(businessAddress);
    businessAddress.className = "businessAddress"

    let businessDescription = document.createElement("p");
    businessDescription.textContent = business[i].description;
    card.appendChild(businessDescription);
    businessDescription.className = "businessDescription"

    let img = document.createElement('img');
    img.src = 'https://www.pngall.com/wp-content/uploads/4/Blank-Playing-Card.png';
    card.appendChild(img);
    img.className = "img"
    }
});
/////////////////////////