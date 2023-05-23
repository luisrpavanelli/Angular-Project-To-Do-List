module.exports = function(config) {
    config.set({
      frameworks: ['jasmine'],
      plugins: [
        'karma-jasmine',
        'karma-jasmine-html-reporter',
      ],
      // Rest of the configuration...
    });
  };
  