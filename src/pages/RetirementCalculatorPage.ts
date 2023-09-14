import {FieldMapping} from '../pages/FieldMapping'
export class RetirementCalculatorPage {

  async fillFormField(fieldName, value) {
    const fieldSelector = FieldMapping.getFieldSelector(fieldName);

    if (!fieldSelector) {
      throw new Error(`Field '${fieldName}' is not mapped to an element identifier.`);
    }

    const element = await $(fieldSelector);
    const elementType = await element.getAttribute("type");

    if (elementType !== "radio") {
      await element.waitForDisplayed({ timeout: 10000 });
      await element.waitForClickable({ timeout: 10000 });
      await element.click();
      await element.addValue(value);
    } else if (elementType === "radio") {
      await element.scrollIntoView();
      await browser.execute((el) => {
        el.click();
      }, element);
    }
  }

  async clickButton(attribute, value) {
    const buttonXPath = `//button[@${attribute}='${value}']`;
    const button = await $(buttonXPath);    
    await button.click();
  }

  async isFormSuccessfullySubmitted() {
    const canvasElement = await $('#results-chart'); 
    await canvasElement.waitForDisplayed({ timeout: 100000 });
    return await canvasElement.isDisplayed();
  }
  
  async selectSocialSecurityIncome(incomeSelection) {
    let element = await $(incomeSelection === 'No' ? "#no-social-benefits" : "#yes-social-benefits");
    // Scroll the page to bring the element into the viewport
    await element.scrollIntoView();
    await browser.execute((el) => {
      el.click();
    }, element);
  }

  async checkFieldVisibility(maritalStatusField, overrideAmountField, visibility) {
    const maritalStatus = await $('//ul[@id="marital-status-ul"]');
    const socialSecurityOverride = await $('#social-security-override');

    if (visibility === 'displayed') {
      await maritalStatus.waitForDisplayed({ timeout: 10000 });
      await socialSecurityOverride.waitForDisplayed({ timeout: 10000 });
      await expect(maritalStatus).toBeDisplayed();
      await expect(socialSecurityOverride).not.toBeDisplayed();
    } else if (visibility === 'hidden') {
      await expect(maritalStatus).not.toBeDisplayed();
      await expect(socialSecurityOverride).not.toBeDisplayed();
    } else {
      throw new Error(`Invalid visibility parameter: ${visibility}`);
    }
  }

  async openDefaultCalculatorModelWindow() {
    await browser.url("https://www.securian.com/insights-tools/retirement-calculator.html");
    const link = await $('a[data-toggle="modal"][data-target="#default-values-modal"][role="button"]');
    await link.waitForDisplayed({ timeout: 10000 });
    await link.waitForClickable({ timeout: 10000 });
    await link.click();
  }
  
  }
  