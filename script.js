document.getElementById('editButton').addEventListener('click', function() {
    // Conteúdo HTML a ser exibido na nova aba
    const newTabContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nova Aba</title>
        </head>
        <body>
            <h1>Conteúdo Editável</h1>
            <textarea id="editor" rows="10" cols="50">Você pode editar este texto.</textarea>
        </body>
        </html>
    `;

    // Abre uma nova aba e insere o conteúdo HTML
    const newTab = window.open();
    newTab.document.open();
    newTab.document.write(newTabContent);
    newTab.document.close();
});

// script.js
function validarFormulario() {
    const nomeResponsavel = document.getElementById("nomeResponsavel").value;
    const nomeCrianca = document.getElementById("nomeCrianca").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
    const mensagem = document.getElementById("mensagem");

    // Limpa a mensagem de erro
    mensagem.textContent = "";

    // Verifica se todos os campos estão preenchidos
    if (nomeResponsavel === "" || nomeCrianca === "" || email === "" || senha === "" || confirmarSenha === "") {
        mensagem.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) {
        mensagem.textContent = "As senhas não coincidem.";
        return;
    }

    // Verifica se a senha tem pelo menos 6 caracteres
    if (senha.length < 6) {
        mensagem.textContent = "A senha deve ter pelo menos 6 caracteres.";
        return;
    }

    // Simulação de envio com mensagem de sucesso
    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.style.color = "green";
}

// Script para alterar o texto do balão de fala
const fala = document.querySelector('.fala p');
const frases = [
  "Oi, como você está?",
  "Eu sou um mascote animado!",
  "Vamos nos divertir juntos!",
  "Eu adoro flutuar por aqui!"
];

setInterval(() => {
  const randomIndex = Math.floor(Math.random() * frases.length);
  fala.textContent = frases[randomIndex]; // Altera o conteúdo da fala
}, 3000); // Muda a frase a cada 3 segundos



function checkAnswer(element, isCorrect) {
    const feedback = document.getElementById("feedback");

    if (isCorrect) {
        feedback.textContent = "Parabéns! Você acertou!";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "Ops! Essa não é a resposta certa.";
        feedback.className = "feedback incorrect";
    }

    feedback.style.display = "block";

    // Adiciona borda verde/vermelha à alternativa escolhida
    document.querySelectorAll(".option").forEach(option => {
        option.style.pointerEvents = "none"; // Impede novas escolhas
    });
    element.style.borderColor = isCorrect ? "green" : "red";
}
