const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const nome = frm.inNome.value
    const nasci = Number(frm.inNasc.value)
    const telefone = Number(frm.inTel.value)
    resp1.innerText = `Recebemos o seu contato em breve você será atendido por um de nossos agentes.`
})

frm.addEventListener("reset", (e) =>{
    resp1.innerHTML = ``
})