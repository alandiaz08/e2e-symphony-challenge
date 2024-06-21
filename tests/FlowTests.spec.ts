import { test, expect } from '@playwright/test';
import { testUsersSelector } from '../src/utils/testUsersSelector';
import { ProjectPage } from '../src/pages/genai/pages/ProjectsPage';
import { ProjectsResultList } from '../src/pages/genai/components/ProjectsResultList';
import { ProjectsResultItem } from '../src/pages/genai/components/ProjectsResultItem';
import { ProjectBuilderPage } from '../src/pages/genai/pages/ProjectBuilderPage';
import * as assert from "assert";
import { ProjectsFlows } from '../src/pages/genai/components/ProjectsFlows';
import { URLBuilder } from '../src/utils/URLBuilder';
import { allure } from "allure-playwright";


test.beforeEach(async ({ page }) => {
  URLBuilder.navigateToProjectPage(page);
  await page.waitForLoadState('networkidle');
});

test.describe('Flows Tests @full-regression @flows', () => {
  test('Check if the flow is no empty', async ({ page }, testInfo) => {
    test.slow()

    //Allure report data
    await allure.description(
      "This test attempts to log into the website using a login and a password. And Check if the flow is no empty",
    );
    await allure.owner("Alan Diaz");
    await allure.tags("full-regression", "files");
    await allure.link("https://www.notion.so/laureate-mx/Flow-Tests-aa7176f84a384c5f9d52c7354428f250", "Notion Test Case Related");
    
    //Arrange
    const projectBuilder = new ProjectBuilderPage(page);
    const promptValue = 'Quiero que adopte el rol de QA';
    await allure.parameter("Prompt value expected", promptValue);

    //Act
    const project = new ProjectPage(page);
    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));

    await projectItem.clickProjectPicture();
    await projectBuilder.clickFlowsButton();

    const flows = new ProjectsFlows(page, await projectBuilder.getFlowsContainer());

    //Assert
    await expect(await flows.hasStartButton()).toBe(true);
    assert.equal(await flows.getPromptFieldText(), promptValue,
      'The promt value is not: ' + promptValue);
  });
});