import {Collection} from 'backbone';
import Tweet from './../models/Tweet';

export default class Tweets extends Collection{
  constructor(options){
    super(options);
    this.model = Tweet;
  }
  fetch(options={}){
    options.reset = true;
    this.trigger('fetch', this, options);
    return Collection.prototype.fetch.call(this, options);
  }
  url(){
    return '/apitwitter/tweet';
  }
}
