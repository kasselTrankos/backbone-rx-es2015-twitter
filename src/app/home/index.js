import {View} from 'backbone';
import {HomeView} from './view';
import Accounts from './../collections/Accounts';
import createRootNode from 'virtual-dom/create-element';

export default class Home extends View {

  tagName() {
    return 'div';
  }
  el() {
    return '#form';
  }
  initialize() {
    this.accounts = new Accounts();
    this.accounts.fetch();
    this.render();
    ///this.listenTo(this.model, "change", this.render);
  }
  render() {
    const node =  HomeView();
    this.$el.append(createRootNode(node));

  }
}
