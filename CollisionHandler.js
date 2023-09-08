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
            console.log(player.yPos)
            // reset the game
                // reset player position
                // delete all pipes
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