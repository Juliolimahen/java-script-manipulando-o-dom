const robotron = document.querySelector('#robotron');

robotron.addEventListener("click", (evento) => { console.log(evento) });

//Função Nomeada
//Vantagem: Por estar nomeada eu posso a chamar mais vezes
//Função Anônima só é usada no gatilho quando é declarada
function dizOi(nome) {
    console.log(`${nome}, já chegou o disco voador!`);
}