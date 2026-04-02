const langButtons = document.querySelectorAll(".lang-btn");

function setLanguage(language){
  localStorage.setItem("language", language);

  // Text content
  document.querySelectorAll("[data-key]").forEach(el=>{
    const key = el.getAttribute("data-key");
    if(translations[language][key]){
      el.textContent = translations[language][key];
    }
  });

  // Placeholders
  document.querySelectorAll("[data-key-placeholder]").forEach(el=>{
    const key = el.getAttribute("data-key-placeholder");
    if(translations[language][key]){
      el.placeholder = translations[language][key];
    }
  });

  // Update active class
  langButtons.forEach(btn => btn.classList.remove("active"));
  document.querySelector(`.lang-btn[data-lang="${language}"]`).classList.add("active");
}

// Add click event
langButtons.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    setLanguage(btn.dataset.lang);
  });
});

// Load saved language or default
const savedLanguage = localStorage.getItem("language") || "en";
setLanguage(savedLanguage);
