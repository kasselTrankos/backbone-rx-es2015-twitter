import {View} from 'backbone';
import {ListPagesView} from './../tpl';
import Route from './../../route';

export default class List extends View{
  constructor(options){
    super(options);
    this.page = options.page;
    this.pagesShown = options.pagesShown;
    this.account = options.account;
    this.route = options.route;
    this.listPages = ListPagesView(this.$el, this.account, this.pagesShown);
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
    this.listPages(size, currpage)
  }
  renderListTweets(){

  }
}
