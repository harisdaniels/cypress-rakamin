class RakaminCheckoutPage {

  elements = {
    basicAccessCheckBox: () => cy.get('img[data-cy="basic-access-checkbox"]'),
    VIPAccessCheckBox: () => cy.get('img[data-cy="vip-access-checkbox"]'),
    lanjutkanPembayaranButton: () => cy.get('button[data-cy="continue-to-payment-button"]')
  }
}

module.exports = new RakaminCheckoutPage();