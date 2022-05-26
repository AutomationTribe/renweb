// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("clearLocalStorageCache", function(){
    localStorage.clear();
    LOCAL_STORAGE_MEMORY = {};
})

Cypress.Commands.add('baseUrl',()=>{
    cy.visit("https://renweb-staging-v3.renmoney.com");
})



Cypress.Commands.add("login",()=>{
     
    cy.visit("https://renweb-staging-v3.renmoney.com");
    cy.url().then((url) =>{
       if(url === "https://renweb-staging-v3.renmoney.com/p/dashboard")
       {
        cy.get('.sidebar-footer > .logout-box').click(); 
       }
    })
    cy.contains("Login").click();
    cy.get("#email").type("Kurdzsamuel@gmail.com");
    cy.contains("Get Started").click();
    cy.wait(7000);
    cy.get("#password").type("Eunice$10").type("{enter}");
})

Cypress.Commands.add("LoggedInStatus",()=>{

    cy.login();

    if(cy.url() === "https://renweb-staging-v3.renmoney.com/p/dashboard"){

        cy.get(".sidebar-footer.logout-box>span").click();
        cy.login();
    }else{
        cy.login()
    }
})