let timer = document.querySelector('.timer'),
    startPause = document.querySelector('#start-pause'),
    stop = document.querySelector('#stop'),
    status = true,
    x,
    interval;

const audio = new Audio("https://cdn.freesound.org/previews/542/542825_3377875-lq.mp3");
// audio.loop = false;

window.addEventListener('click', ch);
function ch(event) {
  if (event.target.closest('#start-pause') && status === true) {
    status = false;    
    startPause.textContent = 'Pause';
    interval = setInterval(() => {
      x = timer.value;
      if (x > 0) {
        x--;
        timer.value = x;        
      }
      else if (x <= 0) {
        audio.play();
        clearInterval(interval)
      }
    }, 1000)
  }
  else if (event.target.closest('#start-pause') && status === false) {
    status = true;
    startPause.textContent = 'Start';
    clearInterval(interval);
    // audio.play()
  }
  else if (event.target.closest('#stop')) {
    timer.value = 500;
    startPause.textContent = 'Start';    
    clearInterval(interval);    
    status = true;
    audio.play()
  }
}