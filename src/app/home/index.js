import {View} from 'backbone';
import $ from 'jquery';
import {HomeView, ListAccountView} from './view';
import Accounts from './../collections/Accounts';
import Account from './../models/Account';
import createRootNode from 'virtual-dom/create-element';

export default class Home extends View {

  tagName() {
    return 'div';
  }
  el() {
    return '#form';
  }
  events(){
    return {
      'click form#accountSave button': 'submit'
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
    this.accounts.bind('change', this.renderAccounts);

    /*this.accounts.fetch({
      success: (data)=>{
        console.log(data, 'ounohk');
      },
      error: (e)=>{
        console.log(e, 'error');
      }
    });*/

    this.accounts.fetch();/*
    .done(function() {
      console.log(' lleva pronmse o no quien lo s');
    })
    .fail((e)=>{

    });*/
    this.render();
    this.renderAccounts();
    ///this.listenTo(this.model, "change", this.render);
  }
  renderAccounts(){
    const node = new ListAccountView(this.accounts);
    this.$el.append(createRootNode(node));
  }
  render() {
    const node =  HomeView();
    this.$el.append(createRootNode(node));

  }
}
