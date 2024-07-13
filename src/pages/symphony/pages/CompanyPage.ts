import { expect, Locator, Page } from '@playwright/test';
import { basePage } from '../../base/basePage';


/**
 * Class for CompayPage page.
 */
export class CompanyPage extends basePage {
    private readonly companyDetailsContainer: Locator;


    /**
     * Constructor of the login page
     */
    constructor(page: Page) {
        super(page);
        this.companyDetailsContainer =
            page.locator('[class="pageMetaDetails--list"]')
    }

    /**
     * Retrieves the container of the company details.
     * @returns {Promise<Locator>} - The container of the company details.
     */
    async getCompanyDetailsContainer() {
        this.logger.info('Retrieves the container of the company details');
        await this.companyDetailsContainer.waitFor({ state: 'attached' });
        return this.companyDetailsContainer;
    }

    /**
     * Verifies that the current URL matches the expected URL.
     *
     * @param page - The Playwright page where the URL will be checked.
     * @param expectedUrl - The expected URL to verify.
     * @returns Promise<void>
     */
    async assertUrl(page: Page, expectedUrl: string): Promise<void> {
      const currentUrl = page.url();
      expect(currentUrl).toBe(expectedUrl);
    }    
}