/**
 * ========================================================
 * SKRIP INTERAKTIF WEBSITE PAMERAN DTP - CLOUD ENGINEER
 * Stack: Pure Vanilla JavaScript (Clean, Modern & Responsive)
 * ========================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------
  // 1. MOBILE MENU DRAWER / DROPDOWN
  // --------------------------------------------------------
  const btnToggleMobile = document.getElementById('btnToggleMobile');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const hamburgerIcon = document.getElementById('hamburgerIcon');
  const closeMenuIcon = document.getElementById('closeMenuIcon');

  function toggleMobileMenu() {
    if (!mobileMenu) return;
    const isHidden = mobileMenu.classList.contains('menu-hidden');
    if (isHidden) {
      mobileMenu.classList.remove('menu-hidden');
      mobileMenu.classList.add('menu-visible');
      if (hamburgerIcon) hamburgerIcon.classList.add('hidden');
      if (closeMenuIcon) closeMenuIcon.classList.remove('hidden');
    } else {
      closeMobileMenu();
    }
  }

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('menu-hidden');
    mobileMenu.classList.remove('menu-visible');
    if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
    if (closeMenuIcon) closeMenuIcon.classList.add('hidden');
  }

  if (btnToggleMobile) {
    btnToggleMobile.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });
  }

  // Tutup menu mobile ketika link ditekan
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Tutup menu mobile jika klik di luar
  document.addEventListener('click', (e) => {
    if (mobileMenu && !mobileMenu.contains(e.target) && btnToggleMobile && !btnToggleMobile.contains(e.target)) {
      closeMobileMenu();
    }
  });

  // --------------------------------------------------------
  // 2. FILTER TABS PADA SECTION KURIKULUM & MATERI
  // --------------------------------------------------------
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Ubah status active tab styling
      filterButtons.forEach(btn => {
        btn.classList.remove('active-tab');
        btn.classList.add('text-slate-600');
      });
      button.classList.add('active-tab');
      button.classList.remove('text-slate-600');

      const selectedCategory = button.getAttribute('data-category');

      // Tampilkan atau sembunyikan kartu dengan transisi halus
      skillCards.forEach(card => {
        const cardType = card.getAttribute('data-type');
        if (selectedCategory === 'all' || cardType === selectedCategory) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // --------------------------------------------------------
  // 3. FAQ ACCORDION (TANYA JAWAB STAND)
  // --------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-btn');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    btn.addEventListener('click', () => {
      const isExpanded = !content.classList.contains('hidden');

      // Tutup accordion lain agar rapi
      faqItems.forEach(otherItem => {
        otherItem.querySelector('.faq-content').classList.add('hidden');
        otherItem.querySelector('.faq-icon').textContent = '+';
        otherItem.classList.remove('border-sky-300', 'bg-sky-50/20');
      });

      if (!isExpanded) {
        content.classList.remove('hidden');
        icon.textContent = '−';
        item.classList.add('border-sky-300', 'bg-sky-50/20');
      }
    });
  });

  // --------------------------------------------------------
  // 4. MODAL MINI GAME STAND ("Cloud Catcher")
  // --------------------------------------------------------
  const gameModal = document.getElementById('gameModal');
  const btnOpenGame = document.getElementById('btnOpenGame');
  const btnOpenGameMobile = document.getElementById('btnOpenGameMobile');
  const btnOpenGameBanner = document.getElementById('btnOpenGameBanner');
  const btnCloseGame = document.getElementById('btnCloseGame');
  const gameFrame = document.getElementById('gameFrame');
  const gamePath = 'Cloud Catcher – CLOUDHUB (1).html';

  function openGame() {
    if (gameModal && gameFrame) {
      gameFrame.src = encodeURI(gamePath);
      gameModal.classList.remove('hidden');
      gameModal.classList.add('flex');
      document.body.style.overflow = 'hidden'; // Mencegah background scroll
      closeMobileMenu();
    }
  }

  function closeGame() {
    if (gameModal && gameFrame) {
      gameModal.classList.add('hidden');
      gameModal.classList.remove('flex');
      gameFrame.src = 'about:blank'; // Hentikan game loop
      document.body.style.overflow = '';
    }
  }

  if (btnOpenGame) btnOpenGame.addEventListener('click', openGame);
  if (btnOpenGameMobile) btnOpenGameMobile.addEventListener('click', openGame);
  if (btnOpenGameBanner) btnOpenGameBanner.addEventListener('click', openGame);
  if (btnCloseGame) btnCloseGame.addEventListener('click', closeGame);

  // Tutup modal jika klik di luar box
  if (gameModal) {
    gameModal.addEventListener('click', (e) => {
      if (e.target === gameModal) {
        closeGame();
      }
    });
  }

  // Tutup modal dengan tombol Escape keyboard
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && gameModal && !gameModal.classList.contains('hidden')) {
      closeGame();
    }
  });

  console.log('✅ Website Pameran DTP Cloud Engineer aktif & 100% responsif!');
});
