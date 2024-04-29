import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/genai/pages/LoginPage';
import { testUsersSelector } from '../src/utils/testUsersSelector';
import { ProjectPage } from '../src/pages/genai/pages/ProjectsPage';
import { RegisterPage } from '../src/pages/genai/pages/RegisterPage';
import { testRandomDataProvider } from '../src/utils/testRandomDataProvider';

const userSelector = new testUsersSelector();
const testRandomData = new testRandomDataProvider();

test.describe('Login Tests @full-regression @login', () => {
  test('Successful registration', async ({ page }, testInfo) => {
    //Arrange
    const login = new LoginPage(page);
    const register = new RegisterPage(page);
    const project = new ProjectPage(page);
    const randomUserNameGen = testRandomData.generateRandomName();
    const randomNameGen = testRandomData.generateRandomName();
    const randomEmailGen = testRandomData.generateRandomAlphaNumeric() + '@mail.com';
    const randomPasswordGen = testRandomData.generateRandomAlphaNumeric();


    //Act
    await login.navigateToLoginPage();

    await login.clickRegisterButton()
      .then(() => register.enterUserName(randomUserNameGen))
      .then(() => register.enterFullName(randomNameGen))
      .then(() => register.enterEmail(randomEmailGen))
      .then(() => register.enterPassword(randomPasswordGen))
      .then(() => register.checkAgreeTermsCheckbox())
      .then(() => register.clickContinueButton());
    
    //Assert
    await expect(await project.isTitleVisible()).toBe(true);
  });

  test('Username field validation required', async ({ page }, testInfo) => {
    //Arrange
    const login = new LoginPage(page);
    const register = new RegisterPage(page);
    const randomEmailGen = testRandomData.generateRandomAlphaNumeric() + '@mail.com';
    const randomPasswordGen = testRandomData.generateRandomAlphaNumeric();


    //Act
    await login.navigateToLoginPage();

    await login.clickRegisterButton()
      .then(() => register.enterEmail(randomEmailGen))
      .then(() => register.enterPassword(randomPasswordGen))
      .then(() => register.checkAgreeTermsCheckbox())
      .then(() => register.clickContinueButton());
    
    //Assert
    await expect(await register.hasFullNameIsRequiredMessage()).toBe(true);
  });

  test('Password field validation required', async ({ page }, testInfo) => {
    //Arrange
    const login = new LoginPage(page);
    const register = new RegisterPage(page);
    const randomUserNameGen = testRandomData.generateRandomName();
    const randomEmailGen = testRandomData.generateRandomAlphaNumeric() + '@mail.com';


    //Act
    await login.navigateToLoginPage();

    await login.clickRegisterButton()
      .then(() => register.enterUserName(randomUserNameGen))
      .then(() => register.enterEmail(randomEmailGen))
      .then(() => register.checkAgreeTermsCheckbox())
      .then(() => register.clickContinueButton());
    
    //Assert
    await expect(await register.hasPasswordIsRequiredMessage()).toBe(true);
  });

  test('Email field validation required', async ({ page }, testInfo) => {
    //Arrange
    const login = new LoginPage(page);
    const register = new RegisterPage(page);
    const randomUserNameGen = testRandomData.generateRandomName();
    const randomPasswordGen = testRandomData.generateRandomAlphaNumeric();


    //Act
    await login.navigateToLoginPage();

    await login.clickRegisterButton()
      .then(() => register.enterUserName(randomUserNameGen))
      .then(() => register.enterPassword(randomPasswordGen))
      .then(() => register.checkAgreeTermsCheckbox())
      .then(() => register.clickContinueButton());
    
    //Assert
    await expect(await register.hasEmailIsRequiredMessage()).toBe(true);
  });

  test('Full name field validation required', async ({ page }, testInfo) => {
    //Arrange
    const login = new LoginPage(page);
    const register = new RegisterPage(page);
    const randomEmailGen = testRandomData.generateRandomAlphaNumeric() + '@mail.com';
    const randomUserNameGen = testRandomData.generateRandomName();
    const randomPasswordGen = testRandomData.generateRandomAlphaNumeric();

    //Act
    await login.navigateToLoginPage();

    await login.clickRegisterButton()
      .then(() => register.enterUserName(randomUserNameGen))
      .then(() => register.enterPassword(randomPasswordGen))
      .then(() => register.enterEmail(randomEmailGen))
      .then(() => register.checkAgreeTermsCheckbox())
      .then(() => register.clickContinueButton());
    
    //Assert
    await expect(await register.hasEmailIsRequiredMessage()).toBe(true);
  });
});
