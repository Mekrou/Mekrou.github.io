const player = document.querySelector('.Player')
const screenHeight = window.innerHeight

player.style.transform = 'translate(0vh, 0vh)'

function jump() 
{
//    orig_top = rect.top;
//    orig_bot = rect.bottom;

    let transform = player.style.transform;
    let translateYPos = getTranslateYPos(transform);
    targetY = translateYPos - 70;
    if (targetY < screenHeight)
    {
        player.style.transform = `translate(0, ${targetY}vh`;
    }
    else 
    {

    }

//    player.style.left = orig_top + 50 + 'px';
//    rect.bottom = orig_bot + 10 + 'px';
}

function getTranslateYPos(transform)
{
    const regex = /(\d*\.?\d+)vh/g;
    try {
        return parseInt(regex.exec(transform)[1])
    } catch (TypeError) {
        return '0'
    }
}

function movePlayer(number_of_pixels)
{
    console.log('movePlayer ran');
    rect = player.getBoundingClientRect();
    player.style.left = rect.left + number_of_pixels + "px";
}

jump_button = document.getElementById('jump');
jump_button.addEventListener('click', function () { jump() });

function gravity()
{
    target = getTranslateYPos(player.style.transform) + 1
    if (target > 35)
    {

    } 
    else
    {
        player.style.transform = `translate(0, ${target}vh)`
    }   
}

setInterval(gravity, 10)