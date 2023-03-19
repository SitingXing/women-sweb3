var menuItems = document.querySelectorAll('.float-menu p a');

window.addEventListener('scroll', function() {
    var currentPosition = window.pageYOffset;
    if (currentPosition < 812) {
        menuItems.forEach(function(item) {
          item.classList.remove('active');
        });
        menuItems[0].classList.add('active');
      }
    if (currentPosition >= 812) {
      menuItems.forEach(function(item) {
        item.classList.remove('active');
      });
      menuItems[1].classList.add('active');
    }
    if (currentPosition >= 1200) {
        menuItems.forEach(function(item) {
          item.classList.remove('active');
        });
        menuItems[2].classList.add('active');
    }
    if (currentPosition >= 1700) {
        menuItems.forEach(function(item) {
          item.classList.remove('active');
        });
        menuItems[3].classList.add('active');
    }
});