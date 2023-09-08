class PlayerController {
    constructor(player) {
        this.player = player;
    }

    jump(y) {
        this.player.yPos += y;
        this.player.updatePosition();
    }

    gravity() {
        this.player.yPos += 50
        player.updatePosition();
    }
}

class Player {
    constructor() {
        this.xPos = 0;
        this.yPos = 0;
        this.element = document.getElementById('player'); // Assuming you have an element with ID 'player'
    }

    updatePosition() {
        this.element.style.transform = `translate(${this.xPos}px, ${this.yPos}px)`;
    }
}




const player = new Player();
const playerController = new PlayerController(player);

document.addEventListener("keydown", function(event) {
    if (event.key === "Space" || event.key === ' ') { 
        playerController.jump(-200)     
    }
});

setInterval(() => { playerController.gravity() }, 100)

