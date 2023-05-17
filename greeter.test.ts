import { greeter } from "./greeter";

describe("function exists", () => {

  it("has a func", () => {

      expect(greeter).toBeDefined();
      expect(greeter).toBeInstanceOf(Function);
  }) 
  
})