import {View} from 'backbone';
import {ListPagesView} from './../tpl';

import Rx from 'rx';
import $ from 'jquery';


export default class List extends View{
  constructor(options){
    super(options);
    this.RxObservable = false;
    this.page = options.page;
    this.pagesShown = options.pagesShown;
    this.account = options.account;
    this.tweetsPerPage = options.tweetsPerPage;
    this.route = options.route;
    this.listPages = ListPagesView(this.$el, this.account, this.pagesShown, this.tweetsPerPage);

  }
  events(){

    return {
      'change .pagination': 'gotoPage'
    };
  }
  observables(){
    this.RxObservable = true;
    const Route = this.route;
    const pagination = $('.pagination');
    var source = Rx.Observable.fromEventPattern(
      function add (h) {
        pagination.on('click', 'a', h);
      },
      function remove (h) {
        pagination.off('click', 'a', h);
      }
    ).do((e)=>{e.preventDefault();})
    .pluck('target', 'href')
    .subscribe((href)=>{
      Route.navigate(`/${_.takeRight(href.split('/'), 2).join('/')}`, {trigger:true});
      return false;
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
    /*e.preventDefault();
    this.route.navigate(e.currentTarget.getAttribute('href'), {trigger:true});
    return false;*/
  }
  initialize(){
  }
  renderPagesTweets(size, currpage=1){
    this.listPages(size, currpage);
    if(!this.RxObservable)this.observables();
    return this;
  }
  renderListTweets(){
  }
}
