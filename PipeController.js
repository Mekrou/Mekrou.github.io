const Pipe = {
    xPos: 0,
    yPos: 0,
    gapStart: 0,
    gapEnd: 0,

    updatePosition: function() {
        this.element.style.transform = `translate(${this.xPos}px, ${this.yPos}px)`;
    }
}

const pipeTemplate = document.getElementById('pipe0')
const clone = document.importNode(pipeTemplate.content, true);
clone.

document.body.appendChild(clone)