var request = require("superagent");

module.exports = {
  getData: function(uri, success, failure) {
    request.get(uri).end(function(err, res) {
      if (!err) {
        success(res);
      } else {
        failure(err);
      }
    });
  }
};