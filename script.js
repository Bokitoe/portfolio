let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = '-50px'; // Hide the navbar
      } else {
        // Scrolling up
        navbar.style.top = '0'; // Show the navbar
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Avoid negative values
    });