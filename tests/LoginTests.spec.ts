import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/genai/pages/LoginPage';
import { testUsersSelector } from '../src/utils/testUsersSelector';
import { ProjectPage } from '../src/pages/genai/pages/ProjectsPage';

const userSelector = new testUsersSelector();

test.describe('Login Tests @full-regression @login', () => {
  test('Login by email', async ({ page }, testInfo) => {
    //Arrange
    const user = userSelector.getUserByDescription('qasuperuser');
    const login = new LoginPage(page);

    //Act
    await login.navigateToLoginPage();

    await login.inputUserName(user.email)
      .then(() => login.inputPassword(user.password))
      .then(() => login.signUpNow())

    const project = new ProjectPage(page);
    
    //Assert
    await expect(await project.isTitleVisible()).toBe(true);
  });

  test('Check if the Welcome message is displayed', async ({ page }, testInfo) => {
    test.slow();
    //Arrange
    const login = new LoginPage(page);

    //Act
    await login.navigateToLoginPage();
    
    //Assert
    await expect(await login.isWelcomeMessageVisible()).toBe(true);
  });

  test.skip('Is Required email message displayed', async ({ page }, testInfo) => {
    //Arrange
    const user = userSelector.getUserByDescription('qasuperuser');
    const login = new LoginPage(page);

    //Act
    await login.navigateToLoginPage();

    await login.inputPassword(user.password)
      .then(() => login.signUpNow())

    const project = new ProjectPage(page);
    
    //Assert
    await expect(await login.isEmailRequiredMessageVisible()).toBe(true);
  });

  test.skip('Is Required password message displayed', async ({ page }, testInfo) => {
    //Arrange
    const user = userSelector.getUserByDescription('qasuperuser');
    const login = new LoginPage(page);

    //Act
    await login.navigateToLoginPage();

    await login.inputUserName(user.email)
      .then(() => login.signUpNow())

    const project = new ProjectPage(page);
    
    //Assert
    await expect(await login.isPasswordRequiredMessageVisible()).toBe(true);
  });

  test.skip('Is Keep me signed in displayed', async ({ page }, testInfo) => {
    //Arrange
    const user = userSelector.getUserByDescription('qasuperuser');
    const login = new LoginPage(page);

    //Act
    await login.navigateToLoginPage();

    await login.inputPassword(user.password)
      .then(() => login.signUpNow())

    const project = new ProjectPage(page);
    
    //Assert
    await expect(await login.isKeepMeSignedCheckboxVisible()).toBe(true);
  });  
});
