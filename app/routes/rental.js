import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
    //we're passing this route a hash of params which comes out in the model hook. then we can use the built in findRecord method to get the rental with the matching id.
  },
});
