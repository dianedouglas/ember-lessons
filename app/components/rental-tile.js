import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    }
  }
});
//component is two parts: handlebars template that is the display and a js source file defining behavior.
//components must have a dash. rental not ok. rental-tile is ok.
//we generate a new route when it's a new url. a component is a piece of the functionality on one part of the page. can put it on any url by instantiating it in a template.

//actions object is a set of methods that can be triggered from the template using an {{action}}helper.
//to set a property value in a component file to be used in view template file, use this.set('thingName', value);
// don't forget the comma between the properties in a component js file. also between action methods.
