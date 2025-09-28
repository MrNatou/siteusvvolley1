    // Toggle menu
    const menuToggle = document.querySelector('.logo img');
    const menu = document.querySelector('.navdiv ul');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });