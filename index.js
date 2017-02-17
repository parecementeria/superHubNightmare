var Nightmare = require('nightmare');
var nightmare = Nightmare();

nightmare
  .goto('http://192.168.0.1')
  .type('#password', 'xxxx')
  .click('.newCta')
  .wait(500)
  .wait('#advancedSettings')
  .click('#main #advancedSettings p a')
  .wait(500)
  .wait('.shadowedBox')
  .click('a[href="VmRgRebootRestoreDevice.asp"]')
  .wait(2000)
  .click('#ApplySettingsID .manageError .errorText a[href="javascript:rebootDevice();"]')
  .wait(2000)
  .end()
  .catch(function (error) {
    console.error('Search failed:', error);
  });
