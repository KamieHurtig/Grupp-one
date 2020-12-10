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
alert(username + " is logged in!!!");
updateCards();
return
    }}
     alert("Incorrect user name or password!");
}

function updateCards(){
    var btn = document.getElementById('card-update');
    btn.style.display="block";
}
//Card update system

  const inpKey = document.querySelector("#cardKey");
      const inpValue = document.querySelector("#cardInput");
      const btnInsert = document.querySelector("#btnInsert");
      const cardOutput = document.querySelector(".cardOutput");

      btnInsert.onclick = function () {
        const key = inpKey.value;
        const value = inpValue.value;

        if (key && value) {
          localStorage.setItem(key, value);
          location.reload();
        }
      };

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        cardOutput.innerHTML += `${key} : ${value} <br />`;
      }