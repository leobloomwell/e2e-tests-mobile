# bloomwell-mobile-e2e-tests

Mobile end-to-end test automation for the Bloomwell application.

This repository contains automated tests for **iOS and Android mobile apps only**, executed on **real devices via BrowserStack App Automate**.

The main goal is to provide stable, reusable regression coverage for critical authentication flows.

---

## Scope

This repository covers **mobile automation only**:

Platforms:
- iOS
- Android

Test flows:
- Registration
- Login
- Forgot password

Out of scope:
- Web automation
- Admin panels
- Payments
- Content validation outside authentication flows

---

## Technology Stack

- Playwright (test runner)
- BrowserStack App Automate
- TypeScript
- Node.js
- Real devices (iOS / Android)

---

## Project Structure

```text
e2e-tests-mobile/
├── tests/
│   └── auth/
│       ├── registration.spec.ts
│       ├── login.spec.ts
│       └── forgot-password.spec.ts
│
├── helpers/
│   ├── selectors.ts
│   └── common.actions.ts
│
├── browserstack/
│   ├── ios.capabilities.ts
│   ├── android.capabilities.ts
│   └── devices.ts
│
├── reports/
│   ├── videos/
│   └── screenshots/
│
├── .env.example
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── README.md
