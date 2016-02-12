import {Collection} from 'backbone';
import {Tweet} from './../models';

export default class Tweets extends Collection{
  constructor(options={}){
    super(options);
    this.model = Tweet;
  }
  setAccount(account=''){
    this.account = account;
  }
  fetch(options={}){
    options.reset = true;
    this.trigger('fetch', this, options);
    return Collection.prototype.fetch.call(this, options);
  }
  url(){
    return `/apitwitter/tweet/${this.account}`;
  }
}
