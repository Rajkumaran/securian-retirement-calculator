import {Given, When, Then} from '@wdio/cucumber-framework'
import { RetirementCalculatorPage } from '../pages/RetirementCalculatorPage';
import allureReporter from '@wdio/allure-reporter'
import { baseUrl,retirementCalculatorPath } from '../../config/config';

const page = new RetirementCalculatorPage();

Given('the user is on the retirement calculator page', async () => {
  const url = `${baseUrl}${retirementCalculatorPath}`;
  await browser.url(url);

});

When('the user enters the following information:', async (dataTable) => {
  const data = dataTable.rowsHash();  
  for (const fieldName in data) {
    const value = data[fieldName];
    await page.fillFormField(fieldName, value);
  }
});

When('the user submits the form with button having attribute {string} with value {string}', async (attribute, value) => {  
  await page.clickButton(attribute, value);

});

Then('the form should be successfully submitted', async () => {    
  const isSubmitted = await page.isFormSuccessfullySubmitted();  
  expect(isSubmitted).toBe(true)

});

When('the user selects {string} for Social Security Income', async (incomeSelection) => {
  await page.selectSocialSecurityIncome(incomeSelection);
});

Then('the {string} and {string} fields should be {string}', async (maritalStatusField, overrideAmountField, visibility) => {
  allureReporter.addSeverity('critical');
  await page.checkFieldVisibility(maritalStatusField, overrideAmountField, visibility);

});

Given('the user is on the default calculator model window', async () => {
  await page.openDefaultCalculatorModelWindow()
});



