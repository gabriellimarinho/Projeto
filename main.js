let temporizadorID;
let temporizadorEmAndamento = false;

function atualizarTemporizador(temporizadorID, horaTerminoData) {
    const agora = new Date();
    const diferenca = horaTerminoData - agora;

  
    if (diferenca <= 0) {
        clearInterval(temporizadorID); 
        document.getElementById('contador').innerText = "Tempo encerrado!";
        temporizadorEmAndamento = false;
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  
    document.getElementById('contador').innerText = `${dias}d ${horas.toString().padStart(2, '0')}h ${minutos.toString().padStart(2, '0')}m ${segundos.toString().padStart(2, '0')}s`;
}


function iniciarTemporizador(botaoID) {
  
    if (temporizadorEmAndamento) {
        return;
    }

    temporizadorEmAndamento = true;


    const horaTerminoInput = document.getElementById('hora-termino').value;
    const horaTerminoData = new Date(horaTerminoInput);
  
    
    temporizadorID = setInterval(() => atualizarTemporizador(temporizadorID, horaTerminoData), 1000);
}

function pararTemporizador() {
    clearInterval(temporizadorID); 
    document.getElementById('contador').innerText = "Temporizador parado";
    temporizadorEmAndamento = false;
}

document.getElementById('iniciar-temporizador-alura').addEventListener('click', () => iniciarTemporizador('iniciar-temporizador-alura'));
document.getElementById('iniciar-temporizador-javascript').addEventListener('click', () => iniciarTemporizador('iniciar-temporizador-javascript'));
document.getElementById('iniciar-temporizador-portfolio').addEventListener('click', () => iniciarTemporizador('iniciar-temporizador-portfolio'));
document.getElementById('iniciar-temporizador-curriculo').addEventListener('click', () => iniciarTemporizador('iniciar-temporizador-curriculo'));

document.getElementById('parar-temporizador').addEventListener('click', pararTemporizador);
