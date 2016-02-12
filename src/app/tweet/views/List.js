import {View} from 'backbone';
import Tweets from './../../collections/Tweets';
import {ListTweetsView} from './../tpl';

export default class List extends View{
  constructor(options){
    super(options);
    this.account = options.account;
    console.log(this.account, ' popso');
    this.tweets.setAccount(this.account);
    this.tweets.fetch();
  }
  tagName(){
    return 'div';
  }
  el() {
    return '#listTweets';
  }
  initialize(){
    this.tweets = new Tweets();
    this.listenTo(this.tweets, 'reset', this.renderListTweets);
    this.listView = ListTweetsView(this.$el);
  }
  render(){

  }
  renderListTweets(){
    this.listView(this.tweets);
  }
}
