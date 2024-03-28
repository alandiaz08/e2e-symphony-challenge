import { Locator, Page } from "@playwright/test";
import { basePage } from "../../base/basePage";
import { env } from "../../../../load-env";
import { URLBuilder } from "../../../utils/URLBuilder";

/**
 * Class for login page.
 */
export class LoginPage extends basePage {
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly registerButton: Locator;
  private readonly forgotPasswordButton: Locator;
  private readonly keepMeSignedCheckbox: Locator;
  private readonly welcomeMessage: Locator;
  private readonly emailRequiredMessage: Locator;
  private readonly passwordRequiredMessage: Locator;

  /**
   * Constructor of the login page
   */
  constructor(page: Page) {
    super(page);
    this.emailInput = page.locator('[name="email"]');
    this.passwordInput = page.locator('[name="password"]');
    this.loginButton = page.locator('[type="submit"]');
    this.registerButton = page.locator('p > a');
    this.forgotPasswordButton = page.locator('div > a');
    this.keepMeSignedCheckbox = page.locator('[name="remember"]');
    this.welcomeMessage = page.locator('form > h1');
    this.emailRequiredMessage = page.getByText('Email is required!');
    this.passwordRequiredMessage = page.getByText('Password is required!');
  }

  /**
   * Navigates to the login page
   * @returns {Promise<void>}
   */
  async navigateToLoginPage(): Promise<void> {
    const urlBuilder = new URLBuilder(env.APP_ENV, env.APP_PROJECT);
    const url = urlBuilder.buildURL('');
    this.logger.info('Navigate to: ' + url);
    await this.page.goto(url);
    await this.page.setViewportSize(this.viewportSize);
  }

  /**
   * Inputs the username into the username field
   * @param {string} username - The username to input
   * @returns {Promise<void>}
   */
  async inputUserName(username: string): Promise<void> {
    this.logger.info('Enters user name: ' + username);
    await this.emailInput.fill(username);
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Inputs the password into the password field
   * @param {string} password - The password to input
   * @returns {Promise<void>}
   */
  async inputPassword(password: string): Promise<void> {
    this.logger.info('Entering password: ' + password);
    await this.passwordInput.fill(password);
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Clicks on login Button
   *
   * @return {Promise<void>}
   */
  async signUpNow(): Promise<void> {
    this.logger.info('Click on login Button');
    await this.loginButton.click();
  }

  /**
   * Clicks the register button.
   */
  async clickRegisterButton(): Promise<void> {
    this.logger.info('Clicking the register button');
    await this.registerButton.waitFor({ state: 'attached' });
    await this.registerButton.click();
  }

  /**
   * Clicks the forgot password button.
   */
  async clickForgotPasswordButton(): Promise<void> {
    this.logger.info('Clicking the forgot password button');
    await this.forgotPasswordButton.waitFor({ state: 'attached' });
    await this.forgotPasswordButton.click();
  }

  /**
   * Checks the keep me signed in checkbox if it's not already checked.
   */
  async checkKeepMeSignedCheckbox(): Promise<void> {
    this.logger.info('Checking the keep me signed in checkbox');
    await this.keepMeSignedCheckbox.waitFor({ state: 'attached' });
    await this.keepMeSignedCheckbox.click();
  }

  /**
   * Unchecks the keep me signed in checkbox if it's currently checked.
   */
  async uncheckKeepMeSignedCheckbox(): Promise<void> {
    this.logger.info('Unchecking the keep me signed in checkbox');
    await this.keepMeSignedCheckbox.waitFor({ state: 'attached' });
    await this.keepMeSignedCheckbox.click();
  }

  /**
   * Checks if the welcomeMessage is visible.
   * @return {Promise<boolean>}
   */
  async isWelcomeMessageVisible(): Promise<boolean> {
    try {
      this.logger.info('Checking if the welcomeMessage is visible');
      await this.welcomeMessage.waitFor({ state: 'attached' });
      return await this.welcomeMessage.isVisible();
    } catch (error) {
      this.logger.error(`Error checking if welcomeMessage is visible: ${error}`);
      return false;
    }
  }

  /**
   * Checks if the email required message is visible.
   * @return {Promise<boolean>} True if the email required message is visible, false otherwise.
   */
  async isEmailRequiredMessageVisible(): Promise<boolean> {
    try {
      await this.emailRequiredMessage.waitFor({ state: 'attached' });
      return await this.emailRequiredMessage.isVisible();
    } catch (error) {
      console.error('Error when checking for email required message visibility', error);
      return false;
    }
  }

  /**
   * Retrieves the text content of the email required message.
   * @return {Promise<string>} The text content of the email required message.
   */
  async getEmailRequiredMessageText(): Promise<string> {
    await this.emailRequiredMessage.waitFor({ state: 'attached' });
    return await this.emailRequiredMessage.textContent();
  }

  /**
   * Checks if the password required message is visible.
   * @return {Promise<boolean>} True if the password required message is visible, false otherwise.
   */
  async isPasswordRequiredMessageVisible(): Promise<boolean> {
    try {
      await this.passwordRequiredMessage.waitFor({ state: 'attached' });
      return await this.passwordRequiredMessage.isVisible();
    } catch (error) {
      console.error('Error when checking for password required message visibility', error);
      return false;
    }
  }

  /**
   * Retrieves the text content of the password required message.
   * @return {Promise<string>} The text content of the password required message.
   */
  async getPasswordRequiredMessageText(): Promise<string> {
    await this.passwordRequiredMessage.waitFor({ state: 'attached' });
    return await this.passwordRequiredMessage.textContent();
  }

}
