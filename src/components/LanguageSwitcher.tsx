'use client';

import { useI18n } from '@/i18n/LocaleProvider';
import { writeLocaleCookie } from '@/i18n/cookie';
import type { Locale } from '@/i18n/types';

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { locale, m } = useI18n();

  const choose = (next: Locale) => {
    if (next === locale) return;
    writeLocaleCookie(next);
    window.location.reload();
  };

  const buttonClass = (active: boolean) =>
    `px-2.5 py-1 transition-colors ${
      active ? 'bg-[#ff9408] text-white font-bold' : 'text-white/85 hover:text-white hover:bg-white/10'
    }`;

  return (
    <div
      role="group"
      aria-label={m.switcher.label}
      className={`inline-flex items-stretch overflow-hidden rounded-full border border-white/30 text-xs leading-none font-['Open_Sans'] ${className}`}
    >
      <button type="button" className={buttonClass(locale === 'zh')} aria-pressed={locale === 'zh'} onClick={() => choose('zh')}>
        {m.switcher.zh}
      </button>
      <button type="button" className={buttonClass(locale === 'en')} aria-pressed={locale === 'en'} onClick={() => choose('en')}>
        {m.switcher.en}
      </button>
    </div>
  );
}
