// Obtém os elementos do DOM com os IDs 'horas', 'minutos' e 'segundos'
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

// Define um intervalo que executa a função a cada 1000 milissegundos (ou seja, a cada segundo)
const relogio = setInterval(function() {
    // Cria um novo objeto Date que contém a data e hora atuais
    let dateToday = new Date();
    // Obtém a hora atual
    let hr = dateToday.getHours();
    // Obtém os minutos atuais
    let min = dateToday.getMinutes();
    // Obtém os segundos atuais
    let s = dateToday.getSeconds();

    // Se a hora for menor que 10, adiciona um '0' na frente. Caso contrário, mantém a hora como está.
    hr = hr < 10 ? '0' + hr : hr;
    // Se os minutos forem menores que 10, adiciona um '0' na frente. Caso contrário, mantém os minutos como estão.
    min = min < 10 ? '0' + min : min;
    // Se os segundos forem menores que 10, adiciona um '0' na frente. Caso contrário, mantém os segundos como estão.
    s = s < 10 ? '0' + s : s;

    // Define o conteúdo de texto do elemento 'horas' para a hora atual
    horas.textContent = hr;
    // Define o conteúdo de texto do elemento 'minutos' para os minutos atuais
    minutos.textContent = min;
    // Define o conteúdo de texto do elemento 'segundos' para os segundos atuais
    segundos.textContent = s;
}, 1000);
