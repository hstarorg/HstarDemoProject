module.exports = {
  src_folders: ['test'],
  output_folder: 'dist/reports',

  selenium: {
    'start_process': true,
    'server_path': 'node_modules/selenium-server/lib/runner/selenium-server-standalone-2.53.1.jar',
    'host': '127.0.0.1',
    'port': 7777,
    'cli_args': {
      'webdriver.chrome.driver': require('chromedriver').path
    }
  },
  test_settings: {
    "default": {
      "selenium_port": 7777,
      "selenium_host": "localhost",
      "silent": true
    },

    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    }
  }
};