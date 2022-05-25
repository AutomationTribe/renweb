class LoginPage{

    EmailAddress(){
        return cy.get("#email");
    }

    GetStarted(){
        return cy.contains("Get Started");
    }

    Password(){
        return cy.get("#password");
    }

    LoginBtn(){
        return cy.contains("Login");
    }

    TermsOfUse(){
        return cy.get(".login-agreement").find("span").eq(0);
    }

    PrivacyPolicy(){
        return cy.get(".login-agreement").find("span").eq(1);
    }

    ForgotPassword(){
        return cy.get(".forgot-password ");
    }
}

export default LoginPage