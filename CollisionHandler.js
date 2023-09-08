let wordOrigin = document.getElementById('spawn-point')

let playerElement = document.getElementById('player')

requestAnimationFrame(function () {
    const playerComputedStyle = getComputedStyle(playerElement)
    
})


let colliderRect = document.getElementById('lose-collider').getBoundingClientRect();
let colliderRectY = colliderRect.y

let debounce = false;

setInterval(()=>{
    let rect = playerElement.getBoundingClientRect();
    rectY = rect.y
    if (Math.abs(colliderRectY - rectY) <= 50)
    {
        if (!debounce)
        {
            // reset the game
                // reset player position
            player.yPos -= player.yPos + 500;
            player.updatePosition()
                // delete all pipes
            let pipeContainer = document.getElementById('pipe-container')
            while (pipeContainer.firstChild) {
                pipeContainer.removeChild(pipeContainer.firstChild);
            }
            alert('GAME OVER!')
                // i tink that's all
            function gameOver() {
                // get player's current Y transform
                
            }
            console.log('collision occurred')
            
            debounce = true;
            // prevent double-collision
            setTimeout(()=>{
                debounce = false;
            }, 1000)
        }

    }
}, 100)