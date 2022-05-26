/// <reference types="cypress" />

import DashboardPage from "../support/PageObjects/DashboardPage";

describe("Dashboard Test cases",()=>{
    let data;
    const dashboard = new DashboardPage();

    before("login to dashboard",()=>{
    localStorage.clear();
    cy.fixture("generic").then(function(fdata){
        data = fdata
    })
        cy.login();
    })

    it("Validate add fund navigation",function(){

        dashboard.AddMoney().click();
        cy.url().should("eq",data.baseUrl + "/p/fund");
        cy.go("back");   
    })
    it("Validate send money navigation",function(){

        dashboard.SendMoney().click();
        cy.url().should("eq",data.baseUrl + "/p/transactions/transfer");
        cy.go("back");  
    })

    it("Validate history navigation",function(){

        dashboard.History().click();
        cy.url().should("eq",data.baseUrl + "/p/history");
        cy.go("back"); 
    })

    it("Validate smart Goal navigation",function(){

        dashboard.NavigateToSmartGoal().click();
        cy.url().should("eq",data.baseUrl + "/p/savings/smart/create");
        cy.go("back"); 
    })

    it("Validate fixed deposit navigation",function(){

        dashboard.NavigateToFixedDeposit().click();
        cy.url().should("eq",data.baseUrl + "/p/savings/deposit/create");
        cy.go("back"); 
    })

    it("Validate Airtime, Data and Bills navigation",function(){

        dashboard.NavigateToAirtimeDataAndBills().click();
        cy.url().should("eq",data.baseUrl + "/p/transactions/airtime");
        cy.go("back");
    })

    it("Validate Fixed deposit balance navigation",function(){

        dashboard.NavigateToFixedDepositBalance().click();
        cy.url().should("eq",data.baseUrl + "/p/savings");
        cy.go("back");
    })

    it("Validate Savings balance navigation",function(){

        dashboard.NavigateToSavingsBalance().click();
        cy.url().should("eq",data.baseUrl + "/p/savings");
        cy.go("back");
    })

    it("Validate continue your application navigation",function(){

        dashboard.NavigateToContinueYourApplication().click();
        cy.url().should("eq",data.baseUrl + "/p/loan/loan-amount");
        cy.go("back");
    })

    it("Validate See all active loans navigation",function(){

        dashboard.NavigateToSeeAllActiveLoans().click();
        cy.url().should("eq",data.baseUrl + "/p/loan-management/dashboard");
        cy.go("back");
    })

    it("Validate Next Repayment navigation",function(){

        dashboard.NavigateToNextRepayment().click();
        cy.url().should("eq",data.baseUrl + "/p/loan-management/loan-detail");
        cy.go("back");
    })


})