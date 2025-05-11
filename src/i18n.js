// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          heading: "Enter your text below",
          upper: "Convert To Uppercase",
          lower: "Convert To Lowercase",
          erase: "Erase All Text",
          capfirst: "Capitalize First Letter",
          summary: "Text Summary",
          words: "Words",
          characters: "Characters",
          preview: "Preview",
        }
      },
      hi: {
        translation: {
          heading: "अपना टेक्स्ट नीचे दर्ज करें",
          upper: "बड़े अक्षर में बदलें",
          lower: "छोटे अक्षर में बदलें",
          erase: "सभी टेक्स्ट मिटाएं",
          capfirst: "पहला अक्षर बड़ा करें",
          summary: "टेक्स्ट सारांश",
          words: "शब्द",
          characters: "अक्षर",
          preview: "पूर्वावलोकन",
        }
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
