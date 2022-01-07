let reproducir = false;
let bongo0 = new Audio("sounds/bongo0.mp3");
let bongo1 = new Audio("sounds/bongo1.mp3");


function resumeAudio () {
    if (!reproducir) {
      reproducir = true;
      bongo0.play();
    }
  }


  function resumeAudio2 () {
    if (!reproducir) {
      reproducir = true;
      bongo1.play();
    }
  }

function pauseAudio () {
    if (reproducir) {
      reproducir = false;
      bongo0.pause();
    }
  }
  function teclado(objeto) {
    var tecla = objeto.which;
    var num;
  
    switch (tecla) {
        case 65: //m
          resumeAudio();
          break;
        case 68: //n
          pauseAudio();
          break;
          case 79: //b
          resumeAudio2();
          break;
        
    }
  
  }
  
  document.addEventListener('keydown', teclado, false);