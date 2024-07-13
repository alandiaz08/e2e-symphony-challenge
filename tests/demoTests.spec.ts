import { test, expect, Locator } from '@playwright/test';
import { HomePage } from '../src/pages/symphony/pages/HomePage';
import { Header } from '../src/pages/symphony/components/Header';
import { CompanyPage } from '../src/pages/symphony/pages/CompanyPage';
import { AboutUsDetails } from '../src/pages/symphony/components/AboutUsDetails';
import * as assert from "assert";
import { CareersPage } from '../src/pages/symphony/pages/CareersPage';
import { CareersResultList } from '../src/pages/symphony/components/CareersResultList';


test.describe('Demo Challenge Tests', () => {
    test('Demo test 1', async ({ page }, testInfo) => {
        //Arrange
        const consultingLocations: string[] = [
            'Amsterdam',
            'Berlin',
            'Geneva',
            'London',
            'Los Angeles',
            'Madrid',
            'New York',
            'Portland',
            'Zürich'
        ];

        const engineeringHubs: string[] = [
            'Banja Luka',
            'Belgrade',
            'Nis',
            'Novi Sad',
            'Santo Domingo',
            'Sarajevo',
            'Skopje'
        ];
        const hqExpectedText = 'San Francisco';
        const foundedExpectedText = '2007';
        const sizeExpectdText = '650+';
        const clientsExpeectedText = '300+';
        const expectedUrl = 'https://symphony.is/about-us/company';

        const home = new HomePage(page);


        //Act
        await home.navigateToHomePage();

        const header = new Header(page);
        await header.selectsCompany();
        const companyPage = new CompanyPage(page);

        // Assert
        await companyPage.assertUrl(page, expectedUrl);

        //Act II
        const aboutUs = new CompanyPage(page);
        const aboutUsDetails = new AboutUsDetails(page, await aboutUs.getCompanyDetailsContainer())

        //Assert
        await expect(await aboutUsDetails.hasHqText()).toBe(true);
        await expect(await aboutUsDetails.hasClientsText()).toBe(true);
        await expect(await aboutUsDetails.hasConsultingLocations(consultingLocations)).toBe(false);
        await expect(await aboutUsDetails.hasFoundedText()).toBe(true);
        await expect(await aboutUsDetails.hasSizeText()).toBe(true);
        await expect(await aboutUsDetails.hasEngineeringHubs(engineeringHubs)).toBe(false);

        assert.equal(await aboutUsDetails.getHqText(), hqExpectedText,
            'The message not match with: ' + hqExpectedText);
        assert.equal(await aboutUsDetails.getFoundedText(), foundedExpectedText,
            'The message not match with: ' + foundedExpectedText);
        assert.equal(await aboutUsDetails.getSizeText(), sizeExpectdText,
            'The message not match with: ' + sizeExpectdText);
        assert.equal(await aboutUsDetails.getClientsText(), clientsExpeectedText,
            'The message not match with: ' + clientsExpeectedText);
    });

    test('Demo test 2', async ({ page }, testInfo) => {
        //Arrange
        const home = new HomePage(page);


        //Act
        await home.navigateToHomePage();

        const header = new Header(page);
        await header.clickCareersButton();
        const careers = new CareersPage(page);
        const careerList = new CareersResultList(page, await careers.getcurrentOpeningListContainer());

        console.log("Number of Open positions offers: " +  careerList.getOpenPositiontItemCount());

        //Create .txt
        careerList.extractJobsAndSaveToFile();
    });
});

