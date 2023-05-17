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
1. Create a `.tsconfig.json` file with the following command ( to get rid of the error message in the command line  while running jest):
     
     ```bash
      npx tsc --init
     ```
1. Next set up a script to run tests every time there is a change in the code : 
    
    ```json

        "scripts": {
          "test": "jest --watchAll --verbose"
        }

    ```