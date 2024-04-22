// Seletores para os elementos do DOM
const minutesE1 = document.querySelector("#minutes");
const secondsE1 = document.querySelector("#seconds");
const millisecondsE1 = document.querySelector("#milliseconds");

const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

// Verificação de botões e associação de eventos
if (startBtn) {
    startBtn.addEventListener("click", startTimer);
}

if (pauseBtn) {
    pauseBtn.addEventListener("click", pauseTimer);
}

if (resumeBtn) {
    resumeBtn.addEventListener("click", resumeTimer);
}

if (resetBtn) {
    resetBtn.addEventListener("click", resetTimer);
}

// Variáveis do cronômetro
let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

// Função para iniciar o cronômetro
function startTimer() {
    interval = setInterval(() => {
        if (!isPaused) {
            milliseconds += 10;

            if (milliseconds >= 1000) {
                seconds++;
                milliseconds = 0;
            }

            if (seconds >= 60) {
                minutes++;
                seconds = 0;
            }

            // Atualiza o conteúdo dos elementos do cronômetro
            minutesE1.textContent = formatTime(minutes);
            secondsE1.textContent = formatTime(seconds);
            millisecondsE1.textContent = formatMilliseconds(milliseconds);
        }
    }, 10);

    // Controla a exibição dos botões
    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

// Função para pausar o cronômetro
function pauseTimer() {
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

// Função para retomar o cronômetro
function resumeTimer() {
    isPaused = false;
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

// Função para redefinir o cronômetro
function resetTimer() {
    isPaused = false;
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    // Atualiza os elementos do cronômetro
    minutesE1.textContent = "00";
    secondsE1.textContent = "00";
    millisecondsE1.textContent = "000";

    // Controla a exibição dos botões
    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
}

// Funções de formatação para os minutos, segundos e milissegundos
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}
