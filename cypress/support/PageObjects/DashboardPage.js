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

        return cy.contains("Fixed deposit balance");
    }

    
    NavigateToSavingsBalance(){

        return cy.contains("Savings balance");
    }

    NavigateToContinueYourApplication(){

        return cy.contains("Continue");
    }

    
    NavigateToSeeAllActiveLoans(){

        return cy.contains("See all active loans");
    }

    NavigateToNextRepayment(){

        return cy.contains("Pay");
    }



}
export default DashboardPage