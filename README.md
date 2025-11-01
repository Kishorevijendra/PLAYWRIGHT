# Playwright Project

This directory contains a minimal Playwright Test scaffold.

Quick start

```bash
cd /Users/kishore/Desktop/Playwright
npm install
# Install Playwright browsers (required)
npx playwright install
# Run tests
npm test
# Open the HTML report (after running tests)
npm run test:report
```

Files created:
- `package.json` - scripts and devDependency on `@playwright/test`.
- `playwright.config.ts` - Playwright Test configuration with Chromium/Firefox/WebKit projects.
- `tests/example.spec.ts` - Example test that verifies the title on example.com.
- `tsconfig.json` - TypeScript config for editor support.
- `.gitignore` - recommended ignores.

Notes
- After `npm install`, Playwright CLI `npx playwright` will be available. Run `npx playwright install` to download browsers.
- You can change `playwright.config.ts` to tune timeouts, reporters, and devices.
