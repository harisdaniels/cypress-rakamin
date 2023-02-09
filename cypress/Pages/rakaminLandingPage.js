class RakaminLandingPage {

  elements = {
    loginPageButton: () => cy.get('div.sc-izeztm button[data-cy="login-page-button"]'),
    viMenu: () => cy.get('div[data-cy="vix-dropdown-menu"]:nth-child(3)'),
    exploreVIXprogram: () => cy.get('div.submenu-header-bootcamp div[data-cy="explore-vix-navigation"]'),
    hovertoBody: () => cy.get('body'),
  }

  visitWebsite() {
    cy.visit('/');
  }

  visitLoginPage() {
    cy.visit('/login');
  }

  goToExploreVIXprogram() {
    this.elements.viMenu().realHover('mouse');
    this.elements.exploreVIXprogram().click();
    this.elements.hovertoBody().realHover({ position: "topLeft" });
  }
}

module.exports = new RakaminLandingPage();