import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/genai/pages/LoginPage';
import { testUsersSelector } from '../src/utils/testUsersSelector';
import { ProjectPage } from '../src/pages/genai/pages/ProjectsPage';
import { ProjectBuilderPage } from '../src/pages/genai/pages/ProjectBuilderPage';
import { ProjectsResultList } from '../src/pages/genai/components/ProjectsResultList';
import { ProjectsResultItem } from '../src/pages/genai/components/ProjectsResultItem';
import { ProjectsIntegrations } from '../src/pages/genai/components/ProjectsIntegrations';
import { ProjectsIntegrationsCardsResultList } from '../src/pages/genai/components/ProjectsIntegrationsCardsResultList';
import { ProjectsIntegrationsCardsResultItem } from '../src/pages/genai/components/ProjectsIntegrationsCardsResultItem';
import { SelectTypeOfIntegrationModal } from '../src/pages/genai/components/SelectTypeOfIntegrationModal';
import { CustomApiConnectModal } from '../src/pages/genai/components/CustomApiConnectModal';
import { ApiConnectionPage } from '../src/pages/genai/pages/ApiConnectionPage';
import * as assert from "assert";
import { DeleteApiPopup } from '../src/pages/genai/components/DeleteApiPopup';

const userSelector = new testUsersSelector();

