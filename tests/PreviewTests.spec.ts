import { test, expect } from '@playwright/test';
import { testUsersSelector } from '../src/utils/testUsersSelector';
import { ProjectPage } from '../src/pages/genai/pages/ProjectsPage';
import { ProjectsResultList } from '../src/pages/genai/components/ProjectsResultList';
import { ProjectsResultItem } from '../src/pages/genai/components/ProjectsResultItem';
import { ProjectBuilderPage } from '../src/pages/genai/pages/ProjectBuilderPage';
import { ProjectsAiChat } from '../src/pages/genai/components/ProjectsAiChat';
import { PreviewPage } from '../src/pages/genai/pages/PreviewPage';
import { URLBuilder } from '../src/utils/URLBuilder';
import { allure } from "allure-playwright";


test.beforeEach(async ({ page }) => {
  URLBuilder.navigateToProjectPage(page);
  await page.waitForLoadState('networkidle');
});

test.describe('Preview Tests @full-regression @preview', () => {
  test('Happy Path chat with IA', async ({ page }, testInfo) => {
    test.slow()

    //Allure report data
    await allure.description(
      "This test attempts to log into the website using a login and a password. And Check if the Happy Path chat with IA",
    );
    await allure.owner("Alan Diaz");
    await allure.tags("full-regression", "preview");
    await allure.link("https://www.notion.so/laureate-mx/Metrics-Tests-c1538106348d40cd8e3bc1886e146e20", "Notion Test Case Related");

    //Arrange
    const projectBuilder = new ProjectBuilderPage(page);
    const preview = new PreviewPage(page);
    const messageToChat = 'Hola, quiero que tomes el rol de QA automation, como personalidad';
    const messageForPreview = 'Hola, explicame que es una prueba funcional en una oracion corta';

    //Allure parameter data
    await allure.parameter("Message to chat expected", messageToChat);

    //Act
    const project = new ProjectPage(page);
    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));

    await projectItem.clickProjectPicture();
    const projecAi = new ProjectsAiChat(page, await projectBuilder.getChatContainer());

    await projecAi.enterMessage(messageToChat)
      .then(() => projecAi.clickSendButton());

    //Assert
    await expect(await projecAi.isMyMessageVisible()).toBe(true);
    await expect(await projecAi.isIaMessageVisible()).toBe(true);

    /*
        await projectBuilder.clickPreviewButton()
          .then(() => preview.enterMessage(messageForPreview))
          .then(() => preview.clickSendButton());
    
        //Assert
        await expect(await preview.isMyMessageVisible()).toBe(true);
        await expect(await preview.isIaMessageVisible()).toBe(true);
        */
  });

});