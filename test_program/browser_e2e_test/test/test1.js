module.exports = {
  ['Index page test'](client) {
    client.url('http://10.16.75.27:8101/')
      .waitForElementVisible('body', 1000)
      .pause(1000)
      .setValue('#usernameInput', 'jh3r')
      .setValue('#passwordInput', 'hm910705(')
      .waitForElementVisible('.btn-flat.btn-primary', 1000)
      .click('.btn-flat.btn-primary')
      .pause(2000)
      .assert.title('Newegg Central 2.0')
      .assert.visible('#navbar')
      .setValue('input[ng-model="ctrl.globalSearchText"]', 'test value')
      .waitForElementVisible('.search-btn', 1000)
      .click('.search-btn')
      .pause(1000)
      .assert.containsText('.page-content .well > h3',
      'We looked everywhere but we couldn\'t find it!')
      .end();
  }
}