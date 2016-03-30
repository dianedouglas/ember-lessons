import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false, //show / hide form
  actions: {
    cityFormShow() {
      //show form by setting addNewCity to true.
      this.set('addNewCity', true);
    },
    getParamsEmitSave() {
      // this is triggered by submitting the form.
      var params = {
        name: this.get('nameParam'),
        country: this.get('countryParam')
      }
      this.set('addNewCity', false); //hide form again.
      this.sendAction('saveSendUp', params);
    }
  }
});
