/* jshint node: true */
module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    slack: {
      webhookURL: process.env.webhookURL
    }
  }
  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }
  return ENV;
};
