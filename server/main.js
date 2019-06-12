import { Meteor } from 'meteor/meteor';

import 'babel-polyfill'
import Qrl from '@theqrl/hw-app-qrl/lib/Qrl.js'
import TransportNodeHid from '@ledgerhq/hw-transport-node-hid-noevents';

async function createTransport() {
  var t = await TransportNodeHid.open();
  return t
}

async function getVersion() {
  var transport = await createTransport();
  var qrl = await new Qrl(transport);
  return await qrl.get_version().then((r) => { 
    console.log('returning to clinet: ', r);
    transport.close();
    return r
  })
}

Meteor.methods({
  'test': () => {
    var r = getVersion();
    return r
  }
})