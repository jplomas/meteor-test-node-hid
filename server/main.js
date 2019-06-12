import { Meteor } from 'meteor/meteor';
import TransportNodeHid from '@ledgerhq/hw-transport-node-hid';
// import 'babel-polyfill'
import Qrl from '@theqrl/hw-app-qrl'

Meteor.startup(() => {
  // code to run on server at startup
});

async function createTransport() {
  var transport = null;
  var qrl = await new Qrl(TransportNodeHid);
  return qrl
}

async function getVersion() {
  var qrl = await createTransport();
  return await qrl.get_version()
}

Meteor.methods({
  'test': () => {
    getVersion();

    return 'hello world'
  }
})