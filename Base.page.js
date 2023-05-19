class BasePage{
    static get url(){
        return "/";
    }
    static visit(){
        cy.visit(this.url);
    }

    static get textSuccess(){
        return cy.get(".text-success");
    }

    static get dismissButton(){
        return cy.get(".close-dialog");
    }

    static get meWantItButton(){
        return cy.get(".cc-dismiss");
    }

}

export default BasePage;