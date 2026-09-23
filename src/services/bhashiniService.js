/**
 * Bhashini (Project Bhashini - National Language Translation Mission, MeitY)
 * Integration Service for BizOrbit
 */

const STORAGE_KEY_CREDS = 'bizorbit_bhashini_creds'
const STORAGE_KEY_CACHE = 'bizorbit_translation_cache'

class BhashiniService {
  constructor() {
    this.endpoint = 'https://dhruva-api.bhashini.gov.in/services/inference/pipeline'
    this.cache = this.loadCache()
  }

  loadCache() {
    try {
      const cached = localStorage.getItem(STORAGE_KEY_CACHE)
      return cached ? JSON.parse(cached) : {}
    } catch {
      return {}
    }
  }

  saveCache() {
    try {
      localStorage.setItem(STORAGE_KEY_CACHE, JSON.stringify(this.cache))
    } catch {
      // Ignore quota errors
    }
  }

  getCredentials() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CREDS)
      if (saved) return JSON.parse(saved)
    } catch {
      // Fallback
    }

    return {
      userID: import.meta.env.VITE_BHASHINI_USER_ID || '',
      ulcaApiKey: import.meta.env.VITE_BHASHINI_API_KEY || '',
      pipelineId: import.meta.env.VITE_BHASHINI_PIPELINE_ID || '64392f96daac500b55c543d6',
      inferenceApiKey: import.meta.env.VITE_BHASHINI_INFERENCE_KEY || '',
      isEnabled: true,
    }
  }

  saveCredentials(creds) {
    try {
      localStorage.setItem(STORAGE_KEY_CREDS, JSON.stringify(creds))
      return true
    } catch {
      return false
    }
  }

  /**
   * Translate text between languages using Bhashini NMT inference pipeline
   * @param {string} text - text to translate
   * @param {string} sourceLang - source ISO-639 code (e.g. 'en')
   * @param {string} targetLang - target ISO-639 code (e.g. 'hi')
   */
  async translate(text, sourceLang = 'en', targetLang = 'hi') {
    if (!text || sourceLang === targetLang) return text

    const cacheKey = `${sourceLang}_${targetLang}_${text.trim().toLowerCase()}`
    if (this.cache[cacheKey]) {
      return this.cache[cacheKey]
    }

    const creds = this.getCredentials()

    // If user hasn't provided custom keys or is in offline demo mode
    if (!creds.ulcaApiKey || !creds.userID) {
      return null // signals caller to use dictionary fallback
    }

    try {
      const payload = {
        pipelineTasks: [
          {
            taskType: 'translation',
            config: {
              language: {
                sourceLanguage: sourceLang,
                targetLanguage: targetLang,
              },
            },
          },
        ],
        inputData: {
          input: [{ source: text }],
        },
      }

      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          userID: creds.userID,
          ulcaApiKey: creds.ulcaApiKey,
          Authorization: creds.inferenceApiKey || creds.ulcaApiKey,
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`Bhashini API error: ${response.status}`)
      }

      const data = await response.json()
      const translated = data?.pipelineResponse?.[0]?.output?.[0]?.target

      if (translated) {
        this.cache[cacheKey] = translated
        this.saveCache()
        return translated
      }
    } catch (err) {
      console.warn('Bhashini translation failed, using fallback:', err.message)
    }

    return null
  }

  async testConnection(creds) {
    try {
      const testResult = await this.translate('Hello', 'en', 'hi')
      return !!testResult
    } catch {
      return false
    }
  }
}

export const bhashini = new BhashiniService()