test.describe('Integrations Tests @full-regression @integrations', () => {
  test('Has Whatsapp integration card Logo', async ({ page }, testInfo) => {
    test.slow()
    //Arrange
    const user = userSelector.getUserByDescription('qasuperuser');
    const login = new LoginPage(page);
    const projectBuilder = new ProjectBuilderPage(page);

    //Act
    await login.navigateToLoginPage();

    await login.inputUserName(user.email)
      .then(() => login.inputPassword(user.password))
      .then(() => login.signUpNow())

    const project = new ProjectPage(page);
    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));

    await projectItem.clickProjectPicture();

    await projectBuilder.clickIntegrationsButton();
    const integrations = new ProjectsIntegrations(page, await projectBuilder.getIntegrationsContainer());
    const integrationsList = new ProjectsIntegrationsCardsResultList(page, await integrations.getIntegrationCardListContainer());
    const integrationsItem = new ProjectsIntegrationsCardsResultItem(page, await integrationsList.getIntegrationsCardItemsByIndex(0));

    //Assert
    await expect(await integrationsItem.isIntegrationPictureVisible()).toBe(true);
  });

  test('Has Whatsapp integration card title and phone number', async ({ page }, testInfo) => {
    test.slow()
    //Arrange
    const user = userSelector.getUserByDescription('qasuperuser');
    const login = new LoginPage(page);
    const projectBuilder = new ProjectBuilderPage(page);

    //Act
    await login.navigateToLoginPage();

    await login.inputUserName(user.email)
      .then(() => login.inputPassword(user.password))
      .then(() => login.signUpNow())

    const project = new ProjectPage(page);
    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));

    await projectItem.clickProjectPicture();

    await projectBuilder.clickIntegrationsButton();
    const integrations = new ProjectsIntegrations(page, await projectBuilder.getIntegrationsContainer());
    const integrationsList = new ProjectsIntegrationsCardsResultList(page, await integrations.getIntegrationCardListContainer());
    const integrationsItem = new ProjectsIntegrationsCardsResultItem(page, await integrationsList.getIntegrationsCardItemsByIndex(0));

    //Assert
    await expect(await integrationsItem.isIntegrationNameVisible()).toBe(true);
  });

  test('Has Whatsapp integration card description', async ({ page }, testInfo) => {
    test.slow()
    //Arrange
    const user = userSelector.getUserByDescription('qasuperuser');
    const login = new LoginPage(page);
    const projectBuilder = new ProjectBuilderPage(page);

    //Act
    await login.navigateToLoginPage();

    await login.inputUserName(user.email)
      .then(() => login.inputPassword(user.password))
      .then(() => login.signUpNow())

    const project = new ProjectPage(page);
    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));

    await projectItem.clickProjectPicture();

    await projectBuilder.clickIntegrationsButton();
    const integrations = new ProjectsIntegrations(page, await projectBuilder.getIntegrationsContainer());
    const integrationsList = new ProjectsIntegrationsCardsResultList(page, await integrations.getIntegrationCardListContainer());
    const integrationsItem = new ProjectsIntegrationsCardsResultItem(page, await integrationsList.getIntegrationsCardItemsByIndex(0));

    //Assert
    await expect(await integrationsItem.isIntegrationNameVisible()).toBe(true);
  });

  test('Has Whatsapp integration card connect button', async ({ page }, testInfo) => {
    test.slow()
    //Arrange
    const user = userSelector.getUserByDescription('qasuperuser');
    const login = new LoginPage(page);
    const projectBuilder = new ProjectBuilderPage(page);

    //Act
    await login.navigateToLoginPage();

    await login.inputUserName(user.email)
      .then(() => login.inputPassword(user.password))
      .then(() => login.signUpNow())

    const project = new ProjectPage(page);
    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));

    await projectItem.clickProjectPicture();

    await projectBuilder.clickIntegrationsButton();
    const integrations = new ProjectsIntegrations(page, await projectBuilder.getIntegrationsContainer());
    const integrationsList = new ProjectsIntegrationsCardsResultList(page, await integrations.getIntegrationCardListContainer());
    const integrationsItem = new ProjectsIntegrationsCardsResultItem(page, await integrationsList.getIntegrationsCardItemsByIndex(0));

    //Assert
    await expect(await integrationsItem.isConnectButtonVisible()).toBe(true);
  });

  test('Has Whatsapp integration card learn more button', async ({ page }, testInfo) => {
    test.slow()
    //Arrange
    const user = userSelector.getUserByDescription('qasuperuser');
    const login = new LoginPage(page);
    const projectBuilder = new ProjectBuilderPage(page);

    //Act
    await login.navigateToLoginPage();

    await login.inputUserName(user.email)
      .then(() => login.inputPassword(user.password))
      .then(() => login.signUpNow())

    const project = new ProjectPage(page);
    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));

    await projectItem.clickProjectPicture();

    await projectBuilder.clickIntegrationsButton();
    const integrations = new ProjectsIntegrations(page, await projectBuilder.getIntegrationsContainer());
    const integrationsList = new ProjectsIntegrationsCardsResultList(page, await integrations.getIntegrationCardListContainer());
    const integrationsItem = new ProjectsIntegrationsCardsResultItem(page, await integrationsList.getIntegrationsCardItemsByIndex(0));

    //Assert
    await expect(await integrationsItem.isLearnMoreButtonVisible()).toBe(true);
  });

  test('Has Genesys Cloud integration card Logo', async ({ page }, testInfo) => {
    test.slow()
    //Arrange
    const user = userSelector.getUserByDescription('qasuperuser');
    const login = new LoginPage(page);
    const projectBuilder = new ProjectBuilderPage(page);

    //Act
    await login.navigateToLoginPage();

    await login.inputUserName(user.email)
      .then(() => login.inputPassword(user.password))
      .then(() => login.signUpNow())

    const project = new ProjectPage(page);
    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));

    await projectItem.clickProjectPicture();

    await projectBuilder.clickIntegrationsButton();
    const integrations = new ProjectsIntegrations(page, await projectBuilder.getIntegrationsContainer());
    const integrationsList = new ProjectsIntegrationsCardsResultList(page, await integrations.getIntegrationCardListContainer());
    const integrationsItem = new ProjectsIntegrationsCardsResultItem(page, await integrationsList.getIntegrationsCardItemsByIndex(1));

    //Assert
    await expect(await integrationsItem.isIntegrationPictureVisible()).toBe(true);
  });

  test('Has Genesys Cloud integration card title and phone number', async ({ page }, testInfo) => {
    test.slow()
    //Arrange
    const user = userSelector.getUserByDescription('qasuperuser');
    const login = new LoginPage(page);
    const projectBuilder = new ProjectBuilderPage(page);

    //Act
    await login.navigateToLoginPage();

    await login.inputUserName(user.email)
      .then(() => login.inputPassword(user.password))
      .then(() => login.signUpNow())

    const project = new ProjectPage(page);
    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));

    await projectItem.clickProjectPicture();

    await projectBuilder.clickIntegrationsButton();
    const integrations = new ProjectsIntegrations(page, await projectBuilder.getIntegrationsContainer());
    const integrationsList = new ProjectsIntegrationsCardsResultList(page, await integrations.getIntegrationCardListContainer());
    const integrationsItem = new ProjectsIntegrationsCardsResultItem(page, await integrationsList.getIntegrationsCardItemsByIndex(1));

    //Assert
    await expect(await integrationsItem.isIntegrationNameVisible()).toBe(true);
  });

  test('Has Genesys Cloud integration card description', async ({ page }, testInfo) => {
    test.slow()
    //Arrange
    const user = userSelector.getUserByDescription('qasuperuser');
    const login = new LoginPage(page);
    const projectBuilder = new ProjectBuilderPage(page);

    //Act
    await login.navigateToLoginPage();

    await login.inputUserName(user.email)
      .then(() => login.inputPassword(user.password))
      .then(() => login.signUpNow())

    const project = new ProjectPage(page);
    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));

    await projectItem.clickProjectPicture();

    await projectBuilder.clickIntegrationsButton();
    const integrations = new ProjectsIntegrations(page, await projectBuilder.getIntegrationsContainer());
    const integrationsList = new ProjectsIntegrationsCardsResultList(page, await integrations.getIntegrationCardListContainer());
    const integrationsItem = new ProjectsIntegrationsCardsResultItem(page, await integrationsList.getIntegrationsCardItemsByIndex(1));

    //Assert
    await expect(await integrationsItem.isIntegrationNameVisible()).toBe(true);
  });

  test('Has Genesys Cloud integration card connect button', async ({ page }, testInfo) => {
    test.slow()
    //Arrange
    const user = userSelector.getUserByDescription('qasuperuser');
    const login = new LoginPage(page);
    const projectBuilder = new ProjectBuilderPage(page);

    //Act
    await login.navigateToLoginPage();

    await login.inputUserName(user.email)
      .then(() => login.inputPassword(user.password))
      .then(() => login.signUpNow())

    const project = new ProjectPage(page);
    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));

    await projectItem.clickProjectPicture();

    await projectBuilder.clickIntegrationsButton();
    const integrations = new ProjectsIntegrations(page, await projectBuilder.getIntegrationsContainer());
    const integrationsList = new ProjectsIntegrationsCardsResultList(page, await integrations.getIntegrationCardListContainer());
    const integrationsItem = new ProjectsIntegrationsCardsResultItem(page, await integrationsList.getIntegrationsCardItemsByIndex(1));

    //Assert
    await expect(await integrationsItem.isConnectButtonVisible()).toBe(true);
  });

  test('Has Genesys Cloud integration card learn more button', async ({ page }, testInfo) => {
    test.slow()
    //Arrange
    const user = userSelector.getUserByDescription('qasuperuser');
    const login = new LoginPage(page);
    const projectBuilder = new ProjectBuilderPage(page);

    //Act
    await login.navigateToLoginPage();

    await login.inputUserName(user.email)
      .then(() => login.inputPassword(user.password))
      .then(() => login.signUpNow())

    const project = new ProjectPage(page);
    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));

    await projectItem.clickProjectPicture();

    await projectBuilder.clickIntegrationsButton();
    const integrations = new ProjectsIntegrations(page, await projectBuilder.getIntegrationsContainer());
    const integrationsList = new ProjectsIntegrationsCardsResultList(page, await integrations.getIntegrationCardListContainer());
    const integrationsItem = new ProjectsIntegrationsCardsResultItem(page, await integrationsList.getIntegrationsCardItemsByIndex(1));

    //Assert
    await expect(await integrationsItem.isLearnMoreButtonVisible()).toBe(true);
  });

  test('Create an API and Delete it', async ({ page }, testInfo) => {
    test.slow()
    //Arrange
    const user = userSelector.getUserByDescription('qasuperuser');
    const login = new LoginPage(page);
    const projectBuilder = new ProjectBuilderPage(page);
    const apiConnection = new ApiConnectionPage(page);
    const project = new ProjectPage(page);
    const nameValue = 'Test Example';
    const descriptionValue = 'This is a test Description example';
    const endpointValue = 'https://postman-echo.com/get';
    const requestValue = "GET"

    //Act
    await login.navigateToLoginPage();

    await login.inputUserName(user.email)
      .then(() => login.inputPassword(user.password))
      .then(() => login.signUpNow())

    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));

    await projectItem.clickProjectPicture();

    await projectBuilder.clickIntegrationsButton();
    const integrations = new ProjectsIntegrations(page, await projectBuilder.getIntegrationsContainer());
    const integrationsList = new ProjectsIntegrationsCardsResultList(page, await integrations.getIntegrationCardListContainer());

    //In the case that we current have a API, we will delete it and create a new one
    if (await integrationsList.isIntegrationCardPresentByTitle(nameValue)) {
      const integrationsItem = new ProjectsIntegrationsCardsResultItem(page, await integrationsList.getIntegrationCardByTitle(nameValue));
      await integrationsItem.clickSeeMoreDetailsButton()
        .then(() => apiConnection.clickActionAndDelete())
        .then(() => apiConnection.getDeleteApiPopupContainerContainer());
      const deleteApiPopup = new DeleteApiPopup(page, await apiConnection.getDeleteApiPopupContainerContainer());
      await deleteApiPopup.clickDeleteButton();
      await projectBuilder.clickIntegrationsButton();
    }

    await integrations.clickCustomApiConnectorButton();

    const typeOfIntegrationModal = new SelectTypeOfIntegrationModal(page, await integrations.getConnectCustomApiModalContainer());
    await typeOfIntegrationModal.clickApiButton();

    const customApiConnect = new CustomApiConnectModal(page, await projectBuilder.getConnectApiContainer());

    //Assert
    await expect(await customApiConnect.isTitleVisible()).toBe(true);
    await expect(await customApiConnect.isDescriptionVisible()).toBe(true);
    await expect(await customApiConnect.isSaveButtonVisible()).toBe(true);

    // Act II
    await customApiConnect.enterName(nameValue)
      .then(() => customApiConnect.enterDescription(descriptionValue))
      .then(() => customApiConnect.selectRequest(requestValue))
      .then(() => customApiConnect.enterEndpoint(endpointValue))
      .then(() => customApiConnect.clickSaveButton());

    //Assert II
    await expect(await apiConnection.isTitleVisible()).toBe(true);
    assert.equal(await apiConnection.getTitleText(), nameValue,
      'The title name is not: ' + nameValue);
    await expect(await apiConnection.isDescriptionVisible()).toBe(true);
    assert.equal(await apiConnection.getDescriptionText(), descriptionValue,
      'The description is not: ' + descriptionValue);

    // Act III
    apiConnection.clickActionAndDelete();
    const deleteApiPopup = new DeleteApiPopup(page, await apiConnection.getDeleteApiPopupContainerContainer());
    await deleteApiPopup.clickDeleteButton();

    //Assert
    await expect(await project.isTitleVisible()).toBe(true);
  });

  test.skip('Create a Data Base and Delete it', async ({ page }, testInfo) => {
    //Arrange
    const user = userSelector.getUserByDescription('qasuperuser');
    const login = new LoginPage(page);
    const projectBuilder = new ProjectBuilderPage(page);
    const apiConnection = new ApiConnectionPage(page);
    const project = new ProjectPage(page);
    const dataType = 'My SQL';
    const hostAddressValue = 'localhost';
    const port = "25565";
    const dataBaseName = 'database_demo';
    const userName = 'root';
    const password = 'chatbuilder2024';

    //Act
    await login.navigateToLoginPage();

    await login.inputUserName(user.email)
      .then(() => login.inputPassword(user.password))
      .then(() => login.signUpNow())

    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));

    await projectItem.clickProjectPicture();

    await projectBuilder.clickIntegrationsButton();
    const integrations = new ProjectsIntegrations(page, await projectBuilder.getIntegrationsContainer());
    const integrationsList = new ProjectsIntegrationsCardsResultList(page, await integrations.getIntegrationCardListContainer());

    //In the case that we current have a API, we will delete it and create a new one
    if (await integrationsList.isIntegrationCardPresentByTitle(userName)) {
      const integrationsItem = new ProjectsIntegrationsCardsResultItem(page, await integrationsList.getIntegrationCardByTitle(nameValue));
      await integrationsItem.clickSeeMoreDetailsButton()
        .then(() => apiConnection.clickActionAndDelete())
        .then(() => apiConnection.getDeleteApiPopupContainerContainer());
      const deleteApiPopup = new DeleteApiPopup(page, await apiConnection.getDeleteApiPopupContainerContainer());
      await deleteApiPopup.clickDeleteButton();
      await projectBuilder.clickIntegrationsButton();
    }
  });
});