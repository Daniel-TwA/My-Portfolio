// GET ELEMENTS FOR ID

const nav = document.getElementById('nav');
const barsNav = document.getElementById('nav-bars');

// SHOW MENÚ RESPONSIVE

const toggleMenu = ()=>{
    return barsNav.addEventListener('click', ()=>{
        nav.classList.toggle('active');
    })
}

toggleMenu()