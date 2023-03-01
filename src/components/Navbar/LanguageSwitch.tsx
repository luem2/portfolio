import React, { useState, useContext, useEffect } from 'react'

import { Image } from '@nextui-org/react'
import { LangContext } from '../../context/langContext'
import { spainSVG, usaSVG } from '../../assets'
import { CV_ENGLISH, CV_SPANISH } from '../../constants'
import { useCv } from '../../store/useCv'

export function LanguageSwitch() {
    const { locale, setLang } = useContext(LangContext)
    const { setCvLang } = useCv()
    const [langImg, setLangImg] = useState()

    const toggleLang = () => {
        if (locale === 'es-MX') {
            setLang('en-US')
            setCvLang(CV_ENGLISH)
            setLangImg(usaSVG.src)
        } else {
            setLang('es-MX')
            setCvLang(CV_SPANISH)
            setLangImg(spainSVG.src)
        }
    }

    useEffect(() => {
        if (window.localStorage.getItem('lang') === null) {
            window.localStorage.setItem('lang', 'en-US')
            setCvLang(CV_ENGLISH)
            setLangImg(usaSVG.src)
            return
        }

        if (window.localStorage.getItem('lang') === 'es-MX') {
            setLangImg(spainSVG.src)
            setCvLang(CV_SPANISH)
        } else {
            setLangImg(usaSVG.src)
            setCvLang(CV_ENGLISH)
        }
    }, [langImg, setCvLang])

    return (
        <Image
            css={{
                '&:hover': {
                    cursor: 'pointer',
                },
            }}
            src={langImg}
            alt={`${locale}-logo`}
            onClick={() => toggleLang()}
            width={25}
            height={25}
        />
    )
}
