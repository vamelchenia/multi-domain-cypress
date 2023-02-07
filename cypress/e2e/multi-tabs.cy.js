describe('template spec', () => {
  it('passes', () => {
    cy.window().then((win) => {
      cy.stub(win, 'open').as('Open');
    });
    const url = Cypress.config('baseUrl');
    cy.visit(url);
    cy.window().scrollTo('bottom');
    var instaUrlString;
    cy.get('.social-icons__instagram')
      .invoke('attr', 'href')
      .then(($instaUrl) => {
        instaUrlString = $instaUrl.toString();
        const updatedInstaUrl = instaUrlString.replace(
          'instagram.com',
          'www.instagram.com'
        );
        cy.origin(
          updatedInstaUrl,
          { args: updatedInstaUrl },
          (updatedInstaUrl) => {
            cy.visit(updatedInstaUrl);
            cy.contains('Allow essential and optional cookies').click();
          }
        );
      });
    cy.visit(url);
  });
});
