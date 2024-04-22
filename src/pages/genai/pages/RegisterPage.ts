import { Locator, Page } from "@playwright/test";
import { basePage } from "../../base/basePage";

/**
 * Class for RegisterPage
 */
export class RegisterPage extends basePage {
  private readonly userNameField: Locator;
  private readonly fullNameField: Locator;
  private readonly passwordField: Locator;
  private readonly emailField: Locator;
  private readonly continueButton: Locator;
  private readonly agreeTermsCheckbox: Locator;
  private readonly usernameIsRequiredMessage: Locator;
  private readonly passwordIsRequiredMessage: Locator;
  private readonly fullNameIsRequiredMessage: Locator;
  private readonly emailIsRequiredMessage: Locator;
  private readonly loginButton: Locator;




  constructor(page: Page) {
    super(page);
    this.userNameField = this.page.locator('');
    this.fullNameField = this.page.locator('');
    this.passwordField = this.page.locator('');
    this.emailField = this.page.locator('');
    this.continueButton = this.page.locator('');
    this.agreeTermsCheckbox = this.page.locator('');
    this.usernameIsRequiredMessage = this.page.locator('');
    this.passwordIsRequiredMessage = this.page.locator('');
    this.fullNameIsRequiredMessage = this.page.locator('');
    this.emailIsRequiredMessage = this.page.locator('');
    this.loginButton = this.page.locator('');    
  }

/**
 * Enters text into the user name field.
 * @param {string} userName The user name to be entered.
 */
async enterUserName(userName: string): Promise<void> {
  this.logger.info('Entering user name: ' + userName);
  await this.userNameField.waitFor({ state: 'attached' });
  await this.userNameField.fill(userName);
}

/**
 * Enters text into the full name field.
 * @param {string} fullName The full name to be entered.
 */
async enterFullName(fullName: string): Promise<void> {
  this.logger.info('Entering full name: ' + fullName);
  await this.fullNameField.waitFor({ state: 'attached' });
  await this.fullNameField.fill(fullName);
}

/**
 * Enters text into the password field.
 * @param {string} password The password to be entered.
 */
async enterPassword(password: string): Promise<void> {
  this.logger.info('Entering password');
  await this.passwordField.waitFor({ state: 'attached' });
  await this.passwordField.fill(password);
}

/**
 * Enters text into the email field.
 * @param {string} email The email address to be entered.
 */
async enterEmail(email: string): Promise<void> {
  this.logger.info('Entering email: ' + email);
  await this.emailField.waitFor({ state: 'attached' });
  await this.emailField.fill(email);
}

/**
 * Clicks on the continue button.
 */
async clickContinueButton(): Promise<void> {
  this.logger.info('Clicking on the continue button');
  await this.continueButton.waitFor({ state: 'attached' });
  await this.continueButton.click();
}

/**
 * Checks if the continue button is visible.
 * @return {Promise<boolean>} True if visible, false otherwise.
 */
async isContinueButtonVisible(): Promise<boolean> {
  this.logger.info('Checking if the continue button is visible');
  try {
    await this.continueButton.waitFor({ state: 'attached' });
    return await this.continueButton.isVisible();
  } catch (error) {
    this.logger.error('Error while checking visibility of the continue button:', error);
    return false;
  }
}

/**
 * Checks the agree terms checkbox.
 */
async checkAgreeTermsCheckbox(): Promise<void> {
  this.logger.info('Checking the agree terms checkbox');
  await this.agreeTermsCheckbox.waitFor({ state: 'attached' });
  await this.agreeTermsCheckbox.check();
}

/**
 * Unchecks the agree terms checkbox.
 */
async uncheckAgreeTermsCheckbox(): Promise<void> {
  this.logger.info('Unchecking the agree terms checkbox');
  await this.agreeTermsCheckbox.waitFor({ state: 'attached' });
  await this.agreeTermsCheckbox.uncheck();
}

/**
 * Checks if the "username is required" message is visible.
 * @return {Promise<boolean>} True if visible, false otherwise.
 */
async hasUsernameIsRequiredMessage(): Promise<boolean> {
  this.logger.info('Checking if the "username is required" message is visible');
  try {
    await this.usernameIsRequiredMessage.waitFor({ state: 'attached' });
    return await this.usernameIsRequiredMessage.isVisible();
  } catch (error) {
    this.logger.error('Error while checking for "username is required" message visibility:', error);
    return false;
  }
}

/**
 * Retrieves the text of the "username is required" message.
 * @return {Promise<string | null>} The text content.
 */
async getUsernameIsRequiredMessage(): Promise<string | null> {
  this.logger.info('Getting the "username is required" message text');
  await this.usernameIsRequiredMessage.waitFor({ state: 'attached' });
  return await this.usernameIsRequiredMessage.textContent();
}

/**
 * Checks if the "password is required" message is visible.
 * @return {Promise<boolean>} True if visible, false otherwise.
 */
async hasPasswordIsRequiredMessage(): Promise<boolean> {
  this.logger.info('Checking if the "password is required" message is visible');
  try {
    await this.passwordIsRequiredMessage.waitFor({ state: 'attached' });
    return await this.passwordIsRequiredMessage.isVisible();
  } catch (error) {
    this.logger.error('Error while checking for "password is required" message visibility:', error);
    return false;
  }
}

/**
 * Retrieves the text of the "password is required" message.
 * @return {Promise<string | null>} The text content.
 */
async getPasswordIsRequiredMessage(): Promise<string | null> {
  this.logger.info('Getting the "password is required" message text');
  await this.passwordIsRequiredMessage.waitFor({ state: 'attached' });
  return await this.passwordIsRequiredMessage.textContent();
}

/**
 * Checks if the "full name is required" message is visible.
 * @return {Promise<boolean>} True if visible, false otherwise.
 */
async hasFullNameIsRequiredMessage(): Promise<boolean> {
  this.logger.info('Checking if the "full name is required" message is visible');
  try {
    await this.fullNameIsRequiredMessage.waitFor({ state: 'attached' });
    return await this.fullNameIsRequiredMessage.isVisible();
  } catch (error) {
    this.logger.error('Error while checking for "full name is required" message visibility:', error);
    return false;
  }
}

/**
 * Retrieves the text of the "full name is required" message.
 * @return {Promise<string | null>} The text content.
 */
async getFullNameIsRequiredMessage(): Promise<string | null> {
  this.logger.info('Getting the "full name is required" message text');
  await this.fullNameIsRequiredMessage.waitFor({ state: 'attached' });
  return await this.fullNameIsRequiredMessage.textContent();
}

/**
 * Checks if the "email is required" message is visible.
 * @return {Promise<boolean>} True if visible, false otherwise.
 */
async hasEmailIsRequiredMessage(): Promise<boolean> {
  this.logger.info('Checking if the "email is required" message is visible');
  try {
    await this.emailIsRequiredMessage.waitFor({ state: 'attached' });
    return await this.emailIsRequiredMessage.isVisible();
  } catch (error) {
    this.logger.error('Error while checking for "email is required" message visibility:', error);
    return false;
  }
}

/**
 * Retrieves the text of the "email is required" message.
 * @return {Promise<string | null>} The text content.
 */
async getEmailIsRequiredMessage(): Promise<string | null> {
  this.logger.info('Getting the "email is required" message text');
  await this.emailIsRequiredMessage.waitFor({ state: 'attached' });
  return await this.emailIsRequiredMessage.textContent();
}

/**
 * Clicks on the login button.
 */
async clickLoginButton(): Promise<void> {
  this.logger.info('Clicking on the login button');
  await this.loginButton.waitFor({ state: 'attached' });
  await this.loginButton.click();
}

/**
 * Checks if the login button is visible.
 * @return {Promise<boolean>} True if the login button is visible, false otherwise.
 */
async isLoginButtonVisible(): Promise<boolean> {
  this.logger.info('Checking if the login button is visible');
  try {
    await this.loginButton.waitFor({ state: 'attached' });
    return await this.loginButton.isVisible();
  } catch (error) {
    this.logger.error('Error while checking for login button visibility:', error);
    return false;
  }
}

}