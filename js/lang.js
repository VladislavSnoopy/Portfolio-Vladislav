const translations = {
  en: {
    greeting: "Hello!",
    title: "I'm a 3D Character Artist",
    subtitle: "Creating lifelike, detailed 3D characters for games, animation, and metaverses",
    about_btn: "About Me",
    portfolio_btn: "Portfolio",
    contact_btn: "Contact Me",
    page_header: "3D Character Artist",
    back_home: "← Home",
    about_title: "About Me",
    about_text1: "Hello! My name is Vladislav. I specialize in creating highly detailed 3D characters: modeling, sculpting, retopology, texturing, rigging, and rendering.",
    about_text2: "I work with Blender • ZBrush • Substance Painter • Marvelous Designer • Unreal Engine • Unity.",
    about_text3: "Experience: 3 years. I love stylized and realistic characters, fantasy, sci-fi, and everything in between.",
    skills_title: "Skills",
    portfolio_title: "Portfolio",
    contact_title: "Contact"
  },
  ru: {
    greeting: "Привет!",
    title: "Я 3D-художник по персонажам",
    subtitle: "Создаю живых, детализированных 3D-персонажей для игр, анимации и метавселенных",
    about_btn: "Обо мне",
    portfolio_btn: "Портфолио",
    contact_btn: "Написать мне",
    page_header: "3D-художник по персонажам",
    back_home: "← На главную",
    about_title: "Обо мне",
    about_text1: "Привет! Меня зовут Владислав. Я специализируюсь на создании высокодетализированных 3D-персонажей: моделирование, скульптинг, ретопология, текстурирование, риггинг и рендер.",
    about_text2: "Работаю в Blender • ZBrush • Substance Painter • Marvelous Designer • Unreal Engine • Unity435.",
    about_text3: "Опыт — 3 лет. Люблю стилизованных и реалистичных персонажей, фэнтези, sci-fi и всё между ними.",
    skills_title: "Навыки",
    portfolio_title: "Портфолио",
    contact_title: "Связаться"
  },
  fr: {
    greeting: "Bonjour !",
    title: "Je suis artiste 3D de personnages",
    subtitle: "Je crée des personnages 3D vivants et détaillés pour les jeux vidéo, l’animation et les métavers",
    about_btn: "À propos",
    portfolio_btn: "Portfolio",
    contact_btn: "M’écrire",
    page_header: "Artiste 3D Personnages",
    back_home: "← Accueil",
    about_title: "À propos de moi",
    about_text1: "Bonjour ! Je m’appelle Vladislav. Je me spécialise dans la création de personnages 3D hautement détaillés : modélisation, sculpture digitale, retopologie, texturage, rigging et rendu.",
    about_text2: "J’utilise Blender • ZBrush • Substance Painter • Marvelous Designer • Unreal Engine • Unity.",
    about_text3: "Expérience : 3 ans. J’adore les personnages stylisés et réalistes, fantasy, sci-fi et tout ce qui se trouve entre les deux.",
    skills_title: "Compétences",
    portfolio_title: "Portfolio",
    contact_title: "Contact"
  },
  de: {
    greeting: "Hallo!",
    title: "Ich bin 3D Character Artist",
    subtitle: "Ich erstelle lebendige, detaillierte Charaktere für Spiele, Animation und Metaversen",
    about_btn: "Über mich",
    portfolio_btn: "Portfolio",
    contact_btn: "Schreib mir",
    page_header: "3D Character Artist",
    back_home: "← Startseite",
    about_title: "Über mich",
    about_text1: "Hallo! Mein Name ist Vladislav. Ich spezialisiere mich auf hochdetaillierte 3D-Charaktere: Modeling, Sculpting, Retopologie, Texturing, Rigging und Rendering.",
    about_text2: "Ich arbeite mit Blender • ZBrush • Substance Painter • Marvelous Designer • Unreal Engine • Unity.",
    about_text3: "Erfahrung: 3 Jahre. Ich liebe stilisierte und realistische Charaktere, Fantasy, Sci-Fi und alles dazwischen.",
    skills_title: "Fähigkeiten",
    portfolio_title: "Portfolio",
    contact_title: "Kontakt"
  }
};

const switchLanguage = (lang) => {
  localStorage.setItem('language', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });

  const isAbout = location.pathname.includes('about.html');
  document.title = isAbout ? translations[lang].about_page_title || "About Me — 3D Character Artist" 
                            : translations[lang].index_page_title || "3D Character Artist";
};

document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('lang-switch');
  if (!select) return;

  const savedLang = localStorage.getItem('language') || 'en';
  select.value = savedLang;
  switchLanguage(savedLang);
});

document.getElementById('lang-switch')?.addEventListener('change', (e) => switchLanguage(e.target.value));  