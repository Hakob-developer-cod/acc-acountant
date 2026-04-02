document.addEventListener("DOMContentLoaded", () => {
  const langBtns = document.querySelectorAll(".lang-btn");

  function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-key]");
    const placeholders = document.querySelectorAll("[data-key-placeholder]");

    elements.forEach(el => {
      const key = el.getAttribute("data-key");
      if(translations[lang][key]){
        el.textContent = translations[lang][key];
      }
    });

    placeholders.forEach(el => {
      const key = el.getAttribute("data-key-placeholder");
      if(translations[lang][key]){
        el.placeholder = translations[lang][key];
      }
    });

    // ակտիվ կոճակ
    langBtns.forEach(btn => btn.classList.remove("active"));
    document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add("active");
  }

  langBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  // Default language
  setLanguage("en");
});
