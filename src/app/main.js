'use strict';
import Backbone from 'backbone';
import Route from './route';
import $ from 'jquery';
$(() => {
  // *Finally, we kick things off by creating the **App**.*
  new Route();
  Backbone.history.start();
});
