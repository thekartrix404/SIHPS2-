import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import LanguageModal from '../Common/LanguageModal'

export default function Header() {
  const { currentLanguageMeta, t } = useLanguage()
  const [isLangModalOpen, setIsLangModalOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-72 right-0 h-16 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-lg flex items-center justify-between gap-space-md">
        {/* Search */}
        <div className="flex items-center gap-space-md flex-1 max-w-xl">
          <div className="flex items-center gap-space-xs bg-surface-container-lowest px-space-md py-space-xs rounded-lg shadow-[0_1px_3px_rgba(15,23,42,0.04)] w-full">
            <span className="material-symbols-outlined text-on-surface-variant text-[18px]">search</span>
            <input
              className="bg-transparent border-none outline-none font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant w-full"
              placeholder={t('searchPlaceholder', 'Search businesses, schemes, local markets...')}
              type="text"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-space-md shrink-0">
          {/* Location */}
          <div className="hidden xl:flex items-center gap-space-xs bg-surface-container px-space-sm py-space-xs rounded-full text-on-surface font-label-md text-label-md">
            <span className="material-symbols-outlined text-[16px] text-secondary">location_on</span>
            <span>{t('locationTag', 'Bilaspur Block, Rampur (UP)')}</span>
            <span className="material-symbols-outlined text-[16px] text-on-surface-variant cursor-pointer">arrow_drop_down</span>
          </div>

          {/* User Info */}
          <div className="hidden lg:flex flex-col text-right">
            <span className="font-label-md text-label-md text-on-surface font-semibold">Suresh Kumar</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">{t('userTitle', 'Agri-Processing Unit')}</span>
          </div>

          {/* Bhashini Multilingual Switcher Trigger */}
          <button
            onClick={() => setIsLangModalOpen(true)}
            className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-xl bg-surface-container-high hover:bg-surface-container transition-all border border-surface-container-highest shadow-sm group"
            title="Switch Language / भाषा बदलें (Powered by Bhashini AI)"
          >
            <span className="text-base">{currentLanguageMeta.flag}</span>
            <span className="font-label-md text-label-md text-on-surface font-bold">
              {currentLanguageMeta.nativeName}
            </span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-primary-container text-on-primary-container font-semibold uppercase">
              {currentLanguageMeta.code}
            </span>
            <span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary transition-colors">
              translate
            </span>
          </button>

          {/* Notifications */}
          <button className="relative p-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container">
            <span className="material-symbols-outlined text-[22px]">notifications</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
          </button>

          {/* Avatar */}
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </header>

      {/* Language Selection Modal */}
      <LanguageModal
        isOpen={isLangModalOpen}
        onClose={() => setIsLangModalOpen(false)}
      />
    </>
  )
}
