## Typescript 

- TypeScript is JavaScript with **syntax for types**.[TypeScript Document](https://www.typescriptlang.org/)
- TypeScript is a free and open source programming language developed and maintained by Microsoft.
![ts-vs](https://github.com/miya-w/Typescript-Projects/blob/main/images/ts-js.png)
img [source](https://radixweb.com/blog/typescript-vs-javascript)
---
Two types of JavaScript （Primitive data types)（Object types）
- **Primitive data types**
    - boolean 
    - number 
    - string 
    - null 
    - undefined 
    - Symbol
- **Object types**
    - Object     
    - Array 
    - Function 
---
### The new in Typescript
- **Void**
- **Any & Unknown**
- **Never**

### Benefits of TS
- Static typing
- Code Completion
- Refactoring
- Shorthand notation



### Setting up Typescript

```javascript
//node
brew install node
//npm
npm install -g npm
// Typescript install 
sudo npm install -g typescript
// check 
tsc -v

```
### Compile Typescript file
-> terminal
```javascript
tsc index.ts
```
----
###  Configuring the TypeScript Compiler 
The compiler can be configured using a tsconfig.json file.
You can have TypeScript create tsconfig.json with the recommended settings with:
-> terminal
```
tsc --init
```
 Here is an example of more things you could add to the **tsconfig.json file**:
- tsconfig.json

```javascipt
//tsconfig.json
  /* Modules */                              
     "rootDir": "./src",  -> change the source  
 /* Emit */
  "sourceMap": true, 
  "outDir": "./dist",  -> Specify an output folder for all emitted files. */
    "removeComments": true,   

```
Then, type ***tsc*** in terminal and compile our code simply by running tsc without any arguments so we don't have to type index.ts we just run tse and this will compile all typescript files in this project.
```
tsc
```
### Debug

```
//launch.json
 "preLaunchTask": "tsc: build - tsconfig.json",
```



- enum
- function
---
Resources
- [TypeScript- Document](https://www.typescriptlang.org/)
- [W3C- TypeScript Tutoria](https://www.w3schools.com/typescript/index.php)
- [Youtube- TypeScript Tutorial for Beginners [2022]- Programming with Mosh](https://www.youtube.com/watch?v=d56mG7DezGs&t=949s)
- [TypeScript vs JavaScript: The Difference You Should Know](https://radixweb.com/blog/typescript-vs-javascript)
- [TypeScript 基礎入門：從型別談起](https://hackmd.io/@Heidi-Liu/typescript)
- [網頁工程師必學！TypeScript初探教學](https://rookiesavior.net/2022/05/04/program-yiru-web-engineers-must-learn-a-preliminary-study-of-typescript-teaching/)