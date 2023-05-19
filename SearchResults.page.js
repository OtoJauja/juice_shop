import BasePage from "./Base.page";
import HomePage from "./Home.page";

class SerachResultsPage extends HomePage{

    static get url() {
        return "/#/search";
    }

    static get product(){
        return cy.get (".product");
    }

    static get header(){
        return cy.get("h1");
    }

    static get closeProduct(){
        return cy.get(".close-dialog");
    }

    static get expandReviews(){
        cy.wait(200);
        return cy.get(".mat-expansion-panel");
    }

    static get reviewText(){
        return cy.get(".review-text");
    }
}

export default SerachResultsPage;