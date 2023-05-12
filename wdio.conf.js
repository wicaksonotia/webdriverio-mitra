// cons url = req = require('./urls')
// const ENV = process.env.ENV
// if(!ENV || !['dev','qa', 'prod'].includes(ENV)){
//   console.log('please pass the correct ENV value : ENV=dev|qa|prod')
//   process.exit()
// }

const video = require('wdio-video-reporter');
const allure = require('allure-commandline');
import report from '@wdio/allure-reporter'
import dns from 'node:dns'
const { generate } = require('multiple-cucumber-html-reporter');
const { removeSync } = require('fs-extra');

exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called.
    //
    // The specs are defined as an array of spec files (optionally using wildcards
    // that will be expanded). The test for each spec file will be run in a separate
    // worker process. In order to have a group of spec files run in the same worker
    // process simply enclose them in an array within the specs array.
    //
    // If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
    // then the current working directory is where your `package.json` resides, so `wdio`
    // will be called from there.
    //
    specs: [
        //'./tests/features/lihatpesanan/1revisequantity.feature' //create order dikirim (kuantiti>3)
        // './tests/features/lihatpesanan/2prosesorder(dalampengiriman).feature' //konfirmasi perubahan
        // './tests/features/lihatpesanan/3prosesorder(diproses-dalampengiriman).feature' //create order dikirim
        // './tests/features/lihatpesanan/4confirmorder(selesai).feature' //confirm barang telah diterima di Toko
        // './tests/features/loyaltydanreward/5submitmisitbr-jawabansingkat.feature'
        // './tests/features/loyaltydanreward/6submitmisitbr-paragraf.feature'
        // './tests/features/loyaltydanreward/7submitmisitbr-pilganangka.feature'
        // './tests/features/loyaltydanreward/8submitmisitbr-pilganjawabansingkat.feature'
        // './tests/features/loyaltydanreward/9submitmisitbr-pilganparagraf.feature'
        // './tests/features/loyaltydanreward/10submitmisitbr-kotakcentang.feature'
        // './tests/features/loyaltydanreward/11submitmisitbr-unggahgambar.feature' //unggah image manual
        // './tests/features/loyaltydanreward/12submitmisitbr-angka.feature'
        // './tests/features/loyaltydanreward/13submitmisitbr-tanggal.feature'
        // './tests/features/loyaltydanreward/14submitmisitbr-sc.feature'
        // './tests/features/loyaltydanreward/15submitmisitbr-scir.feature'
        // './tests/features/loyaltydanreward/16submitmisitbr-planogram.feature'
        // './tests/features/loyaltydanreward/17submitmisitbr-upc.feature'
        // './tests/features/loyaltydanreward/18cekmisiselesai.feature'
        // './tests/features/spinthewheel/19createstwmitra-audiencepilihsemua.feature'
        // './tests/features/spinthewheel/20createstwmitra-berdasarkantier.feature'
        // './tests/features/spinthewheel/21createstwmitra-uploadaudience.feature'
        // './tests/features/spinthewheel/22createstwmitra-audience-customaudience.feature'
        // './tests/features/spinthewheel/23createstwmitra-batasan1produk.feature'
        // './tests/features/spinthewheel/24createstwmitra-batasanprodukOR.feature'
        // './tests/features/spinthewheel/25createstwmitra-batasanprodukAND.feature'
        // './tests/features/spinthewheel/26editprogramstwmitra.feature'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    //to run: npx wdio wdio.conf.js --suite alltest
    suites: {
        alltest: [
        ]
    },
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 10,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [{

        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 5,
        //
        browserName: 'chrome',
        // 'goog:chromeOptions': {
        //     args: ["--start-maximized"],
        // },
        acceptInsecureCerts: true,
        // If outputDir is provided WebdriverIO can capture driver session logs
        // it is possible to configure which logTypes to include/exclude.
        // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
        // excludeDriverLogs: ['bugreport', 'server'],
        /*'cjson:metadata': {
            browser: {
                name: 'chrome',
                version: '95.0.4638.69',
            },
            device: 'Lenovo ThinkPad',
            platform: {
                name: 'windows',
                version: '10'
            },
        },*/
          }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'error',
    //
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/appium-service': 'info'
    // },
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: 'http://localhost',
    // baseUrl: url[process.env.ENV], //npm test -- --spec ./test
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 60000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: ['chromedriver'],

    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'cucumber',
    //
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Delay in seconds between the spec file retry attempts
    // specFileRetriesDelay: 0,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    reporters: [
        ["spec", {
            symbols: {
                passed: '[PASS]',
                failed: '[FAIL]',
            },
            addConsoleLogs: true,
        }],
        //[video, {
        //     outputDir: './reports/video',
             // recordAllActions: true,
        //   saveAllVideos: true,        // If true, also saves videos for successful test cases
        //   videoSlowdownMultiplier: 3, // Higher to get slower videos, lower for faster videos [Value 1-100]
        //   maxTestNameCharacters: 200, //Default 250
        //   videoRenderTimeout: 600000, //Default 5
        //}],
       // ['allure', {
        //    outputDir: './allure-results',
        // disableWebdriverStepsReporting: false,
        //     disableWebdriverScreenshotsReporting: false,
             // useCucumberStepReporter: true,
        //    addConsoleLogs: true,
        //    }],
        // ['cucumberjs-json', {
        //     jsonFolder: './reports/cucumberjs-json/json',
        //     language: 'en',
        // }],
    ],

    //
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: [
            //'./tests/step-definitions/lihatpesanan/1revisequantity.js' 
            // './tests/step-definitions/lihatpesanan/2prosesorder(dalampengiriman).js'
            // './tests/step-definitions/lihatpesanan/3prosesorder(diproses-dalampengiriman).js'
            // './tests/step-definitions/lihatpesanan/4confirmorder(selesai).js'
            // './tests/step-definitions/loyaltydanreward/5submitmisitbr-jawabansingkat.js'
            // './tests/step-definitions/loyaltydanreward/6submitmisitbr-paragraf.js'
            // './tests/step-definitions/loyaltydanreward/7submitmisitbr-pilganangka.js'
            // './tests/step-definitions/loyaltydanreward/8submitmisitbr-pilganjawabansingkat.js'
            // './tests/step-definitions/loyaltydanreward/9submitmisitbr-pilganparagraf.js'
            // './tests/step-definitions/loyaltydanreward/10submitmisitbr-kotakcentang.js'
            // './tests/step-definitions/loyaltydanreward/11submitmisitbr-unggahgambar.js'
            //  './tests/step-definitions/loyaltydanreward/12submitmisitbr-angka.js'
            //  './tests/step-definitions/loyaltydanreward/13submitmisitbr-tanggal.js'
            // './tests/step-definitions/loyaltydanreward/14submitmisitbr-sc.js'
            // './tests/step-definitions/loyaltydanreward/15submitmisitbr-scir.js'
            // './tests/step-definitions/loyaltydanreward/16submitmisitbr-planogram.js'
            // './tests/step-definitions/loyaltydanreward/17submitmisitbr-upc.js'
            // './tests/step-definitions/loyaltydanreward/18cekmisiselesai.js'
            // './tests/step-definitions/spinthewheel/19createstwmitra-audiencepilihsemua.js'
            //'./tests/step-definitions/spinthewheel/20createstwmitra-berdasarkantier.js'
            // './tests/step-definitions/spinthewheel/21createstwmitra-uploadaudience.js'
            //'./tests/step-definitions/spinthewheel/22createstwmitra-audience-customaudience.js' 
            // './tests/step-definitions/spinthewheel/23createstwmitra-batasan1produk.js' 
            // './tests/step-definitions/spinthewheel/24createstwmitra-batasanprodukOR.js' 
            //'./tests/step-definitions/spinthewheel/25createstwmitra-batasanprodukAND.js' 
            //  './tests/step-definitions/spinthewheel/26editprogramstwmitra.js' 
            
        ],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: ['@babel/register'],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        format: ['pretty','io.qameta.allure:allure-cucumber-jvm',],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 600000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false,
        retry:0
    },

    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    // onPrepare: () => {
    //     // Remove the `.tmp/` folder that holds the json and report files
    //     removeSync('./reports/cucumberjs-json/');
    //   },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     * @param {String} cid worker id (e.g. 0-0)
     */
    beforeSession: function () {
        dns.setDefaultResultOrder('ipv4first');
    },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
    // before: function (capabilities, specs) {
    // },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Cucumber Hooks
     *
     * Runs before a Cucumber Feature.
     * @param {String}                   uri      path to feature file
     * @param {GherkinDocument.IFeature} feature  Cucumber feature object
     */
    // beforeFeature: function (uri, feature) {
    // },
    /**
     *
     * Runs before a Cucumber Scenario.
     * @param {ITestCaseHookParameter} world world object containing information on pickle and test step
     */
    // beforeScenario: function (world) {
    //     browser.maximizeWindow();
    // },
    beforeScenario: function (world) {
        browser.maximizeWindow();
    },
    /**
     *
     * Runs before a Cucumber Step.
     * @param {Pickle.IPickleStep} step     step data
     * @param {IPickle}            scenario scenario pickle
     */
    // beforeStep: function (step, scenario) {
    // },
    /**
     *
     * Runs after a Cucumber Step.
     * @param {Pickle.IPickleStep} step     step data
     * @param {IPickle}            scenario scenario pickle
     * @param {Object}             result   results object containing scenario results
     * @param {boolean}            result.passed   true if scenario has passed
     * @param {string}             result.error    error stack if scenario failed
     * @param {number}             result.duration duration of scenario in milliseconds
     */
    // afterStep: function (step, scenario, result) {
    // },
    afterStep: function (test, scenario, { error, duration, passed }) {
        if (error) {
          browser.takeScreenshot();
          var date = Date.now();
          browser.saveScreenshot('./reports/screenshots/error - '+date+'.png');
          // browser.saveScreenshot('./reports/screenshots/'+scenario+'-'+step+'-'+result+'-'+date+'.png');
        }
    },
    /**
     *
     * Runs before a Cucumber Scenario.
     * @param {ITestCaseHookParameter} world  world object containing information on pickle and test step
     * @param {Object}                 result results object containing scenario results
     * @param {boolean}                result.passed   true if scenario has passed
     * @param {string}                 result.error    error stack if scenario failed
     * @param {number}                 result.duration duration of scenario in milliseconds
     */
    // afterScenario: function (world, result) {
    // },
    /**
     *
     * Runs after a Cucumber Feature.
     * @param {String}                   uri      path to feature file
     * @param {GherkinDocument.IFeature} feature  Cucumber feature object
     */
    // afterFeature: function (uri, feature) {
    // },
    afterFeature: function (uri, feature) {
        report.addEnvironment("Platform", "Laptop")
        report.addEnvironment("Device", "Lenovo")
        // report.addEnvironment("ENV URL", appbaseURL)
        // report.addEnvironment("Platform", process.platform)
    },

    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    // onComplete: function(exitCode, config, capabilities, results) {
    // },
    // onComplete: function() {
    //     const reportError = new Error('Could not generate Allure report')
    //     const generation = allure(['generate', 'allure-results', '--clean'])
    //     return new Promise((resolve, reject) => {
    //         const generationTimeout = setTimeout(
    //             () => reject(reportError),
    //             5000)

    //         generation.on('exit', function(exitCode) {
    //             clearTimeout(generationTimeout)

    //             if (exitCode !== 0) {
    //                 return reject(reportError)
    //             }

    //             console.log('Allure report successfully generated')
    //             resolve()
    //         })
    //     })
    // },
    /*onComplete: function(exitCode, config, capabilities, results) {
        generate({
            jsonDir: './reports/cucumberjs-json/json',
            reportPath: './reports/cucumberjs-json/html',
            openReportInBrowser: true,
            saveCollectedJSON: true,
            displayDuration: true,
            displayReportTime: true,
            customData: {
              title: 'Run info',
              data: [
                  {label: 'Project', value: 'Principal DTE'},
                  {label: 'Sprint', value: '53'},
                  {label: 'Environment', value: 'QA'},
                  {label: 'Execution Time', value: 'Nov 17th 2021'},
              ]
          },
          // pageFooter:<div><p>Weekend Inc</p></div>,
        }
      );
    },*/
    /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
    //onReload: function(oldSessionId, newSessionId) {
    //}
}
