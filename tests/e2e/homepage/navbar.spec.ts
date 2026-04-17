import {test} from '@playwright/test';

const LOGIN_URL = '/login';

test.describe('Navbar links test', () => {
  test('', async ({page}) => {
    await page.goto(LOGIN_URL);
  });
});
