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
        this.xPos -= 10;
        this.updatePosition()
    }
}

Pipe.pipeCount = 0

// Create an array to hold the pipe objects
const pipes = [];

for (let i = 0; i < 50; i++) {
    let pipe = new Pipe();
    pipes.push(pipe);
}

// // Use a single setInterval to update all pipes' positions
// setInterval(() => {
//     for (let i = 0; i < pipes.length; i++) {
//         pipes[i].moveLeftForce()
//     }
// }, 100);

for (let i = 0; i < pipes.length; i++) {
    setInterval(() => { 
        pipes[i].moveLeftForce()
    }, 100 - Math.floor(Math.random() * 1000))
}