import {View} from 'backbone';
import {HomeView, ListAccountView} from './view';
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
    console.log(this.accounts.size(), ' poilo');
    const node = new ListAccountView(this.accounts);
    this.$el.append(createRootNode(node));
  }
  render() {
    const node =  HomeView();
    this.$el.append(createRootNode(node));

  }
}
