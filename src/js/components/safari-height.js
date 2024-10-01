function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

if (isSafari()) {
  function updateMenuHeight() {
    const navMenu = document.querySelector('.nav.menu--active');
    if (navMenu) {
      navMenu.style.height = `${window.innerHeight - 100}px`;
    }
  }

  window.addEventListener('resize', updateMenuHeight);

  const burgerButton = document.querySelector('.burger');
  burgerButton.addEventListener('click', function() {
    setTimeout(updateMenuHeight, 0);
  });
}
