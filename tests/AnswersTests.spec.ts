import { test, expect } from '@playwright/test';
import { ProjectPage } from '../src/pages/genai/pages/ProjectsPage';
import { ProjectsResultList } from '../src/pages/genai/components/ProjectsResultList';
import { ProjectsResultItem } from '../src/pages/genai/components/ProjectsResultItem';
import { ProjectBuilderPage } from '../src/pages/genai/pages/ProjectBuilderPage';
import * as assert from "assert";
import { URLBuilder } from '../src/utils/URLBuilder';
import { allure } from "allure-playwright";
import { ProjectsAnswers } from '../src/pages/genai/components/ProjectsAnswers';
import { ProjectsAnswersConversationResultList } from '../src/pages/genai/components/ProjectsAnswersConversationResultList';
import { ProjectsAnswersConversationResultLItem } from '../src/pages/genai/components/ProjectsAnswersConversationResultLItem';
import { ProjectsAnswersInteractions } from '../src/pages/genai/components/ProjectsAnswersInteractions';

test.use({ storageState: 'playwright.auth/user.json' });

test.beforeEach(async ({ page }) => {
  URLBuilder.navigateToProjectPage(page);
  await page.waitForLoadState('networkidle');
});

test.describe.only('Answers Tests @full-regression @answers', () => {
  test('Has conversation ID', async ({ page }, testInfo) => {
    test.slow()
    
    //Allure report data
    await allure.description(
      "This test attempts to log into the website using a login and a password. And checks if the conversation ID is displayed.",
    );
    await allure.owner("Alan Diaz");
    await allure.tags("full-regression", "answers");
    await allure.link("https://www.notion.so/laureate-mx/Answers-Tests-c58e0a2740d34367b6fd3304dea2d87c", "Notion Test Case Related");
    //Arrange
    const projectBuilder = new ProjectBuilderPage(page);

    //Act
    const project = new ProjectPage(page);
    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));

    await projectItem.clickProjectPicture();
    await projectBuilder.clickAnswersButton();

    const answers = new ProjectsAnswers(page, await projectBuilder.getAnswersContainer());
    await answers.selectLastYearFromTimeFilter()

    const conversationList = new ProjectsAnswersConversationResultList(page, await answers.getConversationListContainer());
    const conversationItem = new ProjectsAnswersConversationResultLItem(page, await conversationList.getConversationCardItemsByIndex(1));

    //Assert
    await expect(await conversationItem.hasConversationId()).toBe(true);

  });

  test('Has conversation interaction number', async ({ page }, testInfo) => {
    test.slow()
    
    //Allure report data
    await allure.description(
      "This test attempts to log into the website using a login and a password. And checks if the conversation interaction number is displayed.",
    );
    await allure.owner("Alan Diaz");
    await allure.tags("full-regression", "answers");
    await allure.link("https://www.notion.so/laureate-mx/Answers-Tests-c58e0a2740d34367b6fd3304dea2d87c", "Notion Test Case Related");
    //Arrange
    const projectBuilder = new ProjectBuilderPage(page);

    //Act
    const project = new ProjectPage(page);
    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));

    await projectItem.clickProjectPicture();
    await projectBuilder.clickAnswersButton();

    const answers = new ProjectsAnswers(page, await projectBuilder.getAnswersContainer());
    await answers.selectLastYearFromTimeFilter()

    const conversationList = new ProjectsAnswersConversationResultList(page, await answers.getConversationListContainer());
    const conversationItem = new ProjectsAnswersConversationResultLItem(page, await conversationList.getConversationCardItemsByIndex(1));

    //Assert
    await expect(await conversationItem.hasInteractionNumber()).toBe(true);
  });

  test('Has IA Message', async ({ page }, testInfo) => {
    test.slow()
    
    //Allure report data
    await allure.description(
      "This test attempts to log into the website using a login and a password. And checks if the IA message is displayed.",
    );
    await allure.owner("Alan Diaz");
    await allure.tags("full-regression", "answers");
    await allure.link("https://www.notion.so/laureate-mx/Answers-Tests-c58e0a2740d34367b6fd3304dea2d87c", "Notion Test Case Related");
    //Arrange
    const projectBuilder = new ProjectBuilderPage(page);

    //Act
    const project = new ProjectPage(page);
    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));

    await projectItem.clickProjectPicture();
    await projectBuilder.clickAnswersButton();

    const answers = new ProjectsAnswers(page, await projectBuilder.getAnswersContainer());
    await answers.selectLastYearFromTimeFilter()

    const conversationList = new ProjectsAnswersConversationResultList(page, await answers.getConversationListContainer());
    const conversationItem = new ProjectsAnswersConversationResultLItem(page, await conversationList.getConversationCardItemsByIndex(1));

    await conversationItem.clickConversationId();

    const answersInteractions = new ProjectsAnswersInteractions(page, await answers.getConversationContainer());


    //Assert
    await expect(await answersInteractions.hasIaMessage()).toBe(true);
  });

  test('Getting my IA Message', async ({ page }, testInfo) => {
    test.slow()
    
    //Allure report data
    await allure.description(
      "This test attempts to log into the website using a login and a password. And checks if my IA message is correct.",
    );
    await allure.owner("Alan Diaz");
    await allure.tags("full-regression", "answers");
    await allure.link("https://www.notion.so/laureate-mx/Answers-Tests-c58e0a2740d34367b6fd3304dea2d87c", "Notion Test Case Related");
    //Arrange
    const projectBuilder = new ProjectBuilderPage(page);
    const myMessage = 'Hola, quiero que tomes el rol de QA automation, como personalidad';
    
    //Allure parameter data
    await allure.parameter("My Message expected", myMessage);

    //Act
    const project = new ProjectPage(page);
    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));

    await projectItem.clickProjectPicture();
    await projectBuilder.clickAnswersButton();

    const answers = new ProjectsAnswers(page, await projectBuilder.getAnswersContainer());
    await answers.selectLastYearFromTimeFilter()

    const conversationList = new ProjectsAnswersConversationResultList(page, await answers.getConversationListContainer());
    const conversationItem = new ProjectsAnswersConversationResultLItem(page, await conversationList.getConversationCardItemsByIndex(1));

    await conversationItem.clickConversationId();

    const answersInteractions = new ProjectsAnswersInteractions(page, await answers.getConversationContainer());


    //Assert
    assert.equal(await answersInteractions.getMyMessageText(), myMessage,
    'My message to the chat is not: ' + myMessage);
  });
});