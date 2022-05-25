/// <reference types="cypress" />

import DashboardPage from "../support/PageObjects/DashboardPage";

describe("Dashboard Test cases",()=>{
    const dashboard = new DashboardPage();

    before("login to dashboard",()=>{
        cy.login();
    })

    it("Validate add fund navigation",function(){

        dashboard.AddMoney().click;
        
    })

})