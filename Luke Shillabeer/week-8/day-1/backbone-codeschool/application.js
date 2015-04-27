var Appointment = Backbone.Model.extend({
  defaults: {
    title: 'Checkup',
    date: new Date()
  }
});

var appointment = new Appointment({id: 1});
appointment.set({cancelled: true});
appointment.save();
