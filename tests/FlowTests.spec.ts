import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/genai/pages/LoginPage';
import { testUsersSelector } from '../src/utils/testUsersSelector';
import { ProjectPage } from '../src/pages/genai/pages/ProjectsPage';
import { ProjectsResultList } from '../src/pages/genai/components/ProjectsResultList';
import { ProjectsResultItem } from '../src/pages/genai/components/ProjectsResultItem';
import { ProjectBuilderPage } from '../src/pages/genai/pages/ProjectBuilderPage';
import * as assert from "assert";
import { ProjectsFlows } from '../src/pages/genai/components/ProjectsFlows';
import { URLBuilder } from '../src/utils/URLBuilder';

const userSelector = new testUsersSelector();

test.beforeEach(async ({ page }) => {
  URLBuilder.navigateToProjectPage(page);
  await page.waitForLoadState('networkidle');
});

test.describe('Flows Tests @full-regression @flows', () => {
  test('Check if the flow is no empty', async ({ page }, testInfo) => {
    test.slow()
    //Arrange
    const projectBuilder = new ProjectBuilderPage(page);
    const promptValue = 'Quiero que adopte el rol de QA'

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