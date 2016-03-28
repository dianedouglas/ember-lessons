import Ember from 'ember';


export default Ember.Route.extend({
  //model hook makes the rentals available to the route's corresponding template as the model property.
//model data in a route handler is available to the templates and components that correspond to that route. puts the rentals into the context of the index.hbs template.
  model() {
    return this.store.findAll('rental');
  },
  actions: {
    deleteRental(rental) {
      rental.destroyRecord(); //destroy yourself!
      this.transitionTo('index'); //redirect to index route.
    },
    saveToStore(rentalInfo) {
      var newRental = this.store.createRecord('rental', rentalInfo); //another model method. destroyRecord and createRecord.
      newRental.save(); //also built in model method. don't just create it, save it. validation could come first.
      this.transitionTo('index'); //redirect to index.
    }
  }
});
