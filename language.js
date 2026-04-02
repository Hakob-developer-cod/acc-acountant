const langButtons = document.querySelectorAll('.lang-btn');
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    translatePage(lang);
  });
});

function translatePage(lang) {
  const elements = document.querySelectorAll('[data-key]');
  elements.forEach(el => {
    const key = el.getAttribute('data-key');
    if(translations[lang][key]) el.textContent = translations[lang][key];
  });
  
  const placeholders = document.querySelectorAll('[data-key-placeholder]');
  placeholders.forEach(el => {
    const key = el.getAttribute('data-key-placeholder');
    if(translations[lang][key]) el.placeholder = translations[lang][key];
  });
}
