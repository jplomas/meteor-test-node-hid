import { Template } from 'meteor/templating';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar('');
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    Meteor.call('test', function (error, result) {
      console.log(result);
      $('.version').text(result.version)
    });
  },
});
