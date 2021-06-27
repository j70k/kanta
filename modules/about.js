
const package = require('../package.json')
/**
 * a test using the constructor.
 * 
 */
class AboutPackage {
    constructor() {
      this.name = `

       ___   _  _______  __    _  _______  _______ 
      |   | | ||   _   ||  |  | ||       ||   _   |  ${package.name}
      |   |_| ||  |_|  ||   |_| ||_     _||  |_|  |  v${package.version}
      |      _||       ||       |  |   |  |       | ${package.description}
      |     |_ |       ||  _    |  |   |  |       | Author: ${package.author}
      |    _  ||   _   || | |   |  |   |  |   _   | License: ${package.license}
      |___| |_||__| |__||_|  |__|  |___|  |__| |__| Repo: ${package.repository.url} 

                                                                        
      `;

    }
  }
  
  const poly1 = new About();
  
  console.log(poly1.name);
  // expected output: "Polygon"
   
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

module.exports = AboutPackage;