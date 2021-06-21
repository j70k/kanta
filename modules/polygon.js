/**
 * a test using the constructor.
 * 
 */
const package = require('../package.json')
class About {
    constructor() {
      this.name = `
       _______  _______  _______  ___  
      |       ||       ||       ||   | ${package.name}
      |  _____||   _   ||_     _||   | v${package.version}
      | |_____ |  | |  |  |   |  |   | ${package.description}
      |_____  ||  |_|  |  |   |  |   | Author: ${package.author}
       _____| ||       |  |   |  |   | License: ${package.license}
      |_______||_______|  |___|  |___| Repo: ${package.repository.url} 
                               
                                                                        
      `;

    }
  }
  
  const poly1 = new About();
  
  console.log(poly1.name);
  // expected output: "Polygon"
   
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

module.exports = About;