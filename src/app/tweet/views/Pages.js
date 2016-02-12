import {View} from 'backbone';
import {ListPagesView} from './../tpl';

export default class List extends View{
  constructor(options){
    super(options);

    this.page = options.page;
    this.tweetsPerPage = options.tweetsPerPage;
    this.account = options.account;
    this.listPages = ListPagesView(this.$el, this.account, this.page, this.tweetsPerPage);

  }
  tagName(){
    return 'div';
  }
  el() {
    return '#pageTweets';
  }
  initialize(){

  }
  renderPagesTweets(size){
    this.listPages(size)
  }
  renderListTweets(){

  }
}
