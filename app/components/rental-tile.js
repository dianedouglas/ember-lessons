import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    delete: function(rental) {
      if(confirm('ARe you sUrEE?')) {
        this.sendAction('destroyRental', rental);
        //passing in rental from template {{action 'delete' rental}} to know what to delete.
        //instead of this.set, we use this.sendAction to call a method defined in a parent.
        //this is like an event emitter. On the 'destroyRental' action we want to send 'rental' as the argument.

        //only route handlers can modify objects in data store. this is a component. we notify the route handler through the template with this.sendAction. Give it the name of function and the info it needs.
        //since our current route handler is index we need to head there through its template.
        //data down actions up: data passed down from route to template to component.
        //action must pass through in the opposite direction. component to template holding component to its route handler. rental-tile.hbs to rental-tile.js. rental-tile.js uses sendAction to go to index.hbs, which connects to index.js route handler.
      }
    }
  }
});
//component is two parts: handlebars template that is the display and a js source file defining behavior.
//components must have a dash. rental not ok. rental-tile is ok.
//we generate a new route when it's a new url. a component is a piece of the functionality on one part of the page. can put it on any url by instantiating it in a template.

//actions object is a set of methods that can be triggered from the template using an {{action}}helper.
//to set a property value in a component file to be used in view template file, use this.set('thingName', value);
// don't forget the comma between the properties in a component js file. also between action methods.
