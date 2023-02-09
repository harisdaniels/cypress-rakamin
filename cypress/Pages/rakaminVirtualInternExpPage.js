class RakaminVirtualInternshipExperiencePage {

  elements = {
    vacancyCardLink: () => cy.get('div[data-cy="vix-card-3"] a.vacancy-card-link'),
  }
}

module.exports = new RakaminVirtualInternshipExperiencePage();