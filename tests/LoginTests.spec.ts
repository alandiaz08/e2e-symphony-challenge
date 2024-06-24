import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/genai/pages/LoginPage';
import { testUsersSelector } from '../src/utils/testUsersSelector';
import { ProjectPage } from '../src/pages/genai/pages/ProjectsPage';
import { allure } from "allure-playwright";

const userSelector = new testUsersSelector();

//This line delete the cookies to run tests
test.use({ storageState: { cookies: [], origins: [] } });

test.describe('Login Tests @full-regression @login', () => {
  test('Login by email', async ({ page }, testInfo) => {

    //Allure report data
    await allure.description(
      "This test attempts to log into the website using a login and a password.",
    );
    await allure.owner("Alan Diaz");
    await allure.tags("full-regression", "login");
    await allure.link("https://www.notion.so/laureate-mx/Login-Tests-54854f10621f4e07800b37d81c175cda", "Notion Test Case Related");

    //Arrange
    const user = userSelector.getUserByDescription('qasuperuser');
    const login = new LoginPage(page);

    //Allure parameter data
    await allure.parameter("Email expected", user.email);
    await allure.parameter("Password Expected", user.password);

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

    //Allure report data
    await allure.description(
      "This test attempts to log into the website and checks if the Welcome message is displayed.",
    );
    await allure.owner("Alan Diaz");
    await allure.tags("full-regression", "login");
    await allure.link("https://www.notion.so/laureate-mx/Login-Tests-54854f10621f4e07800b37d81c175cda", "Notion Test Case Related");

    //Arrange
    const login = new LoginPage(page);

    //Act
    await login.navigateToLoginPage();

    //Assert
    await expect(await login.isWelcomeMessageVisible()).toBe(true);
  });

  test('Is Required email message displayed', async ({ page }, testInfo) => {
    //Allure report data
    await allure.description(
      "This test attempts to log into the website and checks if the Required email message displayed.",
    );
    await allure.owner("Alan Diaz");
    await allure.tags("full-regression", "login");
    await allure.link("https://www.notion.so/laureate-mx/Login-Tests-54854f10621f4e07800b37d81c175cda", "Notion Test Case Related");

    //Arrange
    const user = userSelector.getUserByDescription('qasuperuser');
    const login = new LoginPage(page);

    //Allure parameter data
    await allure.parameter("Password Expected", user.password);

    //Act
    await login.navigateToLoginPage();

    await login.clickEmailInput()
      .then(() => login.inputPassword(user.password));

    //Assert
    await expect(await login.isEmailRequiredMessageVisible()).toBe(true);
  });

  test('Is Required password message displayed', async ({ page }, testInfo) => {
    //Allure report data
    await allure.description(
      "This test attempts to log into the website and checks if the Required password message displayed.",
    );
    await allure.owner("Alan Diaz");
    await allure.tags("full-regression", "login");
    await allure.link("https://www.notion.so/laureate-mx/Login-Tests-54854f10621f4e07800b37d81c175cda", "Notion Test Case Related");

    //Arrange
    const user = userSelector.getUserByDescription('qasuperuser');
    const login = new LoginPage(page);

    //Allure parameter data
    await allure.parameter("Email expected", user.email);

    //Act
    await login.navigateToLoginPage();

    await login.clickPasswordInput()
      .then(() => login.inputUserName(user.email));

    //Assert
    await expect(await login.isPasswordRequiredMessageVisible()).toBe(true);
  });

});
