import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";
const { writeFile } = require('fs').promises;

/**
 * Class for CareersResultList
 */
export class CareersResultList extends BaseComponent {
    private readonly openPositionListItems: Locator;
    private readonly jobtitle: Locator;
    private readonly jobLocation: Locator;
    private container;

    /**
     * Constructor of the class
     * @param page
     * @param container
     */
    constructor(page: Page, container: Locator) {
        super(page);
        this.container = container;
        this.openPositionListItems =
            this.container.locator('[class="currentOpenings--job-link"]');
        this.jobtitle = this.container.locator('[class="currentOpenings--job-title"]');
        this.jobLocation = this.container.locator('[class="currentOpenings--job-locationWrapper"]');
    }

    /**
     * Gets the open position list items.
     * @returns {Promise<Locator[]>}
     */
    async getOpenPositionItems(): Promise<Locator[]> {
        return this.openPositionListItems.all();
    }

    /**
     * Gets the open position list items by index.
     * @returns {Promise<Locator[]>}
     */
    async getOpenPositionItemsByIndex(index): Promise<Locator> {
        this.logger.info('Gets the open position list items by index');
        const openPositionItems = await this.getOpenPositionItems();
        if (index >= 0 && index < openPositionItems.length) {
            return openPositionItems[index]
        } else {
            throw new Error(`Invalid index: ${index}`);
        }
    }

    /**
     * Gets the number of open positions items on the current page.
     * @return {Promise<number>}
     */
    async getOpenPositiontItemCount(): Promise<number> {
        this.logger.info('Getting the number of open position items');
        const contractCardItems = await this.getOpenPositionItems();
        return contractCardItems.length;
    }

    /**
     * Extracts job titles and locations and saves them to a .txt file.
     * @returns {Promise<void>}
     */
    async extractJobsAndSaveToFile() {
        this.logger.info('Extracting job titles and locations');
        const jobTitles = await this.jobtitle.allTextContents();
        const jobLocations = await this.jobLocation.allTextContents();
        let contentToWrite = '';

        for (let i = 0; i < jobTitles.length; i++) {
            contentToWrite += `${jobTitles[i]}, ${jobLocations[i]}\n`;
        }

        await writeFile('job_listings.txt', contentToWrite);
        this.logger.info('Job titles and locations have been saved to job_listings.txt');
    }

}