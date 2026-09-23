"use client";

import LegalDocument from '@/components/LegalDocument';
import { useI18n } from '@/i18n/LocaleProvider';

export default function Privacy() {
  const { m } = useI18n();
  return <LegalDocument doc={m.privacy} />;
}
