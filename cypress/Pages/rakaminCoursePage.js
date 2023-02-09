class RakaminCoursePage {

  elements = {
    courseTitle: () => cy.get('div h1'),
    registerButton: () => cy.get('button[data-cy="register-vix-button"]'),
    modalBody: () => cy.get('.ant-modal-body'),
    loginModalButton: () => cy.get('button[data-cy="login-first-button"]'),
    checkBox: () => cy.get('img[data-cy="vix-info-source-option-1"]'),
    checkBoxAgreement: () => cy.get('img[data-cy="agreement-checkbox"]'),
    submitInModalButton: () => cy.get('button[data-cy="vix-form-submit-button"]'),
    modalConfirmation: () => cy.get('.ant-modal-body div.confirmation-modal-title-wrapper'),
    lanjutkanButton: () => cy.get('button[data-cy="button-confirm"]')
  }
}

module.exports = new RakaminCoursePage();