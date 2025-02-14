const navChange = () => {
    const nav = document.querySelector("nav");
    const threshold = window.innerHeight * 0.5;
    
    if (window.scrollY > threshold) {
      nav.classList.add("fondoNav");
    } else {
      nav.classList.remove("fondoNav");
    }
  }