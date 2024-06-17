import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/genai/pages/LoginPage';
import { testUsersSelector } from '../src/utils/testUsersSelector';
import { ProjectPage } from '../src/pages/genai/pages/ProjectsPage';
import { ProjectBuilderPage } from '../src/pages/genai/pages/ProjectBuilderPage';
import { ProjectsResultList } from '../src/pages/genai/components/ProjectsResultList';
import { ProjectsResultItem } from '../src/pages/genai/components/ProjectsResultItem';
import { ProjectsMetrics } from '../src/pages/genai/components/ProjectsMetrics';
import { URLBuilder } from '../src/utils/URLBuilder';

const userSelector = new testUsersSelector();

test.beforeEach(async ({ page }) => {
  URLBuilder.navigateToProjectPage(page);
  await page.waitForLoadState('networkidle');
});

test.describe('Metrics Tests @full-regression @metrics', () => {
  test('Has graphic iteration', async ({ page }, testInfo) => {
    test.slow()
    //Arrange
    const projectBuilder = new ProjectBuilderPage(page);

    //Act
    const project = new ProjectPage(page);
    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));

    await projectItem.clickProjectPicture();

    await projectBuilder.clickMetricsButton();
    const metrics = new ProjectsMetrics(page, await projectBuilder.getMetricsContainer());
    await metrics.selectLastYearFromTimeFilter();

    //Assert
    await expect(await metrics.isInteractionsGraphVisible()).toBe(true);
  });

  test('Has average quality graphic', async ({ page }, testInfo) => {
    test.slow()
    //Arrange
    const projectBuilder = new ProjectBuilderPage(page);

    //Act
    const project = new ProjectPage(page);
    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));

    await projectItem.clickProjectPicture();

    await projectBuilder.clickMetricsButton();
    const metrics = new ProjectsMetrics(page, await projectBuilder.getMetricsContainer());
    await metrics.selectLastYearFromTimeFilter();

    //Assert
    await expect(await metrics.isAverageQualityGraphVisible()).toBe(true);
  });

  test('Has quality per question graphic', async ({ page }, testInfo) => {
    test.slow()
    //Arrange
    const projectBuilder = new ProjectBuilderPage(page);

    //Act
    const project = new ProjectPage(page);
    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));

    await projectItem.clickProjectPicture();

    await projectBuilder.clickMetricsButton();
    const metrics = new ProjectsMetrics(page, await projectBuilder.getMetricsContainer());
    await metrics.selectLastYearFromTimeFilter();

    //Assert
    await expect(await metrics.isQualityPerQuestionGaphVisible()).toBe(true);
  });

  test('Has trending topic graphic', async ({ page }, testInfo) => {
    test.slow()
    //Arrange
    const projectBuilder = new ProjectBuilderPage(page);

    //Act
    const project = new ProjectPage(page);
    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));

    await projectItem.clickProjectPicture();

    await projectBuilder.clickMetricsButton();
    const metrics = new ProjectsMetrics(page, await projectBuilder.getMetricsContainer());
    await metrics.selectLastYearFromTimeFilter();
    //Assert
    await expect(await metrics.isTrendingTopicGraphVisible()).toBe(true);
  });
});