const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 800;
canvas.height = 600;

// Player variables
let playerX = canvas.width / 2;
let playerY = canvas.height - 30;
let playerSpeed = 5;

// Draw player function
function drawPlayer() {
  ctx.fillStyle = 'lime';
  ctx.fillRect(playerX, playerY, 50, 50); // Drawing a simple square for player
}

// Listen for keypress events
window.addEventListener('keydown', movePlayer);

function movePlayer(event) {
  if (event.key === 'ArrowLeft') {
    playerX -= playerSpeed; // Move left
  } else if (event.key === 'ArrowRight') {
    playerX += playerSpeed; // Move right
  } else if (event.key === 'ArrowUp') {
    playerY -= playerSpeed; // Move up
  } else if (event.key === 'ArrowDown') {
    playerY += playerSpeed; // Move down
  }
}

// Game loop
function gameLoop() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the player
  drawPlayer();

  // Call game loop again
  requestAnimationFrame(gameLoop);
}

// Start the game
gameLoop();
