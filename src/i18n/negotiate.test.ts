import assert from 'node:assert/strict';
import { negotiateLocale, negotiateLocaleFromTags } from './negotiate.ts';
import { displayBrand } from './format.ts';
import { resolveLocale } from './resolve-locale.ts';
import { localeAlternates, safePathname } from './seo.ts';

assert.equal(negotiateLocale('zh-CN,zh;q=0.9,en;q=0.8'), 'zh');
assert.equal(negotiateLocale('zh-TW'), 'zh');
assert.equal(negotiateLocale('zh'), 'zh');
assert.equal(negotiateLocale('en-US,en;q=0.9,zh-CN;q=0.8'), 'en');
assert.equal(negotiateLocale('en;q=0.5, zh-CN;q=0.9'), 'zh');
assert.equal(negotiateLocale('fr-FR,fr;q=0.9'), 'en');
assert.equal(negotiateLocale(null), 'zh');
assert.equal(negotiateLocale(''), 'zh');
assert.equal(negotiateLocale('*'), 'zh');
assert.equal(negotiateLocaleFromTags(['fr-FR', 'zh-HK', 'en-US']), 'zh');
assert.equal(negotiateLocaleFromTags(['en-GB', 'zh-CN']), 'en');
assert.equal(negotiateLocaleFromTags(['ja', 'de']), 'en');
assert.equal(displayBrand('Ra2Web'), 'ra2web');
assert.equal(displayBrand('RA2WEB'), 'ra2web');
assert.equal(displayBrand(''), 'ra2web');
assert.equal(displayBrand('Chronodivide'), 'Chronodivide');

const googlebot = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
const baidu = 'Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)';

assert.equal(resolveLocale({}), 'zh');
assert.equal(resolveLocale({ acceptLanguage: null, userAgent: googlebot }), 'zh');
assert.equal(resolveLocale({ acceptLanguage: 'en-US,en;q=0.9', userAgent: googlebot }), 'zh');
assert.equal(resolveLocale({ userAgent: baidu }), 'zh');
assert.equal(resolveLocale({ acceptLanguage: 'zh-CN,zh;q=0.9' }), 'zh');
assert.equal(resolveLocale({ acceptLanguage: 'en-US,en;q=0.9' }), 'en');
assert.equal(resolveLocale({ cookie: 'en' }), 'en');
assert.equal(resolveLocale({ cookie: 'en', userAgent: baidu }), 'en');
assert.equal(resolveLocale({ langQuery: 'en' }), 'en');
assert.equal(resolveLocale({ langQuery: 'en', userAgent: googlebot, acceptLanguage: 'en' }), 'en');
assert.equal(resolveLocale({ cookie: 'zh', langQuery: 'en' }), 'zh');
assert.equal(resolveLocale({ cookie: 'en', langQuery: 'zh' }), 'en');

const homeZh = localeAlternates('/', 'zh');
assert.equal(homeZh.canonical, 'https://www.ra2web.com/');
assert.equal(homeZh.languages['zh-CN'], 'https://www.ra2web.com/');
assert.equal(homeZh.languages.en, 'https://www.ra2web.com/?lang=en');
assert.equal(homeZh.languages['x-default'], 'https://www.ra2web.com/');
const newsEn = localeAlternates('/news/', 'en');
assert.equal(newsEn.canonical, 'https://www.ra2web.com/news/?lang=en');
assert.equal(newsEn.languages['zh-CN'], 'https://www.ra2web.com/news/');
assert.equal(safePathname('https://evil.example/'), '/');
assert.equal(safePathname('/news/'), '/news/');

console.log('i18n negotiate checks passed');
