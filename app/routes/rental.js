import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
    //we're passing this route a hash of params which comes out in the model hook. then we can use the built in findRecord method to get the rental with the matching id.
  },
  actions: {
    //this won't get called if it isn't in actions, even if it's named right.
    deleteRental(rental) {
      rental.destroyRecord(); //destroy yourself!
      this.transitionTo('index'); //redirect to index route.
    },
    update(rental, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          rental.set(key,params[key]);
        }
      });
      rental.save();
      this.transitionTo('index');
    },
  }
});
