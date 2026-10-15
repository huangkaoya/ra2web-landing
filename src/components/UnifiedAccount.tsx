"use client";

import { useI18n } from '@/i18n/LocaleProvider';

export default function UnifiedAccount() {
  const { locale } = useI18n();
  return (
    <div data-unified-account className="text-white justify-center">
      <a href="/api/account/login?returnTo=/">{locale === 'zh' ? '登录 / 注册' : 'Sign in / Register'}</a>
    </div>
  );
}
