const moreMenuBtn = document.querySelector('.more-button');

const showMenu = function() {
   const moreMenuDiv = document.querySelector('.more-menu');
    moreMenuDiv.classList.toggle('hidden');

}

moreMenuBtn.addEventListener('click', showMenu);