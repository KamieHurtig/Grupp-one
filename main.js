
//Selects all the buy buttons
let cards = document.querySelectorAll('.buy-btn');

//The different products that is available
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


//Loop to count how many items there is and adding the event for clicking the buttons
for (let i=0; i < cards.length; i++) {
    cards[i].addEventListener('click', () => {
        cartNumbers(products[i]);
    })
}

//To make sure the number by the cart stays after refreshing the page
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if( productNumbers ) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
    
}

//The function that's retrieving/storing data 
function cartNumbers(products) {
   
    //Counts how many items is stored
    let productNumbers = localStorage.getItem('cartNumbers');

    //Transforms the data into numbers
    productNumbers = parseInt(productNumbers);

     /*Stores the data on the webpage (prevents it from disappearing when people refresh the page so the data stays in the cart), but also checks if there is data allready stored. Updates the number with the list-item named "cart" in the header
    */

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    
    setitems(product);
}

function setItems(product) {

    product.incart = 1;

    let cartItems = {
        [product.tag]: product
    }

    localStorage.setItem('productsInCart', )
}

//Running the function
onLoadCartNumbers();