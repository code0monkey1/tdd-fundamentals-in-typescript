import { greeter } from "./greeter";

describe("function exists", () => {

  it("has a func", () => {
      
     const sut=greeter;

     expect(sut).toBeDefined();

     expect(sut).toBeInstanceOf(Function);
      
  }) 
  
})