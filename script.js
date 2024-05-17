const boardSize = 40; // 4x10 board
const snakes = {
    17: 7,
    19: 5,
    21: 9,
    27: 1,
    33: 11,
    37: 3
};
const ladders = {
    3: 22,
    5: 8,
    11: 26,
    20: 29,
    25: 35,
    32: 34
};

let playerPosition = 1;

document.addEventListener('DOMContentLoaded', (event) => {
    const table = document.querySelector('table');
    let isEvenRow = false;
    for (let i = 4; i > 0; i--) {
        const tr = document.createElement('tr');
        for (let j = 1; j <= 10; j++) {
            const td = document.createElement('td');
            const cellNumber = isEvenRow ? i * 10 - (j - 1) : (i - 1) * 10 + j;
            td.textContent = cellNumber;
            td.id = `cell-${cellNumber}`;
            tr.appendChild(td);
        }
        isEvenRow = !isEvenRow;
        table.appendChild(tr);
    }
    updatePlayerPosition();
});

function rollDice() {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    let newPosition = playerPosition + diceRoll;
    if (newPosition > boardSize) newPosition = boardSize - (newPosition - boardSize);
    if (snakes[newPosition]) {
        newPosition = snakes[newPosition];
    } else if (ladders[newPosition]) {
        newPosition = ladders[newPosition];
    }
    playerPosition = newPosition;
    updatePlayerPosition();
    document.getElementById('status').textContent = `You rolled a ${diceRoll} and moved to ${playerPosition}`;
}

function updatePlayerPosition() {
    document.querySelectorAll('td').forEach(cell => cell.classList.remove('player'));
    document.getElementById(`cell-${playerPosition}`).classList.add('player');
}
