import { Page } from '@playwright/test';
import { env } from '../../load-env';
import { config } from './config';
import {logger as Logger} from "./logger";

export class URLBuilder {
  private readonly environment: string;
  private readonly project?: string;

  constructor(environment: string, project?: string) {
    this.environment = environment;
    this.project = project;
  }

  buildURL(path: string): string {
    const baseURL = config[this.environment][this.project];
    if (!baseURL) {
      throw new Error(`Invalid configuration for environment: ${this.environment}, project: ${this.project}`);
    }
    return `${baseURL}${path}`;
  }

  /**
   * Navigates to the symphony
   * @returns {Promise<void>}
   */
  static async navigateToProjectPage(page: Page): Promise<void> {
    const logger = Logger;
    const urlBuilder = new URLBuilder(env.APP_ENV, env.APP_PROJECT);
    const url = urlBuilder.buildURL('');
    logger.info('Navigate to: ' + url);
    await page.goto(url);
  }
}