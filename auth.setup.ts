import { Browser, chromium } from '@playwright/test';
import { testUsersSelector } from './src/utils/testUsersSelector';
import { LoginPage } from './src/pages/genai/pages/LoginPage';
import { URLBuilder } from './src/utils/URLBuilder';
import { env } from './load-env';

const authFile = 'playwright.auth/user.json';
const userSelector = new testUsersSelector();
const USER = userSelector.getUserByDescription('qasuperuser');

async function globalSetUp() {

  //Arrange
  const browsers: Browser = await chromium.launch();
  const context = await browsers.newContext();
  const page = await context.newPage();
  const login = new LoginPage(page);
  await login.navigateToLoginPage();

  await login.inputUserName(USER.email)
    .then(() => login.inputPassword(USER.password))
    .then(() => login.signUpNow())

  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL(await login.navigateToLoginPageAndGetUrl());

  //Store the auth state
  await page.context().storageState({ path: authFile });
  await browsers.close();
}

export default globalSetUp;