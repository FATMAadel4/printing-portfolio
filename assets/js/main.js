 (function () {

  // Year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Language toggle
  const toggle = document.getElementById('langToggle');
  const html = document.documentElement;
  const arEls = document.querySelectorAll('.lang.ar');
  const enEls = document.querySelectorAll('.lang.en');
  let isArabic = html.getAttribute('lang') === 'ar';
  function setLang(ar) {
    isArabic = ar;
    arEls.forEach(el => el.classList.toggle('d-none', !ar));
    enEls.forEach(el => el.classList.toggle('d-none', ar));
    html.dir = ar ? 'rtl' : 'ltr';
    html.lang = ar ? 'ar' : 'en';
  }
  if (toggle) {
    toggle.addEventListener('click', () => setLang(!isArabic));
    setLang(isArabic);
  }

  // Portfolio toggle
  const categories = document.querySelectorAll('.category');
  categories.forEach(cat => {
    const targetId = cat.dataset.target;
    const target = document.getElementById(targetId);
    target.classList.remove('show');

    cat.addEventListener('click', () => {
      const isShown = target.classList.contains('show');
      document.querySelectorAll('.gallery-grid').forEach(g => g.classList.remove('show'));
      if (!isShown) {
        target.classList.add('show');
      }
    });
  });

  // Render gallery without description, full-size images
  function renderGallery(containerId, folder, count) {
    const container = document.getElementById(containerId);
    if (!container) return;

    for (let i = 1; i <= count; i++) {
      const jpgPath = `assets/images/${folder}/${folder}${i}.jpg`;
      const jpegPath = `assets/images/${folder}/${folder}${i}.jpeg`;
      const img = document.createElement('img');
      img.src = jpgPath;
      img.onerror = () => img.src = jpegPath;
      img.alt = folder + ' ' + i;
      img.className = 'gallery-img'; // استخدمنا كلاس واحد للصور
      container.appendChild(img);
    }
  }

  renderGallery("mugs-gallery", "mugs", 55);
  renderGallery("plates-gallery", "plates", 10);
  renderGallery("cups-gallery", "cups", 22);
  renderGallery("pens-gallery", "pens", 2);
  renderGallery("glass-gallery", "glass", 16);

})();
