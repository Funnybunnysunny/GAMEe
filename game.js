const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 800;
canvas.height = 600;

// Player variables
const playerWidth = 50;
const playerHeight = 30; // Make the player box shorter
let playerX = (canvas.width - playerWidth) / 2; // Start in the middle horizontally
let playerY = (canvas.height - playerHeight) / 2; // Start in the middle vertically
let playerSpeed = 5;

// Draw player function
function drawPlayer() {
  ctx.fillStyle = 'lime';
  ctx.fillRect(playerX, playerY, playerWidth, playerHeight); // Drawing a shorter rectangle for the player
}

// Listen for keypress events
window.addEventListener('keydown', movePlayer);

function movePlayer(event) {
  if (event.key === 'ArrowLeft') {
    playerX -= playerSpeed; // Move left
  } else if (event.key === 'ArrowRight') {
    playerX += playerSpeed; // Move right
  } else if (event.key === 'ArrowUp') {
    playerY -= playerSpeed; // Move
