const languageSelect = document.getElementById("languageSelect");

function setLanguage(language){

localStorage.setItem("language", language);

document.querySelectorAll("[data-key]").forEach(element =>{

const key = element.getAttribute("data-key");

element.textContent = translations[language][key];

});

}

languageSelect.addEventListener("change", e=>{
setLanguage(e.target.value);
});

const savedLanguage = localStorage.getItem("language") || "en";

languageSelect.value = savedLanguage;

setLanguage(savedLanguage);
