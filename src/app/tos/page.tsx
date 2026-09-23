"use client";

import LegalDocument from '@/components/LegalDocument';
import { useI18n } from '@/i18n/LocaleProvider';

export default function TermsOfService() {
  const { m } = useI18n();
  return <LegalDocument doc={m.tos} />;
}
