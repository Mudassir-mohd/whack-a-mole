const holes = document.querySelectorAll('.hole');
const scoreBoard = document.getElementById('score');
let score = 0;


function randomHole() {
    const index = Math.floor(Math.random() * holes.length);
    return holes[index];
}

function showMole() {
    const hole = randomHole();

    const mole = document.createElement('div');
    mole.classList.add('mole');

    hole.appendChild(mole);

    mole.addEventListener('click', () => {
        score++;
        scoreBoard.textContent = score;
        mole.remove();
    });

    setTimeout(() => {
        mole.remove();
    }, 1000);
}

function startGame() {
    setInterval(showMole, 1800);
}

startGame();