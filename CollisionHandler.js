export class CollisionHandler {
    constructor(CollisionObject) {
        this.collisionElement = CollisionObject.collisionElement
    }

    activateCollision() {
        setInterval(() => {
            let playerRectY = window.player.getBoundingClientRect().y;
            let colliderRectY = this.collisionElement.getBoundingClientRect().y;

            let distanceBetweenPlayerAndCollider = Math.abs(colliderRectY - playerRectY)

            if (distanceBetweenPlayerAndCollider <= 50)
            {
    	        console.log("collision occurred!");
            }
        }, 100)
    }
}

export class CollisionObject {
    constructor(collisionElement) {
        this.collisionElement = collisionElement;
        this.CollisionHandler = new CollisionHandler(this);
    }


}
//     let rect = playerElement.getBoundingClientRect();
//     rectY = rect.y
//     if (Math.abs(colliderRectY - rectY) <= 50)
//     {
//         if (!debounce)
//         {
//             // reset the game
//                 // reset player position
//             player.yPos -= player.yPos + 500;
//             player.updatePosition()
//                 // delete all pipes
//             let pipeContainer = document.getElementById('pipe-container')
//             while (pipeContainer.firstChild) {
//                 pipeContainer.removeChild(pipeContainer.firstChild);
//             }
//             alert('GAME OVER!')
//                 // i tink that's all
//             function gameOver() {
//                 // get player's current Y transform
                
//             }
//             console.log('collision occurred')
            
//             debounce = true;
//             // prevent double-collision
//             setTimeout(()=>{
//                 debounce = false;
//             }, 1000)
//         }

//     }
// }, 100)

