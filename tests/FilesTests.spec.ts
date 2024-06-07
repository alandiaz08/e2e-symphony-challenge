import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/genai/pages/LoginPage';
import { testUsersSelector } from '../src/utils/testUsersSelector';
import { ProjectPage } from '../src/pages/genai/pages/ProjectsPage';
import { ProjectsResultList } from '../src/pages/genai/components/ProjectsResultList';
import { ProjectsResultItem } from '../src/pages/genai/components/ProjectsResultItem';
import { ProjectBuilderPage } from '../src/pages/genai/pages/ProjectBuilderPage';
import { ProjectsFiles } from '../src/pages/genai/components/ProjectsFiles';
import { ProjectsFileUpdateFilePopup } from '../src/pages/genai/components/ProjectsFileUpdateFilePopup';

const userSelector = new testUsersSelector();

test.describe('Files Tests @full-regression @files', () => {
  test.skip('Upload a file successfully', async ({ page }, testInfo) => {
    test.slow()
    //Arrange
    const user = userSelector.getUserByDescription('qasuperuser');
    const login = new LoginPage(page);
    const projectBuilder = new ProjectBuilderPage(page);
    const file = 'TODO_Auditoria.pdf'

    //Act
    await login.navigateToLoginPage();

    await login.inputUserName(user.email)
      .then(() => login.inputPassword(user.password))
      .then(() => login.signUpNow())

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
    await updateFilePopup.uploadProjectFile(file);

  });
});