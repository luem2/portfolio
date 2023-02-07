import { useState, useEffect, createContext } from 'react'

import { IntlProvider } from 'react-intl'
import EnglishMessages from '../lang/en-US.json'
import SpanishMessages from '../lang/es-MX.json'

type LangContextType = 'es-MX' | 'en-US'

// interface ILang {
//     locale: LangContextType
//     setLang: (lang: LangContextType) => void
// }

interface Props {
    children: JSX.Element | JSX.Element[]
}

const LangContext = createContext({
    locale: '',
    setLang: (lang: LangContextType) => {},
})

function LangProvider({ children }: Props) {
    const [locale, setLocale] = useState<string>('en-US')
    const [messages, setMessages] = useState(EnglishMessages)

    const setLang = (lang: LangContextType) => {
        switch (lang) {
            case 'es-MX':
                setMessages(SpanishMessages)
                setLocale('es-MX')
                window.localStorage.setItem('lang', 'es-MX')
                break
            case 'en-US':
                setMessages(EnglishMessages)
                setLocale('en-US')
                window.localStorage.setItem('lang', 'en-US')
                break
            default:
                setMessages(EnglishMessages)
                setLocale('en-US')
                window.localStorage.setItem('lang', 'en-US')
        }
    }

    useEffect(() => {
        let lang = window.localStorage.getItem('lang')
        if (lang === null) {
            window.localStorage.setItem('lang', 'en-US')
        } else {
            setLocale(lang)
            lang === 'es-MX'
                ? setMessages(SpanishMessages)
                : setMessages(EnglishMessages)
        }
    }, [])

    return (
        <LangContext.Provider value={{ locale, setLang }}>
            <IntlProvider locale={locale} messages={messages}>
                {children}
            </IntlProvider>
        </LangContext.Provider>
    )
}

export { LangProvider, LangContext }
