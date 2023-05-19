import BasePage from "./Base.page";

class HomePage extends BasePage {
    static get url() {
        return "/";
    }

    static get accountButton(){
        return cy.get("#navbarAccount");
    }

    static get loginButton(){
        return cy.get("#navbarLoginButton");
    }

    static get newCustomerButton(){
        return cy.get("#newCustomerLink");
    }

    static get searchIcon(){
        return cy.get("#searchQuery");
    }

    static get searchField(){
        return cy.get(".mat-input-element");
    }

    static get itemsPerPageMenu(){
        return cy.get("mat-select[aria-label='Items per page:']");
    }

    static get menuOptions(){
        return cy.get(".mat-option-text");
    }
}

export default HomePage;