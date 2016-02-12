import {View} from 'backbone';
import {ContentView} from './tpl';
import createRootNode from 'virtual-dom/create-element';
import List from './views/List';
import Pages from './views/Pages';
import Tweets from './../collections/Tweets';

export default class AccountView extends View{
  constructor(route, account, page=1){
    super();
    this.account = account;
    this.page = page;
    this.tweets.setAccount(this.account);
    this.tweets.fetch();
    this.render();

    this.list = new List({account:this.account, page:1, tweetsPerPage:6});
    this.pagination = new Pages({route: route, account:this.account, page:1, tweetsPerPage:6});

  }
  tagName(){
    return 'div';
  }
  el() {
    return '#wrapper';
  }
  initialize(account){
    this.tweets = new Tweets();
    this.listenTo(this.tweets, 'reset', this.renderListTweets);

  }
  update(page){
    console.log('page', page);
  }
  renderListTweets(){
    this.list.renderListTweets(this.tweets);
    this.pagination.renderPagesTweets(this.tweets.size());
  }
  render(){
    const node = ContentView(this.account);
    this.$el.append(createRootNode(node));
  }
}
