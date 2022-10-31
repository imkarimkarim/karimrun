import en from "./langs/en.json";
import fa from "./langs/fa.json";

let languages = {};
export let currentLang = "en";

const addLanguage = (lang, obj) => {
  languages[lang] = obj;
};

addLanguage("en", en);
addLanguage("fa", fa);

const domHtmlBasedOnLang = (lang) => {
  if (lang === "fa") {
    document.documentElement.lang = "fa";
    document.documentElement.dir = "rtl";
  } else {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
  }
};

let localLang = localStorage.getItem("lang");
if (localLang) {
  currentLang = localLang;
} else {
  localStorage.setItem("lang", "en");
}

export const switchLang = () => {
  const lang = currentLang == "en" ? "fa" : "en";
  localStorage.setItem("lang", lang);
  currentLang = lang;
  domHtmlBasedOnLang(currentLang);
  window.location.reload();
};

export const msg = (key) => {
  return languages[currentLang][key];
};
domHtmlBasedOnLang(currentLang);
