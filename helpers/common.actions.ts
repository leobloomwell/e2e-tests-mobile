import { Page } from '@playwright/test';
import { selectors } from './selectors';

export async function fillEmail(page: Page, email: string) {
  await page.fill(selectors.emailInput, email);
}

export async function fillPassword(page: Page, password: string) {
  await page.fill(selectors.passwordInput, password);
}

export async function submitForm(page: Page) {
  await page.click(selectors.submitButton);
}
