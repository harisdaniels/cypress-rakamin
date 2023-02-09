class RakaminLoginPage {

  elements = {
    loginPageTitle: () => cy.get('div[data-cy="login-register-form-title"]'),
    inputEmailField: () => cy.get('input[data-cy="login-email-text-field"'),
    inputPasswordField: () => cy.get('input[data-cy="login-password-text-field"'),
    loginButton: () => cy.get('button[data-cy="login-submit-button"'),
  }

  fillLoginCredentials(username, password){
    this.elements.inputEmailField().type(username);
    this.elements.inputPasswordField().type(password);
  }
}

module.exports = new RakaminLoginPage();