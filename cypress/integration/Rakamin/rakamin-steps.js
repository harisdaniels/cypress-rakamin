/// <reference types="cypress" />

import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const RakaminLandingPage = require('../../Pages/rakaminLandingPage.js');
const RakaminVirtualInternsipPage = require('../../Pages/rakaminVirtualInternExpPage.js');
const RakaminCoursePage = require('../../Pages/rakaminCoursePage.js');
const RakaminLoginPage = require('../../Pages/rakaminLoginPage.js');
const RakaminCheckoutPage = require('../../Pages/rakaminCheckoutPage.js')

Before(() => {
  RakaminLandingPage.visitWebsite();
});

Given('user navigates to the VIX detail page', () => {
  cy.url().then(($url) => {
    if ($url.includes('/dashboard/courses/enrolled')) {
      cy.get('a[href="/courses"] button').click();
    }
  })
  RakaminLandingPage.goToExploreVIXprogram();
  cy.url().should('eql', 'https://web-staging.rakamin.com/virtual-internship-experience/explore');
});

When('user click Daftar Sekarang', () => {
  RakaminCoursePage.elements.courseTitle().then((text) => {
    if(text.text().includes("Selamat Datang")) {
      RakaminCoursePage.elements.registerButton().click();
      RakaminCoursePage.elements.modalBody({ timeout: 3000 }).should('be.visible');
    } else {
      RakaminVirtualInternsipPage.elements.vacancyCardLink({ timeout: 3000 }).should('be.visible').click();
      RakaminCoursePage.elements.courseTitle().should('contain.text', "Selamat Datang");
      RakaminCoursePage.elements.registerButton().click();
      RakaminCoursePage.elements.modalBody({ timeout: 3000 }).should('be.visible');
    }
  });
  RakaminCoursePage.elements.modalBody().then((text) => {
    if (text.text().includes('Login terlebih dahulu')) {
      RakaminCoursePage.elements.loginModalButton().click();
    }
  });
});

Then('user redirected to login page', () => {
  RakaminLoginPage.elements.loginPageTitle().should('have.text', "Masuk ke Rakamin Academy");
});

Given('user fill login credential and submit', () => {
  cy.fixture('example.json').then((user) => {
    RakaminLoginPage.fillLoginCredentials(user.email, user.password);
  });
  RakaminLoginPage.elements.loginButton().click();
  cy.wait(3000);
});

And('user fill form application', () => {
  RakaminCoursePage.elements.checkBox().click();
  RakaminCoursePage.elements.checkBoxAgreement().click();
  RakaminCoursePage.elements.submitInModalButton().click();
});

Then('the system showing modal confirmation', () => {
  RakaminCoursePage.elements.modalConfirmation({ timeout: 3000 }).should('be.visible');
});

Given('user accesses login page', () => {
  RakaminLandingPage.visitLoginPage();
});

When('user confirmed to continue', () => {
  RakaminCoursePage.elements.lanjutkanButton().click();
});

Then('the system redirect the user to checkout page', () => {
  cy.url().should('eql', 'https://web-staging.rakamin.com/checkout');
});

And('user choose  VIP Access', () => {
  RakaminCheckoutPage.elements.basicAccessCheckBox().click();
  RakaminCheckoutPage.elements.VIPAccessCheckBox().click();
  // RakaminCheckoutPage.elements.lanjutkanPembayaranButton().click()
});

Then('the system redirect to payment page', () => {
  cy.url().should('eql', 'https://web-staging.rakamin.com/thank-you-page/virtual-internship-experience');
});