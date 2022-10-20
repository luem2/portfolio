import React, { useState } from 'react';

import { IntlProvider } from 'react-intl';
import EnglishMessages from '/src/lang/en-US.json';
import SpanishMessages from '/src/lang/es-MX.json';

const langContext = React.createContext();

function LangProvider({ children }) {
  const [messages, setMessages] = useState(EnglishMessages);
  const [locale, setLocale] = useState('en-US');

  const setLang = lang => {
    switch (lang) {
      case 'es-MX':
        setMessages(SpanishMessages);
        setLocale('es-MX');
        break;
      case 'en-US':
        setMessages(EnglishMessages);
        setLocale('en-US');
        break;
      default:
        setMessages(EnglishMessages);
        setLocale('en-US');
    }
  };

  return (
    <langContext.Provider value={{ locale, setLang }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
}

export { LangProvider, langContext };
