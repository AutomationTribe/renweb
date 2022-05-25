/// <reference types="cypress" />

import LandingPage from "../support/PageObjects/LandingPage";
import LoginPage from "../support/PageObjects/LoginPage";

describe("Login Page Test",function(){

    const landingPage = new LandingPage();
    const loginPage = new LoginPage();

    before("Navigate to Landing page", ()=>{
        cy.fixture("LoginCredentials").then((data)=>
        {
            this.data = data;
        })
        cy.baseUrl().then(()=>{
            if(cy.url() === "/dashboard")
            {
                cy.get("logout").click();
                cy.baseUrl();
            }
            cy.baseUrl();

        })
    })
    
    it("Navigate to terms of use",()=>{
        landingPage.LoginBtn().click();
        loginPage.TermsOfUse().click();
        //open in same tab
        //assert 
        //navigate back
    })

    it("Navigate to Privacy Policy",()=>{
        landingPage.LoginBtn().click();
        loginPage.PrivacyPolicy().click();
        //open in same tab
        //assert 
        //navigate back
    })

    it("Navigate to Forgot password Page",()=>{
        landingPage.LoginBtn().click();
        loginPage.EmailAddress().type(this.data.user);
        loginPage.GetStarted().click();
        loginPage.ForgotPassword().click();
        //assert 
        cy.go("back");
    })
  
    it("valid user login", ()=>{
        landingPage.LoginBtn().click();
        loginPage.EmailAddress().type(this.data.user);
        loginPage.GetStarted().click();
        loginPage.Password().type(this.data.password).type("{enter}");
        loginPage.LoginBtn().click();
        cy.wait(5000);
        cy.url().should("eq","https://renweb-staging-v3.renmoney.com/p/dashboard");
    })

    //add test for invalid password 

    //add test for invalid user

})
