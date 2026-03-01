const deBtn = document.getElementById("lang-de");
const enBtn = document.getElementById("lang-en");

function applyLang(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-de]").forEach((el) => {
    const val = el.getAttribute(lang === "de" ? "data-de" : "data-en");
    if (val) el.textContent = val;
  });

  if (lang === "de") {
    deBtn.classList.add("is-active");
    enBtn.classList.remove("is-active");
  } else {
    enBtn.classList.add("is-active");
    deBtn.classList.remove("is-active");
  }

  localStorage.setItem("lang", lang);
}

deBtn?.addEventListener("click", () => applyLang("de"));
enBtn?.addEventListener("click", () => applyLang("en"));

// init
const saved = localStorage.getItem("lang");
applyLang(saved === "en" ? "en" : "de");
