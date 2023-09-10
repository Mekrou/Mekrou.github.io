import { CollisionObject } from "./CollisionHandler.js";

class Pipe
{
    constructor()
    {
        Pipe.pipeCount++;
        Pipe.createPipeElement()
        
        this.element = document.getElementById(`pipe${Pipe.getPipeCount()}`)
        this.xPos = 0
        this.yPos = 0
    }

    static getPipeCount() {
        return Pipe.pipeCount;
    }

    static createPipeElement() {
        const pipeTemplate = document.getElementById('pipe-template')
        const clone = document.importNode(pipeTemplate.content, true);
        const divElement = clone.querySelector('.pipe-material')
        divElement.id = `pipe${Pipe.getPipeCount()}`

        const pipeContainer = document.getElementsByClassName('background-container')[0]
        pipeContainer.appendChild(divElement)
    }

    updatePosition() {
        this.element.style.transform = `translate(${this.xPos}px, ${this.yPos}px)`;
    }

    applyMoveLeftForce() {
        setInterval(() => {
            this.xPos -= 50;
            this.updatePosition()
        }, 100)
    }

    // Removes the pipe object from the DOM.
    deletePipe() {
       this.element.remove() 
    }
}

const playerElement = document.getElementById('player')
Pipe.pipeCount = 0
let topCollider = new CollisionObject(document.getElementById('top-collider'))
let loseCollider = new CollisionObject(document.getElementById('lose-collider'))
topCollider.CollisionHandler.activateCollision();
loseCollider.CollisionHandler.activateCollision();

// Keeps track of our Pipe objects
const pipes = [];
const player = new Player(playerElement);
const playerController = new PlayerController(player);

document.addEventListener("keydown", function(event) {
    if (event.key === "Space" || event.key === ' ') { 
        playerController.jump(-200)     
    }
});

setInterval(() => { playerController.gravity() }, 100)

// Start Pipe Generation
setInterval(() => {
    let pipe = new Pipe();
    pipes.push(pipe);
    pipe.applyMoveLeftForce();

    let lastPipeIndex = pipes.indexOf(pipe);

    // After 10 seconds, delete pipe element
    setTimeout(() => {
        pipes.splice(lastPipeIndex, 1)
        // Delete object from DOM
        pipe.deletePipe();
    }, 10000)
}, 2500)

// for (let i = 0; i < pipes.length; i++) {
//     window.intervalID = setInterval(() => {
//         console.log(`i is ${i}`)
//         pipes[i].moveLeftForce()   
//     }, 100) 
// }

