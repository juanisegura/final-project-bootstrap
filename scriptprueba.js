let menu = document.querySelector('.menu');
let flag = false;
let contador = 0;

const navChange = () => {
  const nav = document.querySelector("nav");
  const threshold = window.innerHeight * 0.35;
  
  if (window.scrollY > threshold) {
    nav.classList.add("fondoNav");
  } else {
    nav.classList.remove("fondoNav");
  }
}

const imagenes = document.querySelectorAll('#cajaimagenes img');
const soltarElements = document.querySelectorAll('[id^="cajasoltar"]');

const getRandomIndex = () => {
  return Math.floor(Math.random() * imagenes.length);
}

imagenes.forEach((imagen) => {
  imagen.addEventListener('dragstart', (e) => {
    elemento = e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
  }, false);
});

soltarElements.forEach((soltar) => {
  soltar.addEventListener('dragenter', (e) => {
    e.preventDefault();
  }, false);
  soltar.addEventListener('dragover', (e) => {
    e.preventDefault();
  }, false);
  soltar.addEventListener('drop', async (e) => {
    e.preventDefault();
    console.log(e);
    let id = e.dataTransfer.getData('Text');
    let imagen = document.getElementById(id);
    imagen.style.display = 'none';
    
    let randomIndex = getRandomIndex();
    let randomImagen = imagenes[randomIndex];
    
    e.target.innerHTML = `<img src="${randomImagen.src}" height="400px" width="275px">`;
    contador++;
  }, false);
});

function reinicio() {
  window.location.reload();
}

iniciar();

//window.addEventListener('load', iniciar, false);