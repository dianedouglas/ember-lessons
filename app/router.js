import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('announcements');
  this.route('rental', {path: '/rental/:rental_id'});
  // now when the router receives a request where the url matches /rental/3
  // the router will map the url to the rental route handler (rental.js)
  // the rental id will be included in a params object. params.rental_id
});

export default Router;
