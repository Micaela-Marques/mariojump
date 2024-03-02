const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');



const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 800);
};

const loop = () => {
    setInterval(() => {
      const pipePosition = pipe.offsetLeft;
      const marioBottom = parseFloat(window.getComputedStyle(mario).bottom);
      const marioHeight = parseFloat(window.getComputedStyle(mario).height);
  
      if (pipePosition <= 120 && pipePosition > 0 && marioBottom < 80) {
        pipe.classList.remove('pipe-animation');
        pipe.style.left = `${pipePosition}px`;
  
        mario.classList.remove('jump');
        mario.style.bottom = `${marioBottom}px`;
  
        mario.src = '../assets/game-over.png';
        mario.style.width = '80px';
        mario.style.marginLeft = '50px';
  
        clearInterval(loopInterval); 
      }
    }, 10);
  };
  
  const loopInterval = loop(); 
  

document.addEventListener('keypress', e => {
  const tecla = e.key;
  if (tecla === ' ') {
    jump();
  }
});

document.addEventListener('touchstart', e => {
  if (e.touches.length) {
    jump();
  }
});


