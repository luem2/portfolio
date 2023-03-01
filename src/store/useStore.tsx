import { create } from 'zustand'
import { CV_SPANISH } from '../constants'

interface IStore {
    activeLink: string
    openMenu: boolean
    cvLang: string
    setCvLang: (lang: string) => void
    setActiveLink: (link: string) => void
    setOpenMenu: (boolean: boolean) => void
}

export const useStore = create<IStore>()((set) => {
    return {
        activeLink: '/',
        openMenu: false,

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

        setOpenMenu: (boolean) =>
            set(() => {
                return {
                    openMenu: boolean,
                }
            }),
    }
})
