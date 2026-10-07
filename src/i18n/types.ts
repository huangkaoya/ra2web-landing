export const LOCALES = ['zh', 'en'] as const;

export type Locale = (typeof LOCALES)[number];

export const LOCALE_COOKIE = 'ra2web_locale';

export const LOCALE_MAX_AGE = 60 * 60 * 24 * 365;

export function isLocale(value: string | null | undefined): value is Locale {
  return value === 'zh' || value === 'en';
}

export type TextBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'h4'; heading: string; text: string };

export type LegalDoc = {
  title: string;
  heading: string;
  updated: string;
  sections: { heading: string; blocks: TextBlock[] }[];
};

export type Messages = {
  meta: {
    title: string;
    description: string;
    keywords: string;
    ogLocale: string;
  };
  switcher: {
    label: string;
    zh: string;
    en: string;
  };
  nav: {
    home: string;
    features: string;
    community: string;
    media: string;
    news: string;
    play: string;
    logoAria: string;
    openMenu: string;
    closeMenu: string;
  };
  banner: {
    welcome: string;
    commander: string;
    line1: string;
    line2: string;
    playNow: string;
    stable: string;
    slides: { title: string; subtitle: string }[];
    goToSlide: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    tabNews: string;
    tabSpecs: string;
    lobbyAlt: string;
    progressTitle: string;
    progressStatus: string;
    progressBody: string;
    progressBefore: string;
    progressLink: string;
    progressAfter: string;
    specsTitle: string;
    specs: string[];
  };
  features: {
    title: string;
    items: { title: string; description: string }[];
  };
  community: {
    title: string;
    intro: string;
    qrAlt: string;
    followBefore: string;
    followName: string;
    followAfter: string;
  };
  media: {
    title: string;
    screenshot: string;
    screenshotFull: string;
    close: string;
  };
  sponsors: {
    title: string;
    intro: string;
    gold: string;
    goldAlt: string;
    personal: string;
    namingNote: string;
    loading: string;
    empty: string;
  };
  support: {
    title: string;
    p1: string;
    p2: string;
    copy: string;
    copied: string;
    addressHint: string;
    currencies: { btc: string; eth: string; doge: string };
    donate: { btc: string; eth: string; doge: string };
  };
  donors: {
    loading: string;
    title: string;
    intro: string;
    empty: string;
    anonymous: string;
    supporter: string;
    supported: string;
    other: string;
    crypto: string;
    bmc: string;
    receipt: string;
  };
  footer: {
    playNow: string;
    privacy: string;
    cookies: string;
    tos: string;
    contact: string;
    legal: string;
    linksTitle: string;
    more: string;
    less: string;
    links: { name: string; description: string }[];
  };
  subpage: { back: string };
  news: {
    title: string;
    latest: string;
    author: string;
    readMore: string;
    empty: string;
    published: string;
    updated: string;
    back: string;
    share: string;
    shareTo: string;
    print: string;
    shareArticle: string;
    categories: {
      公告: string;
      新闻: string;
      百科: string;
      活动: string;
    };
    defaultCategory: string;
  };
  notFound: { title: string; body: string };
  privacy: LegalDoc;
  cookies: LegalDoc;
  tos: LegalDoc;
  patchNotes: {
    title: string;
    heading: string;
    version: string;
    latest: string;
    entries: { version: string; date: string; changes: string[] }[];
  };
};
