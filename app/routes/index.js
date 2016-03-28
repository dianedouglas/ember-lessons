import Ember from 'ember';


export default Ember.Route.extend({
  //model hook makes the rentals available to the route's corresponding template as the model property.
//model data in a route handler is available to the templates and components that correspond to that route. puts the rentals into the context of the index.hbs template.
  model() {
    return this.store.findAll('rental');
  },
  actions: {
    destroyRental(rental) {
      rental.destroyRecord(); //destroy yourself!
      this.transitionTo('index'); //redirect to index route.
    }
  }
});
