import { create } from 'zustand'
import { CV_SPANISH } from '../constants'

interface CvState {
    cvLang: string
    setCvLang: (lang: string) => void
}

export const useCv = create<CvState>()((set) => {
    return {
        cvLang: CV_SPANISH,
        setCvLang: (lang) =>
            set((_state) => {
                return {
                    cvLang: lang,
                }
            }),
    }
})
