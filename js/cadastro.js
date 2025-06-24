addEventListener("DOMContentLoaded", () => {
    // Check if the elements exist before trying to access innerHTML
    const recebeCep = document.getElementById("recebeCep");
    const recebeCpf = document.getElementById("recebeCpf");

    if (recebeCep) {
        recebeCep.value = localStorage.getItem("cep") || ''; // Use .value for input fields
    }
    if (recebeCpf) {
        recebeCpf.value = localStorage.getItem("cpf") || ''; // Use .value for input fields
    }
});