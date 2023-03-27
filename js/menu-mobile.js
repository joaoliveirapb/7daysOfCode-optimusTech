const buttonMenuShow = document.querySelector('#button-menu-show');

function menuShow() {
  const mobileMenu = document.querySelector('.mobile-menu');

  if(mobileMenu.classList.contains('open')) {
    mobileMenu.classList.remove('open');
    document.querySelector('#button-menu-show img').src = './images/menu_white_36dp.svg';
  } else {
    mobileMenu.classList.add('open');
    document.querySelector('#button-menu-show img').src = './images/close_white_36dp.svg';
  }
}

buttonMenuShow.addEventListener('click', menuShow);