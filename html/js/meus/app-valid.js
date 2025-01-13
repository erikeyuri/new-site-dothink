function validarEmail() {
    const email = document.getElementById('email').value;
    // Simulação de verificação no banco de dados
    const emailExiste = false; // Altere para true para simular um e-mail existente

    if (!emailExiste) {
        document.getElementById('mensagem').innerText = 'E-mail não encontrado. Por favor, verifique e tente novamente.';
    } else {
        document.getElementById('mensagem').innerText = '';
        // Redirecionar ou prosseguir com a lógica desejada
    }
}