const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './__test__/**/*.test.ts',
  output: './__output__',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8080',
      waitForNavigation: 'networkidle0',
      show: false,
    },
  },
  include: {
    I: './steps_file.ts',
  },
  bootstrap: null,
  mocha: {},
  name: 'acceptance',
  chrome: {
    defaultViewport: {
      width: 1920,
      height: 1080,
    },
    args: [
      "--no-sandbox",
      "--headless"
    ],
  },
  plugins: {
    retryFailedStep: {
      enabled: false,
    },
    screenshotOnFail: {
      enabled: false,
    },
  },
};
