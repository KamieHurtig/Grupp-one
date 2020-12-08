var PersonObj = [
    {
        username: "Mumtaz",
        password:"mumtaz1000"
    },
    {
        username: "customer",
        password:"password123"
    }
]

function checkFunction () {
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;
for(i=0; i<PersonObj.length; i++){
    if(username == PersonObj[i].username && password == PersonObj[i].password){
console.log(username + " is logged in!!!");
showCard();
return
    }}
     alert("Incorrect user name or password!");
}

function showCard(){
   alert("Welcome!!");
}