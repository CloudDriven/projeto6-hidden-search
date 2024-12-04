/* Este código implementa a funcionalidade de alternar um estado de "ativo" num elemento de
busca de página quando um botão é clicado.*/
/*

1. Seleciona os elementos da DOM:
search: um elemento com a classe .search
btn: um elemento com a classe btn (o botão) 
input: um campo de entrada com a classe .input */
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

/* 2. Adiciona um evento de clique ao botão:
Quando o botão é clicado:
A classe active é alternada no elemento search (ativa ou desativa o estilo associado).
O foco é colocado no campo de entrada (input) */
btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})

