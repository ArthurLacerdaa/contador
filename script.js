const textarea = document.getElementById('texto');
const contagem = document.getElementById('contagem');
const botaoColar = document.getElementById('colar');
const botaoLimpar = document.getElementById('limpar');


const atualizarContagem = () => {
    contagem.textContent = textarea.value.length;
};


textarea.addEventListener('input', atualizarContagem);

botaoColar.addEventListener('click', async () => {
    try {
        const text = await navigator.clipboard.readText();
        textarea.value = text;
        atualizarContagem(); 
    } catch (err) {
        console.error('Erro ao colar: ', err);
    }
});


botaoLimpar.addEventListener('click', () => {
    textarea.value = '';
    atualizarContagem(); 
});
