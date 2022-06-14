const navBarToggler = document.querySelector('#btn');
const toggledMenu =document.querySelector('#collapse-menu');
// const rule = document.querySelector('#rule')

navBarToggler.addEventListener('click', (e) => {
    if (toggledMenu.style.display === 'none') {
        toggledMenu.style.display = 'block';
    } else {
        toggledMenu.style.display = 'none';
    }
});

