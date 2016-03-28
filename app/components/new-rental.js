import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },
    getParamsEmitSave() {
      //get params from form using this.get. get values from template inside component js.
      var params = {
        owner: this.get('ownerParam'),
        city: this.get('cityParam'),
        type: this.get('typeParam'),
        image: this.get('imageParam'),
        bedrooms: this.get('bedroomsParam'),
      };
      this.set('addNewRental', false); //hide the form after it has been submitted.
      this.sendAction('saveToRouteHandler', params); //send action up to the parent route handler via temkplate.
    }
  }
});
