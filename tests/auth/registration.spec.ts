import { test, expect } from '@playwright/test';
import { fillEmail, fillPassword, submitForm } from '../../helpers/common.actions';

test.describe('Mobile Registration', () => {
  test('Happy path registration', async ({ page }) => {
    await page.goto('/register');

    const email = `aqa.test+${Date.now()}@mailinator.com`;
    const password = process.env.TEST_PASSWORD!;

    await fillEmail(page, email);
    await fillPassword(page, password);
    await submitForm(page);

    await expect(page).toHaveURL(/success|confirmation/);
  });
});
