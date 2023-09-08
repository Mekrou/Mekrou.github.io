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

        const pipeContainer = document.getElementById('pipe-container')
        pipeContainer.appendChild(divElement)
    }

    updatePosition() {
        this.element.style.transform = `translate(${this.xPos}px, ${this.yPos}px)`;
    }

    moveLeftForce() {
        this.xPos -= 50;
        this.updatePosition()
    }
}

Pipe.pipeCount = 0

// Keeps track of our Pipe objects
const pipes = [];


// Start Pipe Generation
setInterval(() => {
    let pipe = new Pipe();
    pipes.push(pipe);

    setInterval(() => {
        pipe.moveLeftForce()
    }, 100)
}, 2500)





// for (let i = 0; i < pipes.length; i++) {
//     window.intervalID = setInterval(() => {
//         console.log(`i is ${i}`)
//         pipes[i].moveLeftForce()   
//     }, 100) 
// }

console.log(`Math.floor(Math.random * 5)`)