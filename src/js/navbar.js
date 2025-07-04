export function setupMobileMenu() {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("closeBtn");
  const karyaToggle = document.getElementById("karyaToggleMobile");
  const karyaMenu = document.getElementById("karyaMenuMobile");

  if (hamburgerBtn && mobileMenu && closeBtn) {
    hamburgerBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("-translate-x-full");
    });

    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.add("-translate-x-full");
    });

    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
      });
    });

    if (karyaToggle && karyaMenu) {
      karyaToggle.addEventListener("click", () => {
        karyaMenu.classList.toggle("hidden");
      });
    }
  }
}

export function loadNavbar() {
  fetch('/src/components/navbar.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
      setupMobileMenu();
    })
    .catch(err => console.error('Gagal memuat navbar:', err));
}

