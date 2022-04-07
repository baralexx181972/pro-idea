(() => {
    const refs = {
      openMenuBtn: document.querySelector('.button__open'),
      closeMenuBtn: document.querySelector('.button__close'),
      menu: document.querySelector('.mobile__menu'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle('is-open');
    }
  })();

  <p class="about-text__description-bottom">Curabitur lacinia enim at ex blandit, vel pellentesque odio elementum.
  Mauris
  rhoncus orci in imperdiet placerat.
  Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibh, tincidunt.</p>
<p class="about-text__description-under-bottom"> Aliquam erat volutpat. Aenean accumsan.</p> 