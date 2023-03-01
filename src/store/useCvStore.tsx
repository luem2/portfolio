import { create } from 'zustand'
import { CV_SPANISH } from '../constants'

interface IStore {
    activeLink: string
    cvLang: string
    setCvLang: (lang: string) => void
    setActiveLink: (link: string) => void
}

export const useCvStore = create<IStore>()((set) => {
    return {
        activeLink: '/',

        cvLang: CV_SPANISH,

        setCvLang: (lang) =>
            set(() => {
                return {
                    cvLang: lang,
                }
            }),

        setActiveLink: (link) =>
            set(() => {
                return {
                    activeLink: link,
                }
            }),
    }
})
