  // Temp credetials
const user = "user@oliveiratrade.com";
const pass = "admin123";  



document.getElementById("acessar").addEventListener("click", function(event){

    email = document.querySelector("#email").value
    password = document.querySelector("#password").value

    if(email === user && password === pass) {
        window.location.href = "/sucessful.html";
        console.log("Go to page");
    } 
    else {
        alert("Usuário ou senha inválido!");
        document.querySelector("#email").value = ""
        document.querySelector("#password").value = ""
       
    }

    event.preventDefault()
  });