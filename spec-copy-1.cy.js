import HomePage from "../pageObjects/Home.page";
import LoginPage from "../pageObjects/Login.page";
import RegistrationPage from "../pageObjects/Registration.page";
import SerachResultsPage from "../pageObjects/SearchResults.page";

describe('Jusice-Shop scenarios', () => {
  context("With no login", () => {
    beforeEach(() => {
      HomePage.visit();
      //click on dismiss button
      HomePage.dismissButton.click();
      //click on me want button
      HomePage.meWantItButton.click();
    });

    it("Registration", ()=>{
      //click account
      HomePage.accountButton.click();
      //click login
      HomePage.loginButton.click();
      // click not yet a  customer
      LoginPage.notYetCustomerLink.click();
      // set email, (generate rndm email)
      RegistrationPage.emailField.type(
        "test" + Math.floor(Math.random() * 100000) + "@test.com"
      );
      // set password
      RegistrationPage.passwordField.type("12345678");
      //repeat password
      RegistrationPage.repeatPasswordField.type("12345678");
      //select security question
      RegistrationPage.securityQuestionComboBox.click();
      RegistrationPage.securityQuestionComboBoxOptions.contains("Your favorite book?").click();
      //set question
      RegistrationPage.securityQuestionAnswerField.type("test");
      //click register
      RegistrationPage.registrationButton.click();
      // validate toast message
      RegistrationPage.toastMessage.should(
        "have.text", 
        "Registration completed successfully. You can now log in."
      );
    }); 
  });

  context("With login", () => {
    beforeEach(() => {
      LoginPage.visit();
      LoginPage.dismissButton.click();
      LoginPage.meWantItButton.click();
      LoginPage.logInto("demo", "demo");
    });

    it.only("Search for lemon", () => {
      //click on search icon
      HomePage.searchIcon.click();
      //type in the value lemon + enter key
      HomePage.searchField.type("lemon{enter}");
      //open lemon juice item
      SerachResultsPage.product.contains("Lemon Juice").click();
      //validate that the item title is "Lemon Juice (500ml)"
      SerachResultsPage.header.should("have.text", "Lemon Juice (500ml)")
    });

    it.only("Search 500ml", () => {
      //click in search icon
      HomePage.searchIcon.click();
      //type in the value 500ml + enter key
      HomePage.searchField.type("500ml{enter}");
      //open Eggfruit Juice (500ml)
      SerachResultsPage.product.contains("Eggfruit Juice").click();
      //validate title
      SerachResultsPage.header.should("have.text", "Eggfruit Juice (500ml)")
      SerachResultsPage.closeProduct.click();
      //open Lemon Juice (500ml)
      SerachResultsPage.product.contains("Lemon Juice").click();
      //validate title
      SerachResultsPage.header.should("have.text", "Lemon Juice (500ml)")
      SerachResultsPage.closeProduct.click();
      //open Strawberry Juice (500ml)
      SerachResultsPage.product.contains("Strawberry Juice").click();
      //validate title
      SerachResultsPage.header.should("have.text", "Strawberry Juice (500ml)")
      SerachResultsPage.closeProduct.click();
    });

    it.only("Filter product amount", () => {
      //select 12
      HomePage.itemsPerPageMenu.click();
      //validate that we see 12 items
      HomePage.menuOptions.contains("12").click();
      HomePage.product.should("have.length", 12);
      //select 24
      HomePage.itemsPerPageMenu.click();
      HomePage.menuOptions.contains("24").click();
      //validate 24 items
      HomePage.product.should("have.length", 24);
      //select 36 
      HomePage.itemsPerPageMenu.click();
      HomePage.menuOptions.contains("36").click();
      //validate 35 items
      HomePage.product.should("have.length", 35);
    });

    it("Validate item amount", () => {
      //click on search icon
      HomePage.searchIcon.click();
      //type in the value king + enter key
      HomePage.searchField.type("king{enter}");
      //open king of the hill
      SerachResultsPage.product.contains("King og th Hill").click();
      //click on reviews
      SerachResultsPage.expandReviews.click();
      //cy.get('[aria-label="Expand for Reviews"]').click();
      //validate that we see - k33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      SerachResultsPage.reviewText.should(
        "contain.text", 
        "k33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!"
      );
    });
  });
})