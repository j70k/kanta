
const packagee = require('../package.json')
/**
 * a test using the constructor.
 * 
 */
class AboutPackage {
    constructor() {
      this.name = `

       ___   _  _______  __    _  _______  _______ 
      |   | | ||   _   ||  |  | ||       ||   _   |  ${packagee.name}
      |   |_| ||  |_|  ||   |_| ||_     _||  |_|  |  v${packagee.version}
      |      _||       ||       |  |   |  |       | ${packagee.description}
      |     |_ |       ||  _    |  |   |  |       | Author: ${packagee.author}
      |    _  ||   _   || | |   |  |   |  |   _   | License: ${packagee.license}
      |___| |_||__| |__||_|  |__|  |___|  |__| |__| Repo: ${packagee.repository.url} 

                                                                        
      `;

    }
  }

  // will leave this in because AMONG US (joke only, my friends are obsessed with among us :DD)
  
  const poly1 = new AboutPackage();

module.exports = AboutPackage;