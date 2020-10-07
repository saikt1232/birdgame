


document.addEventListener('DOMContentLoaded', () => {
    // see why these are not working in the domcontentloaded

    let bird = document.querySelector('.bird')
    let start = document.querySelector('.start')
    let stop = document.querySelector('.stop')
    let birdBottom
    let birdLeft
    let startTimerId;

    start.addEventListener('click', function () { 
         birdBottom = 0;
         birdLeft = 0;      
       
        startTimerId = setInterval(() => {
            if(birdLeft>600 || document.getElementsByClassName('bird-reverse').length)  {
                console.log('down');
                bird.classList.add('bird-reverse');
                birdLeft -= 3;
                birdBottom -= 3;
                if(birdLeft===0){
                    bird.classList.remove('bird-reverse');
                }
            } else {    
                console.log('up');
                birdLeft += 3;
                birdBottom += 3;
            }
            bird.style.bottom = birdBottom + 'px';
            bird.style.left = birdLeft + 'px';
            bird.style.bottom = birdBottom + 'px';
            bird.style.left = birdLeft + 'px';
        }, 20)
    })

    stop.addEventListener('click', function () {
        console.log('stop');
        bird.style.bottom = 0
        bird.style.left = 0
        clearInterval(startTimerId);
    })

})

