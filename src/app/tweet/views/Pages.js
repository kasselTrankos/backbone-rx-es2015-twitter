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
    this.listPages = ListPagesView(this.$el, this.account, this.tweetsPerPage);
    //this.on('GOTO_PAGE', this.renderPagesTweets, this);
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
    this.route.navigate(e.currentTarget.getAttribute('href'), {trigger:true});
    return false;
  }
  initialize(){

  }
  renderPagesTweets(size, currpage=1){
    console.log('UODATE', size, currpage, 'ERROR');
    this.listPages(size, currpage)
  }
  renderListTweets(){

  }
}
