var pass = 50;       // Pass mark
var score = 75;      // Current score 
var mag;             // Message

// Select message to write based on score 
if (score > pass) 
{
	msg = 'Congradulations, you passed!';
} else 
{
	msg = 'Have another go!'
}
var el = document.getElementById ('answer');
el.textContent = msg;
