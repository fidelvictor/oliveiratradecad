let firstname;
let lastname;
let email;
let password;
let passwordConfirm;


 
document.getElementById("cadastrar").addEventListener("click", function(event){

    firstname = document.querySelector("#firstname").value
    lastname = document.querySelector("#lastname").value
    email = document.querySelector("#email").value
    password = document.querySelector("#password").value
    passwordConfirm = document.querySelector("#password-confirm").value
   
    if (firstname.length == 0 && lastname.length == 0 && email.length == 0 && password.length == 0 &&  passwordConfirm.length == 0 ) {

        alert('[ERRO] Preencha este campo!');
    
    } if (password != passwordConfirm) {
        
        alert("As senhas não conferem!");
                
    } else {
        
        console.log("Cadastro Realizado com sucesso!");
        console.log(`Firstname ${firstname}`);
        console.log(`Lastname ${lastname}`);
        console.log(`Email ${email}`);
        console.log(`Password ${password}`);

        alert('Cadastro realizado com sucesso!') 
        window.location.href = "/login.html";
    }
    
    event.preventDefault()
});
