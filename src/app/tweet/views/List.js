import {View} from 'backbone';
import Tweets from './../../collections/Tweets';
import {ListTweetsView} from './../tpl';

export default class List extends View{
  constructor(options){
    super(options);
    this.route = options.route;
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
  events(){
    return {
      'click a' : 'gotoHome'
    }
  }
  initialize(){
    this.listView = ListTweetsView(this.$el);
  }
  gotoHome(e){
    e.preventDefault();
    this.route.navigate(e.currentTarget.getAttribute('href'), {trigger:true});
    return false;
  }
  render(){

  }
  renderListTweets(tweets,page){
    this.listView(tweets, page, this.tweetsPerPage);
  }
}
