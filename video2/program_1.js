const fs = require('fs')

fs.writeFile("output.txt", "writing File", (err) => {
  if (err) {
    console.log("Error occured");
    
  }else{
    console.log("file written successfully");
    
  }
})

/* yha pe hamne require aur writeFile use krke pane folder main ek output.txt name ke ek txt file bana di hai, sath main hamne error bi handle kia hai ismain, aur jo hamne file main txt likh h vo bi usmain show ho jayega */

/*
1. Streamlines Node Command: You can execute a JavaScript file in the Node.js environment by using the command node filename.js.

2. require Syntax: Use require('module') to include built-in or external modules, or other JavaScript files in your code.

3. Modular Code: The require function helps you organize your code into reusable modules. This separation of concerns improves code maintainability.

4. Caching: Modules that are loaded with require are cached. This means the file is executed only once, even if it's required multiple times in your application. This improves performance by preventing redundant code execution.
*/

