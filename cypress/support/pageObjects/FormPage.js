export class FormPage {
    visit() {
      cy.visit("https://demoqa.com/automation-practice-form");
    }
  
    fillBasicInfo(firstName, lastName, email, gender, phone) {
      cy.get("#firstName").type(firstName);
      cy.get("#lastName").type(lastName);
      cy.get("#userEmail").type(email);
      cy.contains(".custom-control-label", gender).click();
      cy.get("#userNumber").type(phone);
    }
  
    setBirthDate(day, month, year) {
      cy.get("#dateOfBirthInput").click();
      cy.get(".react-datepicker__month-select").select(month);
      cy.get(".react-datepicker__year-select").select(year);
      cy.get(`.react-datepicker__day--0${day}`).not(".react-datepicker__day--outside-month").click();
    }
  
    setSubjects(subject) {
      cy.get("#subjectsInput").type(subject).type("{enter}");
    }
  
    setHobbies(hobbies) {
      hobbies.forEach(hobby => {
        cy.contains(".custom-control-label", hobby).click();
      });
    }
  
    uploadPicture(fileName) {
      cy.get("#uploadPicture").selectFile("cypress/files/" + fileName, { force: true });
    }
  
    setAddress(address) {
      cy.get("#currentAddress").type(address);
    }
  
    setStateAndCity(state, city) {
      cy.get("#state").click();
      cy.get(".css-26l3qy-menu").contains(state).click();
      cy.get("#city").click();
      cy.get(".css-26l3qy-menu").contains(city).click();
    }
  
    submitForm() {
      cy.get("#submit").click({ force: true });
    }
  
    validateSubmission(expected) {
      Object.entries(expected).forEach(([label, value]) => {
        cy.contains("td", label)
          .next()
          .should("have.text", value);
      });
    }
  }
  