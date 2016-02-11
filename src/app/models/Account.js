import {Model} from 'backbone';

export default class Account extends Model {
  urlRoot(){
    return '/apitwitter/account';
  }
  idAttribute(){
    return '_id';
  }
  defaults(){
    return {
      name: ''
    }
  }
}
