# tdd-fundamentals-in-typescript

### So , what is Test Driven Development ? 

![TDD](pictures/tdd.jpg 'test driven development')

---

[TDD Exercise Book](./data/TDD-Fundamentals-in-TypeScript.pdf)

---

Config : 

1. Set up the node project 
  
    ```bash

     npm init -y

    ```
1. Install typescript / jest / types for jest / typescript jest translator . As dev dependency's
    
    ```bash
       npm i -D jest typescript @types/jest ts-jest
    ```
1. Set up the jest config file :
   
   ```bash
      npx ts-jest config:init
   ```
   > Which will create `jest.config.js` file
1. Create a `.tsconfig.json` file with the following configuration
     
     ```bash
      npx tsc --init
     ```