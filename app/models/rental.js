//ds.attr = data store attribute
// blueprint of each rental.
// then install emberfire, which creates a new application adapter. ember install emberfire.
//adapters connect our apps to their data stores. adapter code creates an adapter specifically meant to connect to firebase.
import DS from 'ember-data';

export default DS.Model.extend({
    owner: DS.attr(),
    city: DS.attr(),
    type: DS.attr(),
    image: DS.attr(),
    bedrooms: DS.attr(),
});
