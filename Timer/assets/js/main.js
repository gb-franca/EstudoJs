function main(){ 
    const timer = document.querySelector('.relogio');
    const startButton = document.querySelector('.iniciar');
    const pauseButton = document.querySelector('.pausar');
    const resetButton = document.querySelector('.zerar');

    let seconds = 0;
    let timerInterval;

    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600); 
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    function starTime() {
        if (timerInterval) return;
        timer.style.color = 'black';
        timerInterval = setInterval(() => {
            seconds++;
            timer.textContent = formatTime(seconds);} , 1000);
        }

    function pauseTime() {
       clearInterval(timerInterval);
        timerInterval = null; 
        timer.style.color = 'red';
        timer.style.transition = 'color 0.5s ease-in-out';
    }

    function resetTime() {
        clearInterval(timerInterval);
        timerInterval = null;
        seconds = 0;
        timer.textContent = '00:00:00';
        timer.style.color = 'black';
    }

    startButton.addEventListener('click', starTime);
    pauseButton.addEventListener('click', pauseTime);
    resetButton.addEventListener('click', resetTime);
}

main();