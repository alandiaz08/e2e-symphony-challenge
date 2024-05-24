import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/genai/pages/LoginPage';
import { testUsersSelector } from '../src/utils/testUsersSelector';
import { ProjectPage } from '../src/pages/genai/pages/ProjectsPage';
import { RegisterPage } from '../src/pages/genai/pages/RegisterPage';
import { testRandomDataProvider } from '../src/utils/testRandomDataProvider';

const userSelector = new testUsersSelector();
const testRandomData = new testRandomDataProvider();

test.describe('Register Tests @full-regression @register', () => {
  test.skip('Successful registration', async ({ page }, testInfo) => {
    //Arrange
    const login = new LoginPage(page);
    const register = new RegisterPage(page);
    const project = new ProjectPage(page);
    const randomUserNameGen = testRandomData.generateRandomNameByValue(7);
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
      .then(() => register.clickContinueButton());
    
    //Assert
    await expect(await register.hasPasswordIsRequiredMessage()).toBe(true);
  });

  test('Email field validation required', async ({ page }, testInfo) => {
    //Arrange
    const login = new LoginPage(page);
    const register = new RegisterPage(page);
    const randomUserNameGen = testRandomData.generateRandomNameByValue(7);
    const randomPasswordGen = testRandomData.generateRandomAlphaNumeric();


    //Act
    await login.navigateToLoginPage();

    await login.clickRegisterButton()
      .then(() => register.enterFullName(randomUserNameGen))
      .then(() => register.enterPassword(randomPasswordGen))
      .then(() => register.clickContinueButton());
    
    //Assert
    await expect(await register.hasEmailIsRequiredMessage()).toBe(true);
  });

  test('Full name field validation required', async ({ page }, testInfo) => {
    //Arrange
    const login = new LoginPage(page);
    const register = new RegisterPage(page);
    const randomEmailGen = testRandomData.generateRandomAlphaNumeric() + '@mail.com';
    const randomUserNameGen = testRandomData.generateRandomNameByValue(7);
    const randomPasswordGen = testRandomData.generateRandomAlphaNumeric();

    //Act
    await login.navigateToLoginPage();

    await login.clickRegisterButton()
      .then(() => register.enterUserName(randomUserNameGen))
      .then(() => register.enterPassword(randomPasswordGen))
      .then(() => register.enterEmail(randomEmailGen))
      .then(() => register.clickContinueButton());
    
    //Assert
    await expect(await register.hasFullNameIsRequiredMessage()).toBe(true);
  });
});