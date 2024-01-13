const EN_ELEMENT_LIST = document.querySelectorAll(".english-selector");
const FR_ELEMENT_LIST = document.querySelectorAll(".french-selector");
let langData;

// Call updateContent() on page load
window.addEventListener("DOMContentLoaded", async () => {
  const userPreferredLanguage = localStorage.getItem("language") || "en";
  langData = await fetchLanguageData(userPreferredLanguage);
  hideLanguages(userPreferredLanguage);
  updateContent(langData);
  updateAriaLabel(langData);
  updateAlt(langData);
});

// Function to update content based on selected language
function updateContent(langData) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.innerHTML = langData[key];
  });
}

// Function to update aria label based on selected language
function updateAriaLabel(langData) {
  document.querySelectorAll("[data-labeli18n]").forEach((element) => {
    const key = element.getAttribute("data-labeli18n");
    element.ariaLabel = langData[key];
  });
}

// Function to update aria label based on selected language
function updateAlt(langData) {
  document.querySelectorAll("[data-alti18n]").forEach((element) => {
    const key = element.getAttribute("data-alti18n");
    element.alt = langData[key];
  });
}

// Function to set the language preference
function setLanguagePreference(lang) {
  localStorage.setItem("language", lang);
  location.reload();
}

// Function to fetch language data
async function fetchLanguageData(lang) {
  const response = await fetch(`assets/i18n/${lang}.json`);
  return response.json();
}

// Function to change language
async function changeLanguage(lang) {
  await setLanguagePreference(lang);

  const langData = await fetchLanguageData(lang);
  updateContent(langData);
  updateAriaLabel(langData);
}

function hideLanguages(language) {
  switch (language) {
    case "en":
      EN_ELEMENT_LIST.forEach((el) => {
        el.classList.add("d-none");
      });
      FR_ELEMENT_LIST.forEach((el) => {
        el.classList.remove("d-none");
      });
      break;
    case "fr":
      FR_ELEMENT_LIST.forEach((el) => {
        el.classList.add("d-none");
      });
      EN_ELEMENT_LIST.forEach((el) => {
        el.classList.remove("d-none");
      });
      break;
  }
}
