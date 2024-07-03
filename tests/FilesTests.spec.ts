import { test, expect } from '@playwright/test';
import { ProjectPage } from '../src/pages/genai/pages/ProjectsPage';
import { ProjectsResultList } from '../src/pages/genai/components/ProjectsResultList';
import { ProjectsResultItem } from '../src/pages/genai/components/ProjectsResultItem';
import { ProjectBuilderPage } from '../src/pages/genai/pages/ProjectBuilderPage';
import { ProjectsFiles } from '../src/pages/genai/components/ProjectsFiles';
import { ProjectsFileUpdateFilePopup } from '../src/pages/genai/components/ProjectsFileUpdateFilePopup';
import { ProjectsFilesResultList } from '../src/pages/genai/components/ProjectsFilesResultList';
import { ProjectsFilesResultItem } from '../src/pages/genai/components/ProjectsFilesResultItem';
import * as assert from "assert";
import { URLBuilder } from '../src/utils/URLBuilder';
import { allure } from "allure-playwright";

test.use({ storageState: 'playwright.auth/user.json' });

test.beforeEach(async ({ page }) => {
  URLBuilder.navigateToProjectPage(page);
  await page.waitForLoadState('networkidle');
});

test.describe('Files Tests @full-regression @files', () => {
  test('Upload a file successfully', async ({ page }, testInfo) => {
    test.slow()
    
    //Allure report data
    await allure.description(
      "This test attempts to log into the website using a login and a password. And upload a file successfully",
    );
    await allure.owner("Alan Diaz");
    await allure.tags("full-regression", "files");
    await allure.link("https://www.notion.so/laureate-mx/Files-Tests-9d66c1794ff04afaa1c2d6339ebe3956", "Notion Test Case Related");
    //Arrange
    const projectBuilder = new ProjectBuilderPage(page);
    const file = 'PDF_Test.pdf'
    const fileMessageExpected = 'Agrega contenido y proporciona a tu chat de IA la información necesaria para dar respuestas de calidad.'
    
    //Allure parameter data
    await allure.parameter("File expected", file);
    await allure.parameter("File message Expected", fileMessageExpected);

    //Act
    const project = new ProjectPage(page);
    const projectList = new ProjectsResultList(page, await project.getProjectsListContainer());
    const projectItem = new ProjectsResultItem(page, await projectList.getProjectsItemsByIndex(1));

    await projectItem.clickProjectPicture();
    await projectBuilder.clickFilesButton();

    const files = new ProjectsFiles(page, await projectBuilder.getFilesContainer());
    await files.clickUploadFileButton();

    //Assert
    await expect(await files.hasUploadFileButton()).toBe(true);

    const updateFilePopup = new ProjectsFileUpdateFilePopup(page, await files.getUploadFilePopupContainer());
    await updateFilePopup.uploadProjectFile(file)
      .then(() => updateFilePopup.clickUploadFileButton());

    const fileList = new ProjectsFilesResultList(page, await files.getFileListContainer());
    const fileItems = new ProjectsFilesResultItem(page, await fileList.getFileItemsByIndex(0));

    //Assert
    await expect(await fileItems.hasFilePicture()).toBe(true);
    await expect(await fileItems.hasFileName()).toBe(true);
    await expect(await fileItems.hasFileWeight()).toBe(true);

    //Act II Delete File
    await fileItems.clickDeleteButton();

    //Assert II
    await expect(await files.hasFileMessage()).toBe(true);
    assert.equal(await files.getFileMessageText(), fileMessageExpected,
      'The file message is not: ' + fileMessageExpected);
  });
});