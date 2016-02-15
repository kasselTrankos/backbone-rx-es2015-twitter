import {View} from 'backbone';
import {ListPagesView} from './../tpl';
import Route from './../../route';
import Rx from 'rx';
import $ from 'jquery';
import 'rx-dom';

export default class List extends View{
  constructor(options){
    super(options);
    this.RxObservable = false;
    this.page = options.page;
    this.pagesShown = options.pagesShown;
    this.account = options.account;
    this.route = options.route;
    this.listPages = ListPagesView(this.$el, this.account, this.pagesShown);

  }
  events(){

    return {
      'change .pagination': 'gotoPage'
    };
  }
  observables(){
    const Route = this.route;
    this.RxObservable = true;
    const a = $('.pagination');
    console.log(this.aClick);
    var source = Rx.Observable.fromEventPattern(
      function add (h) {
        a.on('click', 'a', h);
        //j = h;
      },
      function remove (h) {
        a.off('click', 'a', h);
      }
    ).do((e)=>{e.preventDefault();})
    .pluck('target', 'href')
    .subscribe((href)=>{
      console.log(href, ' class');
      Route.navigate(`/${_.takeRight(href.split('/'), 2).join('/')}`, {trigger:true});
      return false;
    });



    /*const pagination = Rx.Observable.fromEvent(a, 'click', false)
      .do((e)=>{e.preventDefault();})
      .pluck('target', 'href')
      .subscribe((href)=>{
        console.log(href, ' class');
        Route.navigate(`/${_.takeRight(href.split('/'), 2).join('/')}`, {trigger:true});

      });*/
  }
  tagName(){
    return 'div';
  }
  el() {
    return '#pageTweets';
  }
  ///used by events in backbone
  gotoPage(e){
    console.log(  document.querySelectorAll('.pagination a'), 'p0pp0');
    /*e.preventDefault();
    this.route.navigate(e.currentTarget.getAttribute('href'), {trigger:true});

    return false;*/
  }
  initialize(){

  }
  renderPagesTweets(size, currpage=1){
    this.listPages(size, currpage);
    if(!this.RxObservable)
      this.observables();

  }
  renderListTweets(){

  }
}
