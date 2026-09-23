import React, { createContext, useContext, useState, useEffect } from 'react'
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '../i18n/languages'
import { translations } from '../i18n/translations'
import { bhashini } from '../services/bhashiniService'

const LanguageContext = createContext(null)

const STORAGE_LANG_KEY = 'bizorbit_preferred_language'

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguageState] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_LANG_KEY) || DEFAULT_LANGUAGE
    } catch {
      return DEFAULT_LANGUAGE
    }
  })

  const [bhashiniCreds, setBhashiniCreds] = useState(() => bhashini.getCredentials())

  const setLanguage = (langCode) => {
    setCurrentLanguageState(langCode)
    try {
      localStorage.setItem(STORAGE_LANG_KEY, langCode)
    } catch {
      // storage unavailable
    }
  }

  const updateBhashiniCreds = (creds) => {
    bhashini.saveCredentials(creds)
    setBhashiniCreds(creds)
  }

  // Translation helper: looks up dictionary first, falls back to English, then default value
  const t = (key, fallback = '') => {
    const langDict = translations[currentLanguage]
    if (langDict && langDict[key]) {
      return langDict[key]
    }
    const enDict = translations['en']
    if (enDict && enDict[key]) {
      return enDict[key]
    }
    return fallback || key
  }

  // Dynamic on-demand translation via Bhashini API with fallback
  const translateText = async (text, targetLang = currentLanguage) => {
    if (!text) return ''
    if (targetLang === 'en') return text
    const result = await bhashini.translate(text, 'en', targetLang)
    return result || text
  }

  const currentLanguageMeta =
    SUPPORTED_LANGUAGES.find((l) => l.code === currentLanguage) || SUPPORTED_LANGUAGES[0]

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        t,
        translateText,
        supportedLanguages: SUPPORTED_LANGUAGES,
        currentLanguageMeta,
        bhashiniCreds,
        updateBhashiniCreds,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
