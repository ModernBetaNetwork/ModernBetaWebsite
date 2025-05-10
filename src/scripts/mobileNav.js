// Mobile navigation functionality
document.addEventListener('DOMContentLoaded', () => {
  const mobileNavBtn = document.getElementById('nav-menu-btn');
  const mobileNavDropdown = document.getElementById('mobile-nav-dropdown');
  const menuBtnImg = mobileNavBtn?.querySelector('img');
  
  if (mobileNavBtn && mobileNavDropdown && menuBtnImg) {
    // Initialize menu as closed
    mobileNavDropdown.style.display = 'none';
    
    // Toggle menu function
    window.togglenav = () => {
      if (mobileNavDropdown.style.display === 'none') {
        // Open menu
        mobileNavDropdown.style.display = 'block';
        menuBtnImg.src = '/images/icons/close_menu.png';
      } else {
        // Close menu
        mobileNavDropdown.style.display = 'none';
        menuBtnImg.src = '/images/icons/open_menu.png';
      }
    };
    
    // Close menu on window resize (if screen becomes desktop size)
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1050) {
        mobileNavDropdown.style.display = 'none';
        menuBtnImg.src = '/images/icons/open_menu.png';
      }
    });
  }
});
