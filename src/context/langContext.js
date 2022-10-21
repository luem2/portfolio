import React, { useState, useEffect } from 'react';

import { IntlProvider } from 'react-intl';
import EnglishMessages from '/src/lang/en-US.json';
import SpanishMessages from '/src/lang/es-MX.json';

const langContext = React.createContext();

function LangProvider({ children }) {
  const [locale, setLocale] = useState('en-US');
  const [messages, setMessages] = useState(EnglishMessages);

  const setLang = lang => {
    switch (lang) {
      case 'es-MX':
        setMessages(SpanishMessages);
        setLocale('es-MX');
        window.localStorage.setItem('lang', 'es-MX');
        break;
      case 'en-US':
        setMessages(EnglishMessages);
        setLocale('en-US');
        window.localStorage.setItem('lang', 'en-US');
        break;
      default:
        setMessages(EnglishMessages);
        setLocale('en-US');
        window.localStorage.setItem('lang', 'en-US');
    }
  };

  useEffect(() => {
    let lang = window.localStorage.getItem('lang');
    if (lang === null) {
      window.localStorage.setItem('lang', 'en-US');
    } else {
      setLocale(lang);
      lang === 'es-MX'
        ? setMessages(SpanishMessages)
        : setMessages(EnglishMessages);
    }
  }, []);

  return (
    <langContext.Provider value={{ locale, setLang }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
}

export { LangProvider, langContext };
