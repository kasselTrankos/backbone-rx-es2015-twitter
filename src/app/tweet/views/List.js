import {View} from 'backbone';
import Tweets from './../../collections/Tweets';
import {ListTweetsView} from './../tpl';

export default class List extends View{
  constructor(options){
    super(options);
    this.account = options.account;
    this.page = options.page;
    this.tweetsPerPage = options.tweetsPerPage;


  }
  tagName(){
    return 'div';
  }
  el() {
    return '#listTweets';
  }
  initialize(){
    this.listView = ListTweetsView(this.$el);
  }
  render(){

  }
  renderListTweets(tweets,page){
    this.listView(tweets, page, this.tweetsPerPage);
  }
}
