import {View} from 'backbone';
import {ContentView} from './tpl';
import createRootNode from 'virtual-dom/create-element';
import List from './views/List';
import Pages from './views/Pages';
import Tweets from './../collections/Tweets';
import io from 'socket.io-client/socket.io';

export default class AccountView extends View{
  constructor(route, account, page=1){
    super();
    this.account = account;
    this.page = page;
    this.route = route;
    this.tweets.setAccount(this.account);
    this.tweets.fetch();
    this.$el.empty();
    this.render();

    this.list = new List({route: route, account:this.account, page:1, tweetsPerPage:6});
    this.pagination = new Pages({route: route, account:this.account, pagesShown:7});
    socket();
  }
  socket(){
    const server = {
      connections: [],
      path:'/ws/twitter',
      host: 'localhost',
      port: '3001'
    };
    const socket= {
      path: `${server.socket.path}`,
      uri: `http://${server.host}:${server.port}`
    }
    const uri = `http://${server.host}:${server.port}/${server.service}`;
    this.connections.push(account);
    const socketConnect = io(`${socket.uri}/${this.account}`,
      { path: socket.path, transports: ['polling']});
    socketConnect.on('tweet', (data) => {
      console.log(callback, data, ' tweet');

    });
  }
  tagName(){
    return 'div';
  }
  el() {
    return '#wrapper';
  }
  events(){
    return {
      'click a.home' : 'gotoHome'
    }
  }
  gotoHome(e){
    e.preventDefault();
    this.route.navigate(e.currentTarget.getAttribute('href'), {trigger:true});
    return false;
  }
  initialize(account){
    this.tweets = new Tweets();
    this.listenTo(this.tweets, 'reset', this.renderListTweetsPagination);

  }
  setPage(page){
    this.page = parseInt(page);
    this.renderListTweetsPagination();
  }
  renderListTweetsPagination(){
    this.list.renderListTweets(this.tweets, this.page);
    this.pagination.renderPagesTweets(this.tweets.size(), this.page);
  }
  render(){
    const node = ContentView(this.account);
    this.$el.append(createRootNode(node));
  }
}
