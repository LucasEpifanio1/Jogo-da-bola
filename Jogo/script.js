
const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');
let score = 0;


function moveBall() {
    const gameContainer = document.getElementById('game-container');
    const containerWidth = gameContainer.clientWidth;
    const containerHeight = gameContainer.clientHeight;

    const newX = Math.random() * (containerWidth - 50); 
    const newY = Math.random() * (containerHeight - 50);

    ball.style.left = `${newX}px`;
    ball.style.top = `${newY}px`;
}


ball.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;


    ball.style.transform = 'scale(1.2)';
    setTimeout(() => ball.style.transform = 'scale(1)', 200);

    moveBall();
});


moveBall();
