    const gallerySwiper = new Swiper('.gallery-swiper', {
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    const testimonialsSwiper = new Swiper('.testimonials-swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    new Typed('#typed', {
      strings: ['Ваш дом в сосновом лесу^1000', 'Ваш участок у озера^1000', 'Ваша загородная жизнь^1000'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });

    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const icon = themeToggle.querySelector('i');
      if (document.documentElement.classList.contains('dark')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        icon.classList.replace('text-gray-700', 'text-yellow-300');
      } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        icon.classList.replace('text-yellow-300', 'text-gray-700');
      }
      
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('darkMode', isDark);
    });

    if (localStorage.getItem('darkMode') === 'true') {
      document.documentElement.classList.add('dark');
      const icon = themeToggle.querySelector('i');
      icon.classList.replace('fa-moon', 'fa-sun');
      icon.classList.replace('text-gray-700', 'text-yellow-300');
    }

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modal-close');
    const plotButtons = document.querySelectorAll('.plot-card button');
    
    plotButtons.forEach(button => {
      button.addEventListener('click', () => {
        const plotTitle = button.closest('.plot-card').querySelector('h3').textContent;
        document.getElementById('modal-plot').value = plotTitle;
        modal.classList.remove('hidden');
      });
    });

    modalClose.addEventListener('click', () => {
      modal.classList.add('hidden');
    });

    const filterButtons = document.querySelectorAll('.filter-btn');
    const showAllPlotsBtn = document.getElementById('show-all-plots');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => {
          btn.classList.remove('active', 'bg-primary-600', 'text-white');
          btn.classList.add('bg-gray-200', 'dark:bg-gray-700');
        });
        
        button.classList.add('active', 'bg-primary-600', 'text-white');
        button.classList.remove('bg-gray-200', 'dark:bg-gray-700');
        
        const filter = button.dataset.filter;
        const plotCards = document.querySelectorAll('.plot-card');
        let visibleCount = 0;
        
        plotCards.forEach(card => {
          if (filter === 'all' || 
              card.dataset.size === filter || 
              card.dataset.location === filter) {
            card.classList.remove('hidden');
            visibleCount++;
          } else {
            card.classList.add('hidden');
          }
        });
        
        if (filter !== 'all') {
          showAllPlotsBtn.classList.remove('hidden');
        } else {
          showAllPlotsBtn.classList.add('hidden');
        }
      });
    });

    showAllPlotsBtn.addEventListener('click', () => {
      const plotCards = document.querySelectorAll('.plot-card');
      plotCards.forEach(card => card.classList.remove('hidden'));
      showAllPlotsBtn.classList.add('hidden');
      
      filterButtons.forEach(btn => {
        btn.classList.remove('active', 'bg-primary-600', 'text-white');
        btn.classList.add('bg-gray-200', 'dark:bg-gray-700');
      });
      document.querySelector('.filter-btn[data-filter="all"]').classList.add('active', 'bg-primary-600', 'text-white');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
          mobileMenu.classList.add('hidden');
        }
      });
    });

    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (window.scrollY > 100) {
        header.classList.add('bg-white/95', 'dark:bg-dark-800/95');
        header.classList.remove('glass');
      } else {
        header.classList.remove('bg-white/95', 'dark:bg-dark-800/95');
        header.classList.add('glass');
      }
    });


        tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: {
              50: '#f0fdf4',
              100: '#dcfce7',
              200: '#bbf7d0',
              300: '#86efac',
              400: '#4ade80',
              500: '#22c55e',
              600: '#16a34a',
              700: '#15803d',
              800: '#166534',
              900: '#14532d',
            },
            dark: {
              700: '#1e293b',
              800: '#1a2e35',
              900: '#0f172a',
            }
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            display: ['Montserrat', 'sans-serif'],
          },
        }
      }
    }