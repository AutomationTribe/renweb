class DashboardPage{

    AddMoney(){
        return cy.get("a[href='/p/fund']");
    }

    SendMoney(){
        return cy.get("a[href='/p/transactions/transfer']");
    }

    History(){
        return cy.get("a[href='/p/history']");
    }

    NavigateToSmartGoal(){
        return cy.get("a[routerLink='/p/savings/smart/create']");
    }

    NavigateToFixedDeposit(){
        return cy.get("a[href='/p/savings/deposit/create']");
    }
    NavigateToAirtimeDataAndBills(){
        return cy.get("a[href='/p/transactions/airtime']");
    }

    NavigateToSeeAllActiveLoans(){
        return cy.get("a[href='/p/loan-management/dashboard']");
    }

    NavigateToFixedDepositBalance(){

        return cy.get('.card-box__left > :nth-child(1) > h6');
    }

    
    NavigateToSavingsBalance(){

        return cy.contains("Savings balance");
    }

    NavigateToContinueYourApplication(){

        return cy.get('.processing__btn');
    }

    
    NavigateToSeeAllActiveLoans(){

        return cy.contains("See all active loans");
    }

    NavigateToNextRepayment(){

        return cy.get('.loan-card__box__actions__pay');
    }



}
export default DashboardPage