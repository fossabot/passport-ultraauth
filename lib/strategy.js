var passportOpenIdConnect = require('passport-openidconnect');

function Strategy(options, verify) {
  options.issuer = 'https://srv.qryp.to/op';
  options.resolver = { 
    resolve: function resolve(identifier, callback) {
      return callback(null, options.issuer);
    }
  };
  options.registrar =  {
    resolve: function(identifier, callback) {
      callback(null, {id: options.id, secret: options.secret, redirectURIs: options.redirectURIs});
    }
  };
  return new passportOpenIdConnect.Strategy(options, verify);
}

module.exports = Strategy;
