import React, { useState, useContext, useEffect } from 'react'

import { Image } from '@nextui-org/react'
import { LangContext } from '../../context/langContext'
import { spainSVG, usaSVG } from '../../assets'

export function LanguageSwitch() {
    const { locale, setLang } = useContext(LangContext)
    const [langImg, setLangImg] = useState()

    const toggleLang = () => {
        if (locale === 'es-MX') {
            setLang('en-US')
            setLangImg(usaSVG.src)
        } else {
            setLang('es-MX')
            setLangImg(spainSVG.src)
        }
    }

    useEffect(() => {
        if (window.localStorage.getItem('lang') === null) {
            window.localStorage.setItem('lang', 'en-US')
            setLangImg(usaSVG.src)
            return
        }

        window.localStorage.getItem('lang') === 'es-MX'
            ? setLangImg(spainSVG.src)
            : setLangImg(usaSVG.src)
    }, [langImg])

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
