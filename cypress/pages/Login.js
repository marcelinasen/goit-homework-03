export class Login {
    navigate() {
        cy.visit("https://www.edu.goit.global/account/login");
    }

    login(email, password) {
        cy.get('#user_email').type(email);
        cy.get('#user_password').type(password);
        cy.get('[type="submit"]').click();
    }
    // validateloginTitle() {
    // cy.get('.next-10stgr7 > .next-c1vj7d').should("be.visible");
    // cy.get('.next-10stgr7 > .next-c1vj7d').should("have.text", "Login");
    // }
    // validateInputs() {
    //     cy.get('#user_email').should("be.visible");
    //     cy.get('#user_password').should("be.visible");
    // }
    // validateButton() {
    //     cy.get('.eckniwg2').shoul("be.visible");
    // }
    // validatePasswordLink() {
    //     cy.get('.next-1f1fv1i > .next-1qrvie4').should("be.visible");
    //     cy.get('.next-1f1fv1i > .next-1qrvie4').should("have.text", "I can't remeber the password");
    // }
};
