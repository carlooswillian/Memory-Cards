document.getElementById("message-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const keyword = document.getElementById("keyword").value;
    
    // Verifica se a palavra-chave está correta
    if (keyword === "palavra-secreta") {
        const message = localStorage.getItem("message");
        document.getElementById("message-output").innerText = message ? message : "Nenhuma mensagem disponível para esta data.";
    } else {
        alert("Palavra-chave incorreta!");
    }
});

document.getElementById("add-message-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const keyword = document.getElementById("add-keyword").value;
    const date = document.getElementById("date").value;
    const newMessage = document.getElementById("new-message").value;

    // Verifica se a palavra-chave está correta
    if (keyword === "palavra-secreta") {
        localStorage.setItem("message", newMessage);
        alert("Mensagem adicionada com sucesso!");
    } else {
        alert("Palavra-chave incorreta!");
    }
});
