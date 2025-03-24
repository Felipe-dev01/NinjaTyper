'allow pasting'
function escreverEmClasseMui(classe, texto) {
    let campos = document.getElementsByClassName(classe);

    if (campos.length > 0) {
        for (let campo of campos) {
            campo.focus(); // Garante que o campo esteja ativo

            let event = new Event('input', { bubbles: true });
            let nativeInputValueSetter = Object.getOwnPropertyDescriptor(
                window.HTMLTextAreaElement.prototype, "value"
            ).set;

            nativeInputValueSetter.call(campo, texto); // Define o valor corretamente
            campo.dispatchEvent(event); // Dispara o evento de entrada para React/MUI

            console.log(`Texto inserido no campo da classe: "${classe}"`);
        }
    } else {
        console.log("Nenhum campo encontrado com essa classe!");
    }
}

// Exemplo de uso:
escreverEmClasseMui("MuiInputBase-input", `coloque o texto aqui`);
