const frm = document.querySelector("form");


frm.addEventListener('submit', (e) => {
    const nome = frm.inNome.value;
    const email = frm.inEmail.value;
    alert("Recebemos sua mensagem, Em breve entraremos em contato!")
    e.preventDefault();
});

frm.addEventListener(`Reset`, (e) =>{
    resp1.innerText = "";
})