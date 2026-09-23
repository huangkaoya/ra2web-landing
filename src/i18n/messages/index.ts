import { en } from './en';
import { zh } from './zh';
import type { Locale, Messages } from '../types';

export const messages: Record<Locale, Messages> = { zh, en };

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
