import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { messages } from './messages'

export type Locale = keyof typeof messages
export const locales = Object.keys(messages) as Locale[]

const storageKey = 'locale'
const isLocale = (value: unknown): value is Locale =>
  locales.includes(value as Locale)

const LocaleContext = createContext<{
  locale: Locale
  setLocale: (locale: Locale) => void
}>({ locale: 'en', setLocale: () => {} })

/**
 * The server always renders English; after hydration the visitor's saved
 * choice (or their browser language on a first visit) takes over.
 */
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    let saved: string | null = null
    try {
      saved = localStorage.getItem(storageKey)
    } catch {}
    if (isLocale(saved)) setLocaleState(saved)
    else if (navigator.language.toLowerCase().startsWith('es'))
      setLocaleState('es')
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  function setLocale(next: Locale) {
    setLocaleState(next)
    try {
      localStorage.setItem(storageKey, next)
    } catch {}
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export const useLocale = () => useContext(LocaleContext)
export const useT = () => messages[useLocale().locale]

/** Keep only the Markdown entries written in the active language. */
export function inLocale<T extends { locale: Locale }>(
  entries: readonly T[],
  locale: Locale,
) {
  return entries.filter((entry) => entry.locale === locale)
}
