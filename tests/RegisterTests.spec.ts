import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/genai/pages/LoginPage';
import { testUsersSelector } from '../src/utils/testUsersSelector';
import { ProjectPage } from '../src/pages/genai/pages/ProjectsPage';
import { RegisterPage } from '../src/pages/genai/pages/RegisterPage';
import { testRandomDataProvider } from '../src/utils/testRandomDataProvider';

const userSelector = new testUsersSelector();
const testRandomData = new testRandomDataProvider();

test.describe('Login Tests @full-regression @login', () => {
  test('Login by email', async ({ page }, testInfo) => {
    //Arrange
    const user = userSelector.getUserByDescription('qasuperuser');
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

});