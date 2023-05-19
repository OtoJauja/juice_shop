import BasePage from "./Base.page";

class RegistrationPage extends BasePage{

    static get url(){
        return "/#/register";
    }

    static get emailField(){
        return cy.get("#emailControl");
    }

    static get passwordField(){
        return cy.get("#passwordControl");
    }

    static get repeatPasswordField(){
        return cy.get("#repeatPasswordControl");
    }

    static get securityQuestionComboBox(){
        return cy.get('mat-select[role="combobox"]');
    }

    static get securityQuestionComboBoxOptions(){
        return cy.get(".mat-option-text");
    }

    static get securityQuestionAnswerField(){
        return cy.get("#securityAnswerControl");
    }

    static get registrationButton(){
        return cy.get("#registerButton");
    }

}

export default RegistrationPage;