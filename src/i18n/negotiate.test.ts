import assert from 'node:assert/strict';
import { negotiateLocale, negotiateLocaleFromTags } from './negotiate.ts';
import { displayBrand } from './format.ts';

assert.equal(negotiateLocale('zh-CN,zh;q=0.9,en;q=0.8'), 'zh');
assert.equal(negotiateLocale('zh-TW'), 'zh');
assert.equal(negotiateLocale('zh'), 'zh');
assert.equal(negotiateLocale('en-US,en;q=0.9,zh-CN;q=0.8'), 'en');
assert.equal(negotiateLocale('en;q=0.5, zh-CN;q=0.9'), 'zh');
assert.equal(negotiateLocale('fr-FR,fr;q=0.9'), 'en');
assert.equal(negotiateLocale(null), 'en');
assert.equal(negotiateLocale(''), 'en');
assert.equal(negotiateLocaleFromTags(['fr-FR', 'zh-HK', 'en-US']), 'zh');
assert.equal(negotiateLocaleFromTags(['en-GB', 'zh-CN']), 'en');
assert.equal(negotiateLocaleFromTags(['ja', 'de']), 'en');
assert.equal(displayBrand('Ra2Web'), 'ra2web');
assert.equal(displayBrand('RA2WEB'), 'ra2web');
assert.equal(displayBrand(''), 'ra2web');
assert.equal(displayBrand('Chronodivide'), 'Chronodivide');

console.log('i18n negotiate checks passed');
