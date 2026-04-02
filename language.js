const langButtons = document.querySelectorAll('.lang-btn');

function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-key]');
  const placeholders = document.querySelectorAll('[data-key-placeholder]');
  
  elements.forEach(el => {
    const key = el.getAttribute('data-key');
    if(translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  placeholders.forEach(el => {
    const key = el.getAttribute('data-key-placeholder');
    if(translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Highlight active button
  langButtons.forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');
}

// Default language
setLanguage('en');

// Add click events
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedLang = btn.getAttribute('data-lang');
    setLanguage(selectedLang);
  });
});
