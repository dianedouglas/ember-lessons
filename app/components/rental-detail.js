import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete: function(rental) {
      if(confirm('ARe you sUrEE?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
