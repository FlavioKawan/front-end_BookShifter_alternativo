const loginContainer = document.getElementById('login-container')

const moveOverlay = () => loginContainer.classList.toggle('move')

document.getElementById('open-register').addEventListener('click', moveOverlay)
document.getElementById('open-login').addEventListener('click', moveOverlay)

document.getElementById('open-register-mobile').addEventListener('click', moveOverlay)
document.getElementById('open-login-mobile').addEventListener('click', moveOverlay)





document.addEventListener('DOMContentLoaded', function() {
    const senhaInput = document.getElementById('senha');
    const btnMostrar = document.getElementById('btn_mostrar');
    const imgMostrar = btnMostrar.querySelector('.olho');
    
    btnMostrar.addEventListener('click', function() {
      if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        imgMostrar.src = 'assets/olho-oculto.png';
        imgMostrar.alt = 'Ocultar Senha';
      } else {
        senhaInput.type = 'password';
        imgMostrar.src = 'assets/olho.png';
        imgMostrar.alt = 'Mostrar Senha';
      }
        });
    });
    