const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './__test__/**/*.test.ts',
  output: './__output__',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8585',
      waitForNavigation: 'networkidle0',
      show: false,
      windowSize: '1920x1080px',
    },
  },
  include: {
    I: './steps_file.ts',
  },
  bootstrap: null,
  mocha: {},
  name: 'acceptance',
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
