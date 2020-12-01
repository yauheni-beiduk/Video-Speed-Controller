const video = document.querySelector('.video'),
    speed = document.querySelector('.speed'),
    speedBar = document.querySelector('.speed-bar')


    function handleMove(e){
        const y = e.pageY - this.offsetTop;
        const percent = y / this.offsetHeight;
        const min = 0.4;
        const max = 5;
        const height = Math.round(percent * 100) + '%' ;
        const playbackRate = percent * (max-min) + min;
        speedBar.style.height = height;
        speedBar.textContent = playbackRate.toFixed(1) + 'x';
        video.playbackRate = playbackRate;
}


let mousedown = false;
speed.addEventListener('click', handleMove);
speed.addEventListener('mousemove', (e) => mousedown && handleMove(e));
speed.addEventListener('mousedown', () => mousedown = true);
speed.addEventListener('mouseup', () => mousedown = false);