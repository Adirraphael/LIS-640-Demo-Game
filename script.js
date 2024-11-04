var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function() {
        character.classList.remove("animate");
    }, 700); // Increased jump duration for higher jump
}

var checkDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("Game Over. Try Again!");
    }
}, 10);

function restartGame() {
    // Reset block position and animation
    block.style.display = "block";
    block.style.animation = "block 1s infinite linear";
    alert("Game Restarted!");
}
