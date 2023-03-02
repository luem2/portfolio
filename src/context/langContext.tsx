import { useState, useEffect, createContext, Context } from 'react'
import { IntlProvider } from 'react-intl'

import EnglishMessages from '../lang/en-US.json'
import SpanishMessages from '../lang/es-MX.json'

type LangContextType = 'es-MX' | 'en-US'

interface Props {
    children: JSX.Element | JSX.Element[]
}

interface PropsContext {
    locale: string
    setLang?: (lang: LangContextType) => void
}

const LangContext: Context<PropsContext> = createContext({
    locale: '',
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
        const lang = window.localStorage.getItem('lang')

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
