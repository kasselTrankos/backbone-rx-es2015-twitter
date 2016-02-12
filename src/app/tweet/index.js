import {View} from 'backbone';
import {ContentView} from './tpl';
import createRootNode from 'virtual-dom/create-element';
import List from './views/List';

export default class AccountView extends View{
  constructor(account, page=1){
    super();
    this.account = account;
    this.page = page;
    this.render();
    this.list = new List({account:this.account, page:1, tweetsPerPage:6});
  }
  tagName(){
    return 'div';
  }
  el() {
    return '#wrapper';
  }
  initialize(account){
  }
  render(){
    const node = ContentView(this.account);
    this.$el.append(createRootNode(node));
  }
}
