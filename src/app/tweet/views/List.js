import {View} from 'backbone';
import {Tweets} from './../../collections';
import {ListTweetsView} from './../tpl';

export default class List extends View{
  constructor(){
    super();
  }
  tagName(){
    return 'div';
  }
  el() {
    return '#listTweets';
  }
  initialize(){
    this.tweets = new Tweets();
    this.listenTo(this.accounts, 'reset', this.renderListTweets);
  }
  render(){

  }
  renderListTweets(){

  }
}
