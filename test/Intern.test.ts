const {Intern} = require('../lib/intern');

describe("Intern", () => {
    // Test class initi
    describe("Initialization", () => {
      it("should create an object with a name and age if provided valid arguments", () => {
        // initialize class
        const employee = new Intern("John", 2, "email", "Web Dev University");
  
        // Assertions
        expect(employee.name).toEqual("John");
        expect(employee.id).toEqual(2);
        expect(employee.email).toEqual("email");
        expect(employee.school).toEqual("Web Dev University");
        // unique properties are set to "None" in parent class
        expect(employee.uniqueFieldsMap.uniqueField).toEqual("School");
        expect(employee.uniqueFieldsMap.uniqueFieldValue).toEqual("Web Dev University");

      })

      it("Should throw an error as no parameters are provided", ()=> 
      {
          const cb = ()=> new Intern("Raphael", 4); // no school provided
          expect(cb).toThrowError();
      })
    })
})    