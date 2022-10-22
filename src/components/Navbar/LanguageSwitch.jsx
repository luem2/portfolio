import React, { useState, useContext, useEffect } from 'react';

import { Image } from '@nextui-org/react';
import { langContext } from '/src/context/langContext.js';
import { spainSVG, usaSVG } from '/src/assets';

export function LanguageSwitch() {
  const { locale, setLang } = useContext(langContext);
  const [langImg, setLangImg] = useState();

  const toggleLang = () => {
    if (locale === 'es-MX') {
      setLang('en-US');
      setLangImg(usaSVG.default.src);
    } else {
      setLang('es-MX');
      setLangImg(spainSVG.default.src);
    }
  };

  useEffect(() => {
    if (window.localStorage.getItem('lang') === null) {
      window.localStorage.setItem('lang', 'en-US');
      setLangImg(usaSVG.default.src);
      return;
    }

    window.localStorage.getItem('lang') === 'es-MX'
      ? setLangImg(spainSVG.default.src)
      : setLangImg(usaSVG.default.src);
  }, [langImg]);

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
  );
}