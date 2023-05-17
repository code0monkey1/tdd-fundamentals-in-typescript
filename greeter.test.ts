import { greeter } from "./greeter";

describe("greeter", () => {

  it("greeter is defined", () => {
      
    // Arrange
     const sut=greeter;
    
     //Act


     //Assert
     expect(sut).toBeDefined();
     expect(sut).toBeInstanceOf(Function);
      
  }) 
  
})