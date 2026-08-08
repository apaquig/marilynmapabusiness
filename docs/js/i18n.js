// public/js/i18n.js
// Cliente-side i18n Engine for MAPA Business & Financial Services LLC

class LanguageProvider {
  constructor() {
    this.supportedLanguages = ['es', 'en'];
    this.defaultLanguage = 'en';
    this.currentLang = this.detectLanguage();
    this.dictionary = null;
  }

  // Detect browser language or read preference from localStorage
  detectLanguage() {
    try {
      const saved = localStorage.getItem('user-preferred-lang');
      if (saved && this.supportedLanguages.includes(saved)) {
        return saved;
      }
    } catch (e) {
      console.warn('localStorage is not available:', e);
    }

    const browserLangs = navigator.languages || [navigator.language || ''];
    for (const lang of browserLangs) {
      if (lang) {
        const cleanLang = lang.toLowerCase();
        if (cleanLang.startsWith('en')) return 'en';
        if (cleanLang.startsWith('es')) return 'es';
      }
    }
    return this.defaultLanguage;
  }

  // Initialize and translate page on load
  async init() {
    await this.loadTranslations(this.currentLang, false); // Do not save automatically on load
    this.translateDOM();
    this.updateSelectorUI();
    
    // Dispatch global event for custom scripts that might need to reload texts
    document.dispatchEvent(new CustomEvent('langChanged', { detail: this.currentLang }));
  }

  // Load JSON translation file from /locales/
  async loadTranslations(lang, saveToStorage = true) {
    this.currentLang = lang;
    if (saveToStorage) {
      try {
        localStorage.setItem('user-preferred-lang', lang);
      } catch (e) {}
    }

    try {
      const res = await fetch(`/locales/${lang}.json`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      this.dictionary = await res.json();
    } catch (err) {
      console.error('Error loading translation file:', err);
    }
  }

  // Translate all marked elements in the current DOM
  translateDOM() {
    if (!this.dictionary) return;

    const currentCity = window.currentCity || '';

    // Translate standard textContent
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      let val = this.getNestedValue(this.dictionary, key);
      if (val !== null && val !== undefined) {
        if (typeof val === 'string') {
          val = val.replace(/{city}/g, currentCity);
        }
        el.textContent = val;
      }
    });

    // Translate HTML inside element (useful for spans or italic markers inside headers)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      let val = this.getNestedValue(this.dictionary, key);
      if (val !== null && val !== undefined) {
        if (typeof val === 'string') {
          val = val.replace(/{city}/g, currentCity);
        }
        el.innerHTML = val;
      }
    });

    // Translate attributes like placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      let val = this.getNestedValue(this.dictionary, key);
      if (val !== null && val !== undefined) {
        if (typeof val === 'string') {
          val = val.replace(/{city}/g, currentCity);
        }
        el.setAttribute('placeholder', val);
      }
    });
  }

  // Helper to fetch nested objects by path like "hero.slide_notaria.title"
  getNestedValue(obj, keyPath) {
    if (!obj || !keyPath) return null;
    return keyPath.split('.').reduce((prev, curr) => prev ? prev[curr] : null, obj);
  }

  // Triggered manually when clicking selector buttons
  async changeLanguage(lang) {
    if (!this.supportedLanguages.includes(lang)) return;
    if (this.currentLang === lang && this.dictionary) return;

    await this.loadTranslations(lang, true); // Save user preference on manual action
    this.translateDOM();
    this.updateSelectorUI();

    // Dispatch dynamic change event
    document.dispatchEvent(new CustomEvent('langChanged', { detail: lang }));
  }

  // Synchronize language buttons active state
  updateSelectorUI() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isCurrent = btn.getAttribute('data-lang') === this.currentLang;
      btn.classList.toggle('active', isCurrent);
      // Accessibility update
      btn.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');
    });

    // Sync HTML document language tag
    document.documentElement.setAttribute('lang', this.currentLang);
  }
}

// Instantiate and expose globally
window.i18n = new LanguageProvider();

// Start loading translations as soon as the DOM is interactive
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => window.i18n.init());
} else {
  window.i18n.init();
}
