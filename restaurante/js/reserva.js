const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp")
const resp2 = document.querySelector("#resp2")
const resp3 = document.querySelector("#resp3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const nome = frm.inNome.value
    const end = frm.inEnd.value
    const tel = Number(frm.inTel.value)
    const pagamento = frm.inDebito.checked
    
    if(pagamento)
        resp2.innerText = `Forma de pagamento selecionado: Débito.`

    else{
        resp2.innerText =`Forma de pagamento selecionado: Crédito`
    }
    
    resp1.innerText = `Pedido Confirmado!`
    resp3.innerText = `Nome: ${nome} \n Endereço: ${end}\n Tel: ${tel}`
    
})


frm.addEventListener("reset",() =>{
    resp1.innerText=""
    resp2.innerText=""
    resp3.innerText=""
})