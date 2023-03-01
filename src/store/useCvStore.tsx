import { create } from 'zustand'
import { CV_SPANISH } from '../constants'

interface CvState {
    cvLang: string
    setCvLang: (lang: string) => void
}

export const useCvStore = create<CvState>()((set) => {
    return {
        cvLang: CV_SPANISH,
        setCvLang: (lang) =>
            set(() => {
                return {
                    cvLang: lang,
                }
            }),
    }
})
