const frm = document.querySelector("form");
//const resp1 = document.querySelector("#resposta1");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = frm.inEmail.value;
    const senha = Number(frm.inPassword.value);

    if(email == "fulanodetal@email.com" && senha == 12345678){
        alert("Login realizado com sucesso!");
        alert("Bem vindo Fulano!");
        
    
    } else{
       alert("Usuário ou senha incorretos!");
       
}});
