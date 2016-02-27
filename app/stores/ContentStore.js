var constants = require('../constants/Constants');
var Store = require('./Store');

var ContentStore = module.exports = Store.extend({

  init: function() {
    this.bind(constants.LOAD_CATEGORY_CONTENT, this.set);
    this.bind(constants.LOAD_STORY_DATA, this.set);
  }
});