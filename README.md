# Ninja Typer 🥷💨

Este projeto contém um script JavaScript que permite preencher automaticamente campos de entrada (inputs) de formulários em páginas da web, especialmente aqueles gerenciados pelo **Material-UI (MUI)**, sem que o valor seja apagado ao clicar no campo.

## 🚀 Funcionalidade
- Insere texto em campos de entrada que utilizam **classes do MUI**.
- Simula eventos do React/MUI para evitar que o valor seja apagado ao interagir com o campo.
- Atualiza corretamente o estado interno do input, garantindo que o React detecte a mudança.

## 📜 Código
```js
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

// Execute no console do navegador:
escreverEmClasseMui("MuiInputBase-input", "Meu novo texto!");
```

## 🛠 Como Usar
1. **Abra o console do navegador** (pressione `F12` e vá para a aba "Console").
2. **Copie e cole o código acima** no console e pressione `Enter`.
3. **Chame a função** substituindo a classe correta:
   ```js
   escreverEmClasseMui("MuiInputBase-input", "Texto de teste!");
   ```
   
   Se for um **campo multilinha**, experimente:
   ```js
   escreverEmClasseMui("MuiInputBase-inputMultiline", "Texto multilinha aqui!");
   ```

## 🔍 Como Funciona?
✅ **Usa `Object.getOwnPropertyDescriptor().set`** → Para definir o valor de maneira que o React/MUI reconheça.
✅ **Dispara `dispatchEvent(new Event('input', { bubbles: true }))`** → Para forçar a atualização do estado do React.
✅ **Foca no campo (`focus()`) antes da alteração** → Para evitar resets inesperados.

## 🏆 Benefícios
✔️ Funciona mesmo com **Material-UI e React**.  
✔️ O valor não é apagado ao clicar no campo.  
✔️ Fácil de usar e adaptar para diferentes sites.  

## 📌 Notas
- O seletor usado (`getElementsByClassName`) depende das classes usadas no site.
- Se necessário, use `querySelector` para um seletor mais específico.

---
📢 **Contribuições são bem-vindas!** Caso tenha sugestões ou melhorias, sinta-se à vontade para abrir uma _issue_ ou _pull request_. 🎉

