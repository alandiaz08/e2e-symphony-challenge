import { test, expect } from '@playwright/test';
import { ProjectPage } from '../src/pages/genai/pages/ProjectsPage';
import { ProjectBuilderPage } from '../src/pages/genai/pages/ProjectBuilderPage';
import { ProjectsResultList } from '../src/pages/genai/components/ProjectsResultList';
import { ProjectsResultItem } from '../src/pages/genai/components/ProjectsResultItem';
import { ProjectsMetrics } from '../src/pages/genai/components/ProjectsMetrics';
import { URLBuilder } from '../src/utils/URLBuilder';
import { allure } from "allure-playwright";

test.beforeEach(async ({ page }) => {
  URLBuilder.navigateToProjectPage(page);
  await page.waitForLoadState('networkidle');
});

test.describe('Metrics Tests @full-regression @metrics', () => {
  test('Has graphic iteration', async ({ page }, testInfo) => {
    test.slow()

    //Allure report data
    await allure.description(
      "This test attempts to log into the website using a login and a password. And Check if the graphic iteration is displayed.",
    );
    await allure.owner("Alan Diaz");
    await allure.tags("full-regression", "metrics");
    await allure.link("https://www.notion.so/laureate-mx/Metrics-Tests-c1538106348d40cd8e3bc1886e146e20", "Notion Test Case Related");

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

    //Allure report data
    await allure.description(
      "This test attempts to log into the website using a login and a password. And Check if the average quality graphic is displayed.",
    );
    await allure.owner("Alan Diaz");
    await allure.tags("full-regression", "metrics");
    await allure.link("https://www.notion.so/laureate-mx/Metrics-Tests-c1538106348d40cd8e3bc1886e146e20", "Notion Test Case Related");    

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

    //Allure report data
    await allure.description(
      "This test attempts to log into the website using a login and a password. And Check if the quality per question graphic is displayed.",
    );
    await allure.owner("Alan Diaz");
    await allure.tags("full-regression", "metrics");
    await allure.link("https://www.notion.so/laureate-mx/Metrics-Tests-c1538106348d40cd8e3bc1886e146e20", "Notion Test Case Related"); 

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

    //Allure report data
    await allure.description(
      "This test attempts to log into the website using a login and a password. And Check if the trending topic graphic is displayed.",
    );
    await allure.owner("Alan Diaz");
    await allure.tags("full-regression", "metrics");
    await allure.link("https://www.notion.so/laureate-mx/Metrics-Tests-c1538106348d40cd8e3bc1886e146e20", "Notion Test Case Related");

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