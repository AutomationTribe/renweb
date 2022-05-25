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

}
export default DashboardPage