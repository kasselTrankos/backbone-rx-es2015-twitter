import {View} from 'backbone';
import $ from 'jquery';
import {HomeView, ListAccountView} from './tpl';
import Accounts from './../collections/Accounts';
import Account from './../models/Account';
import createRootNode from 'virtual-dom/create-element';

export default class Home extends View {

  tagName() {
    return 'div';
  }
  el() {
    return '#wrapper';
  }
  events(){
    return {
      'click wrapper#accountSave button': 'submit'
    };
  }
  submit(e){
    e.preventDefault();
    const accountName = $('form input:eq(0)').val();
    const account = new Account({name: accountName});
    account.save();
    this.accounts.add(account);
    console.log('savibng:', account);
    return false;

  }
  initialize() {

    this.accounts = new Accounts();
    this.listenTo(this.accounts, 'reset', this.renderAccounts);
    this.accounts.on('change', this.renderAccounts, this);
    this.accounts.fetch();
    this.render();
    this.listView = ListAccountView(this.$el);
  }
  renderAccounts(){
  /*  const node = new ListAccountView(this.accounts);
    this.$el.append(createRootNode(node));*/
    this.listView(this.accounts);
  }
  render() {
    const node =  HomeView();
    this.$el.append(createRootNode(node));

  }
}
