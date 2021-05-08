const {Manager} = require('../lib/manager');

describe("Manager", () => {
    // Test class initi
    describe("Initialization", () => {
      it("should create an object with a name and age if provided valid arguments", () => {
        // initialize class
        const employee = new Manager("John", 2, "email", 32);
  
        // Assertions
        expect(employee.name).toEqual("John");
        expect(employee.id).toEqual(2);
        expect(employee.email).toEqual("email");
        expect(employee.officeNumber).toEqual(32);
        // assert unique properties
        expect(employee.uniqueFieldsMap.uniqueField).toEqual("Office number");
        expect(employee.uniqueFieldsMap.uniqueFieldValue).toEqual(32);

      })

      it("Should throw an error as no parameters are provided", ()=> 
      {
          const cb = ()=> new Manager("Raphael", 4); // no officenumber provided
          expect(cb).toThrowError();
      })
    })
})    