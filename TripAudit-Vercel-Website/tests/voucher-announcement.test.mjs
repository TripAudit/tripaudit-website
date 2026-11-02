import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import ts from 'typescript';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

// Compile this isolated server component with the project's existing TypeScript
// dependency. No extra test package, browser script, or application API is added.
const file = path.join(__dirname, '../app/components/VoucherAnnouncement.tsx');
const compiled = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
}).outputText;
const componentModule = { exports: {} };
new Function('require', 'module', 'exports', compiled)(require, componentModule, componentModule.exports);
const { default: VoucherAnnouncement, isVoucherPreview } = componentModule.exports;

function renderFor(vercelEnv, nodeEnv) {
  const previous = { ...process.env };
  try {
    if (vercelEnv === undefined) delete process.env.VERCEL_ENV;
    else process.env.VERCEL_ENV = vercelEnv;
    process.env.NODE_ENV = nodeEnv;
    return renderToStaticMarkup(createElement(VoucherAnnouncement));
  } finally {
    for (const key of ['VERCEL_ENV', 'NODE_ENV']) {
      if (previous[key] === undefined) delete process.env[key];
      else process.env[key] = previous[key];
    }
  }
}

test('production and unknown deployments fail closed', () => {
  for (const environment of [
    { vercelEnv: 'production', nodeEnv: 'production' },
    { vercelEnv: 'production', nodeEnv: 'development' },
    { nodeEnv: 'production' },
    { vercelEnv: 'staging', nodeEnv: 'production' },
    {},
  ]) assert.equal(isVoucherPreview(environment), false);
  assert.equal(renderFor('production', 'production'), '');
  assert.equal(renderFor(undefined, 'production'), '');
});

test('Preview and local development show an explicitly unopened draft', () => {
  assert.equal(isVoucherPreview({ vercelEnv: 'preview', nodeEnv: 'production' }), true);
  assert.equal(isVoucherPreview({ nodeEnv: 'development' }), true);
  const html = renderFor('preview', 'production');
  assert.match(html, /Preview only · Award not open/);
  assert.match(html, /Optional email entry, eligibility rules, and legally reviewed award terms must be ready before launch/);
});

test('approved copy, closing date, equal eligibility and CTA are retained', () => {
  const html = renderFor('preview', 'production');
  for (const text of [
    'TourAudit Best Feedback Award', 'Help us improve TourAudit!',
    'Review an itinerary, share your genuine feedback, and mention',
    '&quot;amazon feedback&quot;',
    'Amazon Gift Voucher award',
    'Want to participate? You may voluntarily provide your email address when submitting feedback.',
    'The TourAudit team will select feedback based on its usefulness, actionable suggestions and relevance to improving TourAudit.',
    '31 December 2026',
    'Participation is free and optional. Positive and negative feedback are equally welcome.',
    'Terms and conditions apply.',
  ]) assert.ok(html.includes(text), text);
  assert.match(html, /href="https:\/\/app\.touraudit\.com"/);
  assert.match(html, /dateTime="2026-12-31"/);
  assert.match(html, /Try TourAudit/);
});

test('no email capture, scripts, invented terms link or internal prize details', () => {
  const html = renderFor('preview', 'production');
  assert.doesNotMatch(html, /<(form|input|script)\b/i);
  assert.doesNotMatch(html, /US\$|\$10|one winner|one randomly/i);
  assert.equal((html.match(/href=/g) || []).length, 1);
  assert.match(html, /aria-labelledby="voucher-heading"/);
});

test('award uses the approved merit criteria without chance-based selection', () => {
  const html = renderFor('preview', 'production');
  assert.match(html, /usefulness, actionable suggestions and relevance to improving TourAudit/);
  assert.doesNotMatch(html, /lucky draw|random|chance|sweepstakes/i);
});
