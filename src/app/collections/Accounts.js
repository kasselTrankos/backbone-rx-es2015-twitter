import {Collection} from 'backbone';
import {Account} from './../models';

export default class Accounts extends Collection {
  constructor(options){
    super(options);
    this.model = Account;
  }
  fetch(options={}){
    options.reset = true;
    this.trigger('fetch', this, options);
    return Collection.prototype.fetch.call(this, options);
  }
  url(){
    return '/apitwitter/account';
  }
}
