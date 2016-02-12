import {View} from 'backbone';
import {ListPagesView} from './../tpl';
import Route from './../../route';

export default class List extends View{
  constructor(options){
    super(options);

    this.page = options.page;
    this.tweetsPerPage = options.tweetsPerPage;
    this.account = options.account;
    this.route = options.route;
    this.listPages = ListPagesView(this.$el, this.account, this.page, this.tweetsPerPage);

  }
  events(){
    return {
      'click a': 'gotoPage'
    };
  }
  tagName(){
    return 'div';
  }
  el() {
    return '#pageTweets';
  }
  gotoPage(e){
    e.preventDefault();
    console.log(e.currentTarget);
    this.route.navigate(e.currentTarget.getAttribute('href'), {trigger:true});
    return false;
  }
  initialize(){

  }
  renderPagesTweets(size){
    this.listPages(size)
  }
  renderListTweets(){

  }
}
