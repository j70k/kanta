 const package = require('../package.json')
 const fs = require('fs');
/**
 * a test for writing to JSON files.
 * 
 */
 class jsonobject {
     constructor() {
    

      exports.json = function() {
      
      }
      
      exports.data = function() {
      
        // create a JSON `object
        const jsonstuff = {
            "test": "hi",
            "name": "jro_k",
            "age": "1000"
        };
        
        // convert JSON object to string
        const data = JSON.stringify(jsonstuff);
        
        // write JSON string to a file
        fs.writeFile('user.json', data, (err) => {
            if (err) {
                throw err;
            }
            console.log("JSON data is saved.");
        });
        }
      
      exports.printMsg = function() {
          console.log("This is a message from the demo package");
        }
     }
   }
   
   const poly1 = new About();
   
   console.log(poly1.name);
   // expected output: "Polygon"
    
   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
 
 module.exports = jsonobject;