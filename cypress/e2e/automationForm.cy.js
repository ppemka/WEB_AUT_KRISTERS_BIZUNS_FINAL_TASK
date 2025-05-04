import { FormPage } from "../support/pageObjects/FormPage";

const form = new FormPage();

describe("DemoQA Practice Form Test", () => {
  it("Fills out and submits the form correctly", () => {
    form.visit();
    form.fillBasicInfo("John", "Doe", "john.doe@example.com", "Male", "1234567890");
    form.setBirthDate("28", "February", "1930");
    form.setSubjects("Economics");
    form.setHobbies(["Music"]);
    form.uploadPicture("example.jpg");
    form.setAddress("123 Test Street");
    form.setStateAndCity("NCR", "Delhi");
    form.submitForm();
    form.validateSubmission({
      "Student Name": "John Doe",
      "Student Email": "john.doe@example.com",
      "Gender": "Male",
      "Mobile": "1234567890",
      "Date of Birth": "28 February,1930",
      "Subjects": "Economics",
      "Hobbies": "Music",
      "Picture": "example.jpg",
      "Address": "123 Test Street",
      "State and City": "NCR Delhi"
    });
  });
});
