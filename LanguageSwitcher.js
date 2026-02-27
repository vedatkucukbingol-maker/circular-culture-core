// Circular Culture - Language Switcher Component
import React, { useState } from 'react';

const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState('en');

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', label: 'Español', flag: '🇪🇸' }
  ];

  return (
    <div className="flex space-x-4 p-4 bg-white shadow-md rounded-lg">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setCurrentLang(lang.code)}
          className={`flex items-center space-x-2 px-3 py-1 rounded transition ${
            currentLang === lang.code ? 'bg-green-100 text-green-800 border border-green-500' : 'hover:bg-gray-100'
          }`}
        >
          <span>{lang.flag}</span>
          <span className="font-medium">{lang.label}</span>
        </button>
      ))}
    </div>
);
};

export default LanguageSwitcher;
