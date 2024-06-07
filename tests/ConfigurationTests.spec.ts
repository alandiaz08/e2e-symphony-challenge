import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/genai/pages/LoginPage';
import { testUsersSelector } from '../src/utils/testUsersSelector';
import { ProjectPage } from '../src/pages/genai/pages/ProjectsPage';
import { ProjectsResultList } from '../src/pages/genai/components/ProjectsResultList';
import { ProjectsResultItem } from '../src/pages/genai/components/ProjectsResultItem';
import { ProjectBuilderPage } from '../src/pages/genai/pages/ProjectBuilderPage';
import * as assert from "assert";
import { ProjectsConfig } from '../src/pages/genai/components/ProjectsConfig';
import { ProjectsConfigResultList } from '../src/pages/genai/components/ProjectsConfigResultList';
import { ProjectsConfigResultItem } from '../src/pages/genai/components/ProjectsConfigResultItem';
import { EditConfigPopup } from '../src/pages/genai/components/editConfigPopup';

const userSelector = new testUsersSelector();

test.describe('Configuration Tests @full-regression @configuration', () => {
  test('Add and check the purpose configuration', async ({ page }, testInfo) => {
    test.slow()
    //Arrange
    const user = userSelector.getUserByDescription('qasuperuser');
    const login = new LoginPage(page);
    const projectBuilder = new ProjectBuilderPage(page);
    const purposeExpected = 'Propósito';
    const descriptionExpected = '¿Cuál es la tarea principal de tu chat?';
    const proposeValue = 'El porpósito para el chat es tener un asistente QA';

    //Act
    await login.navigateToLoginPage();

    await login.inputUserName(user.email)
      .then(() => login.inputPassword(user.password))
      .then(() => login.signUpNow())

    const project = new ProjectPage(page);
    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));

    await projectItem.clickProjectPicture();
    await projectBuilder.clickConfigButton();

    const configuration = new ProjectsConfig(page, await projectBuilder.getConfigsContainer());
    const configurationList = new ProjectsConfigResultList(page, await configuration.getConfigListContainer());
    const configurationItem = new ProjectsConfigResultItem(page, await configurationList.getConfigCardItemsByIndex(0));

    await configurationItem.clickEditButton();

    const editPopup = new EditConfigPopup(page, await configuration.getEditContainer());

    await editPopup.enterEditText(proposeValue)
      .then(() => editPopup.clickSaveButton());

    //Assert
    await expect(await configurationItem.hasConfigPicture()).toBe(true);
    await expect(await configurationItem.hasConfigDescription()).toBe(true);
    await expect(await configurationItem.hasConfigTitle()).toBe(true);
    await expect(await configurationItem.hasConfigValue()).toBe(true);
    assert.equal(await configurationItem.getConfigTitleText(), purposeExpected,
      'The configuration title is not: ' + purposeExpected);
    assert.equal(await configurationItem.getConfigDescriptionText(), descriptionExpected,
      'The configuration description is not: ' + descriptionExpected);
    assert.equal(await configurationItem.getConfigValueText(), proposeValue,
      'The configuration text value is not: ' + proposeValue);
  });

  test.skip('Add and check the institution configuration', async ({ page }, testInfo) => {
    //Arrange
    const user = userSelector.getUserByDescription('qasuperuser');
    const login = new LoginPage(page);
    const projectBuilder = new ProjectBuilderPage(page);
    const purposeExpected = 'Institución';
    const descriptionExpected = '¿Qué institución o empresa representará tu chat?';
    const proposeValue = 'La institución que representara es ISTQB';

    //Act
    await login.navigateToLoginPage();

    await login.inputUserName(user.email)
      .then(() => login.inputPassword(user.password))
      .then(() => login.signUpNow())

    const project = new ProjectPage(page);
    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));

    await projectItem.clickProjectPicture();
    await projectBuilder.clickConfigButton();

    const configuration = new ProjectsConfig(page, await projectBuilder.getConfigsContainer());
    const configurationList = new ProjectsConfigResultList(page, await configuration.getConfigListContainer());
    const configurationItem = new ProjectsConfigResultItem(page, await configurationList.getConfigCardItemsByIndex(1));

    await configurationItem.clickEditButton();

    const editPopup = new EditConfigPopup(page, await configuration.getEditContainer());

    await editPopup.enterEditText(proposeValue)
      .then(() => editPopup.clickSaveButton());

    //Assert
    await expect(await configurationItem.hasConfigPicture()).toBe(true);
    await expect(await configurationItem.hasConfigDescription()).toBe(true);
    await expect(await configurationItem.hasConfigTitle()).toBe(true);
    await expect(await configurationItem.hasConfigValue()).toBe(true);
    assert.equal(await configurationItem.getConfigTitleText(), purposeExpected,
      'The configuration title is not: ' + purposeExpected);
    assert.equal(await configurationItem.getConfigDescriptionText(), descriptionExpected,
      'The configuration description is not: ' + descriptionExpected);
    assert.equal(await configurationItem.getConfigValueText(), proposeValue,
      'The configuration text value is not: ' + proposeValue);
  });
});