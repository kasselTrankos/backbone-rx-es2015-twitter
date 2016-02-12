import {View} from 'backbone';
import {ContentView} from './tpl';
import createRootNode from 'virtual-dom/create-element';

export default class AccountView extends View{
  constructor(account){
    super();
    this.account = account;
  }
  tagName(){
    return 'div';
  }
  el() {
    return '#wrapper';
  }
  initialize(){

  }
  render(){
    const node = ContentView();
    this.$el.append(createRootNode(node));
  }
}
