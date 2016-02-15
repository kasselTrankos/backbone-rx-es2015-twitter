import {Model} from 'backbone';

export default class Tweet extends Model {
  idAttribute(){
    return '_id';
  }
}
