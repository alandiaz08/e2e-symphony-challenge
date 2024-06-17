import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/genai/pages/LoginPage';
import { testUsersSelector } from '../src/utils/testUsersSelector';
import { ProjectPage } from '../src/pages/genai/pages/ProjectsPage';
import { ProjectsResultList } from '../src/pages/genai/components/ProjectsResultList';
import { ProjectsResultItem } from '../src/pages/genai/components/ProjectsResultItem';
import { ProjectBuilderPage } from '../src/pages/genai/pages/ProjectBuilderPage';
import { ProjectsAiChat } from '../src/pages/genai/components/ProjectsAiChat';
import { PreviewPage } from '../src/pages/genai/pages/PreviewPage';
import { URLBuilder } from '../src/utils/URLBuilder';

const userSelector = new testUsersSelector();

test.beforeEach(async ({ page }) => {
  URLBuilder.navigateToProjectPage(page);
  await page.waitForLoadState('networkidle');
});

test.describe('Preview Tests @full-regression @preview', () => {
  test('Happy Path chat with IA', async ({ page }, testInfo) => {
    test.slow()
    //Arrange
    const projectBuilder = new ProjectBuilderPage(page);
    const preview = new PreviewPage(page);
    const messageToChat = 'Hola, quiero que tomes el rol de QA automation, como personalidad';
    const messageForPreview = 'Hola, explicame que es una prueba funcional en una oracion corta';

    //Act
    const project = new ProjectPage(page);
    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));
    
    await projectItem.clickProjectPicture();
    const projecAi = new ProjectsAiChat(page,await projectBuilder.getChatContainer());

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