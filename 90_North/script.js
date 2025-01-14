const toggleMenu = document.getElementById('toggleMenu');
const leftMenu = document.getElementById('leftMenu');

toggleMenu.addEventListener('click', () => {
    leftMenu.classList.toggle('collapsed');
});

function adjustPageScale() {
    const screenWidth = window.innerWidth;
    let scale = 1;

    if (screenWidth >= 992 && screenWidth <= 1600) {
        scale = 0.9;
    } else if (screenWidth >= 700 && screenWidth <= 767) {
        scale = 0.8;
    } else if (screenWidth >= 600 && screenWidth < 700) {
        scale = 0.75;
    } else if (screenWidth <= 600) {
        scale = 0.5;
    }

    document.body.style.transform = `scale(${scale})`;
    document.body.style.transformOrigin = 'top left';
}

window.addEventListener('resize', adjustPageScale);
window.addEventListener('load', adjustPageScale);
