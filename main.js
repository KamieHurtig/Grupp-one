
//Selects all the buy buttons
let cards = document.querySelectorAll('.buy-btn');

//"let products" is right now just info for later to map out what needs to be added
let products = [
    {
        name: 'Julgran',
        tag: 'julgran',
        price: 150,
        inCart: 0
    },
    {
        name: 'Julstjärna',
        tag: 'julstjärna',
        price: 50,
        inCart: 0
    },
    {
        name: 'Julkrans',
        tag: 'Julkrans',
        price: 99,
        inCart: 0
    },
    {
        name: 'Juldekoration',
        tag: 'Juldekoration',
        price: 100,
        inCart: 0
    }
];


//Loop to count how many items ("cards") there is and adding the event for clicking the buttons
for (let i=0; i < cards.length; i++) {
    cards[i].addEventListener('click', () => {
        cardNumbers();
    })
}

//To make sure the number by the cart stays after refreshing the page
function onLoadCardNumbers() {
    let productNumbers = window.localStorage.getItem('cardnumbers');

    if( productNumbers ) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
    
}

//The function that's retrieving/storing data 
function cardNumbers() {
   
    //Counts how many items is stored
    let productNumbers = window.localStorage.getItem('cardnumbers');

    //Transforms the data into numbers
    productNumbers = parseInt(productNumbers);
   
    /*Stores the data on the webpage (prevents it from disappearing when people refresh the page so the data stays in the cart)
    */
    window.localStorage.setItem('cardNumbers', 1);

    //Updates the number with the list-item named "cart" in the header
    document.querySelector('.cart span').textContent = 1;
}

//Running the function
onLoadCardNumbers();