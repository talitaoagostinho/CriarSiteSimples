'use strict'

function changeTheme() {
    document.body.classList.toggle('dark-theme');

    const btn = document.querySelector('.btn'); 

    if (document.body.classList.contains('dark-theme')) {
        btn.textContent = 'Claro'; 
    } else {
        btn.textContent = 'Escuro'; 
    }
}