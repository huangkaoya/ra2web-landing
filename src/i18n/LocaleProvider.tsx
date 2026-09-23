'use client';

import { createContext, useContext } from 'react';
import type { Locale, Messages } from './types';

type I18nValue = {
  locale: Locale;
  m: Messages;
};

const I18nContext = createContext<I18nValue | null>(null);

export function LocaleProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale;
  messages: Messages;
  children: React.ReactNode;
}) {
  return <I18nContext.Provider value={{ locale, m: messages }}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const value = useContext(I18nContext);
  if (!value) {
    throw new Error('useI18n must be used within LocaleProvider');
  }
  return value;
}
