const personagens = document.querySelectorAll('.personagem');
personagens.forEach((personagem) => {
    personagem.addEventListener ('click', () => {
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')

        const personagemGrande = document.querySelector('.personagem-grande')
        const idPersonagem = personagem.attributes.id.value;
        personagemGrande.src = (`images/big-${idPersonagem}.png`)

        const nomePersonagem = document.getElementById('nome-personagem')
        nomePersonagem.innerText = personagem.getAttribute('data-name')

        const descricaoPersonagem = document.getElementById('descricao-personagem')
        descricaoPersonagem.innerText = personagem.getAttribute('data-descricao')

        const verMais = document.getElementById('read-more')
        verMais.href

    })
})