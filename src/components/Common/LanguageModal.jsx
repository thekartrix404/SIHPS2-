import React, { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'

export default function LanguageModal({ isOpen, onClose }) {
  const {
    currentLanguage,
    setLanguage,
    supportedLanguages,
    currentLanguageMeta,
    bhashiniCreds,
    updateBhashiniCreds,
  } = useLanguage()

  const [search, setSearch] = useState('')
  const [showSettings, setShowSettings] = useState(false)
  const [userId, setUserId] = useState(bhashiniCreds.userID || '')
  const [apiKey, setApiKey] = useState(bhashiniCreds.ulcaApiKey || '')
  const [savedSuccess, setSavedSuccess] = useState(false)

  if (!isOpen) return null

  const filteredLanguages = supportedLanguages.filter(
    (l) =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.nativeName.toLowerCase().includes(search.toLowerCase()) ||
      l.region.toLowerCase().includes(search.toLowerCase())
  )

  const handleSelect = (code) => {
    setLanguage(code)
    onClose()
  }

  const handleSaveSettings = (e) => {
    e.preventDefault()
    updateBhashiniCreds({
      ...bhashiniCreds,
      userID: userId.trim(),
      ulcaApiKey: apiKey.trim(),
    })
    setSavedSuccess(true)
    setTimeout(() => setSavedSuccess(false), 2500)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden border border-surface-container-high flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-space-lg border-b border-surface-container-high flex items-center justify-between bg-surface-container-low/60">
          <div className="flex items-center gap-space-sm">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary">
              <span className="material-symbols-outlined text-[22px]">translate</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                  Choose Language / भाषा चुनें
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                  Bhashini AI
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Select your preferred Indian regional language for WhatsApp advisory & web dashboard
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Search & Toggle Bar */}
        <div className="p-space-md bg-surface-container-lowest border-b border-surface-container-high flex flex-wrap items-center justify-between gap-space-sm">
          <div className="flex-1 min-w-[240px] flex items-center gap-space-xs bg-surface-container-low px-space-md py-space-xs rounded-xl border border-surface-container-high">
            <span className="material-symbols-outlined text-on-surface-variant text-[18px]">search</span>
            <input
              type="text"
              placeholder="Search by language, script, or state..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent border-none outline-none font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant w-full"
            />
            {search && (
              <button onClick={() => setSearch('')} className="text-on-surface-variant hover:text-on-surface text-xs">
                ✕
              </button>
            )}
          </div>

          <button
            onClick={() => setShowSettings(!showSettings)}
            className={`inline-flex items-center gap-1.5 px-space-md py-space-xs rounded-xl font-label-md text-label-md transition-all ${
              showSettings
                ? 'bg-primary text-on-primary shadow-sm'
                : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">tune</span>
            <span>Bhashini API Config</span>
          </button>
        </div>

        {/* Optional Bhashini API Settings Panel */}
        {showSettings && (
          <div className="p-space-md bg-surface-container-low/80 border-b border-surface-container-high animate-fadeIn">
            <div className="flex items-start justify-between gap-2 mb-space-xs">
              <div className="flex items-center gap-1.5 text-primary font-semibold text-sm">
                <span className="material-symbols-outlined text-[18px]">hub</span>
                <span>Project Bhashini (Digital India) API Integration</span>
              </div>
              <span className="text-xs text-on-surface-variant">Endpoint: dhruva-api.bhashini.gov.in</span>
            </div>
            <p className="text-xs text-on-surface-variant mb-space-sm leading-relaxed">
              BizOrbit connects to the National Language Translation Mission (NLTM) Dhruva pipeline. You can enter your ULCA / Bhashini credentials below for live real-time neural translation. If empty, the system automatically uses the embedded high-accuracy dictionary.
            </p>
            <form onSubmit={handleSaveSettings} className="grid grid-cols-1 md:grid-cols-2 gap-space-sm items-end">
              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">Bhashini User ID</label>
                <input
                  type="text"
                  placeholder="e.g. your-bhashini-user-id"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="w-full px-space-sm py-1.5 rounded-lg bg-surface-container-lowest border border-surface-container-high text-xs text-on-surface outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">ULCA API Key</label>
                <input
                  type="password"
                  placeholder="e.g. ulca_api_key_..."
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="w-full px-space-sm py-1.5 rounded-lg bg-surface-container-lowest border border-surface-container-high text-xs text-on-surface outline-none focus:border-primary"
                />
              </div>
              <div className="md:col-span-2 flex items-center justify-between pt-1">
                {savedSuccess ? (
                  <span className="text-xs text-secondary font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    Credentials saved successfully!
                  </span>
                ) : (
                  <span className="text-xs text-on-surface-variant">Default fallback dictionary active</span>
                )}
                <button
                  type="submit"
                  className="px-space-md py-1.5 bg-primary text-on-primary rounded-lg text-xs font-semibold hover:bg-primary-container transition-colors shadow-sm"
                >
                  Save API Keys
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Language Grid */}
        <div className="p-space-lg overflow-y-auto flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-sm">
          {filteredLanguages.map((lang) => {
            const isSelected = currentLanguage === lang.code
            return (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`p-space-md rounded-xl text-left transition-all flex items-start justify-between border ${
                  isSelected
                    ? 'bg-primary-container/20 border-primary shadow-sm ring-1 ring-primary'
                    : 'bg-surface-container-lowest border-surface-container-high hover:border-primary/40 hover:bg-surface-container-low'
                }`}
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">{lang.flag}</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      {lang.nativeName}
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium mt-0.5">
                    {lang.name}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant text-[11px] mt-1">
                    {lang.region}
                  </span>
                </div>
                {isSelected && (
                  <span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Footer */}
        <div className="p-space-md bg-surface-container-low border-t border-surface-container-high flex flex-wrap items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-xs text-xs text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px] text-secondary">verified_user</span>
            <span>Active: <strong>{currentLanguageMeta.nativeName} ({currentLanguageMeta.name})</strong></span>
          </div>
          <div className="flex items-center gap-space-sm">
            <button
              onClick={onClose}
              className="px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:bg-primary-container transition-all"
            >
              Done / पूर्ण
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
