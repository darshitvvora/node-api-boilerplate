const app = require('./src/app');
global.app = app;

after(function() {
  return Promise.all([
    // Add any promises here for processes that need to be closed before the tests can finish


  ]);
});
