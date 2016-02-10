import {Collection} from 'backbone';
import Account from './../models/Account';

export default class Accounts extends Collection {
  model(){
    return Account;
  }
  url(){
    return '/apitwitter/account';
  }
}
