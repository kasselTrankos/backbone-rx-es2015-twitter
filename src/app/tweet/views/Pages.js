import {View} from 'backbone';
import {ListPagesView} from './../tpl';
import Route from './../../route';
import Rx from 'rx';

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

    /*return {
      'click .pagination a': 'gotoPage'
    };*/
  }
  observables(){
    const Route = this.route;
    const pagination = Rx.Observable.fromEvent(
      document.querySelectorAll('.pagination a'), 'click', false)
      .do((e)=>{e.preventDefault();})
      .pluck('target', 'href')
      .subscribe((href)=>{
        Route.navigate(`/${_.drop(href.split('/'), 3).join('/')}`, {trigger:true});
      });
  }
  tagName(){
    return 'div';
  }
  el() {
    return '#pageTweets';
  }
  ///used by events in backbone
  gotoPage(e){
    e.preventDefault();
    this.route.navigate(e.currentTarget.getAttribute('href'), {trigger:true});

    return false;
  }
  initialize(){

  }
  renderPagesTweets(size, currpage=1){
    this.listPages(size, currpage);
    this.observables();
  }
  renderListTweets(){

  }
}
