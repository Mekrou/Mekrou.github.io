class PlayerController {
    constructor(playerObject) {
        this.player = playerObject;
    }

    jump(y) {
        this.player.yPos += y;
        this.player.updatePosition();
    }

    gravity() {
        this.player.yPos += 50
        this.player.updatePosition();
    }
}

class Player {
    constructor(playerElement) {
        this.xPos = 0;
        this.yPos = 0;
        this.element = playerElement; 
    }

    updatePosition() {
        this.element.style.transform = `translate(${this.xPos}px, ${this.yPos}px)`;
    }
}