import {Router} from 'backbone';
import Home from './../home';
import AccountView from './../tweet';
import $ from 'jquery';

export default class Route extends Router{
  constructor(){
    super();

  }
  routes(){
    return {
      '': () => { this.home(); },
      ':account': (account, page=1)=>{this.account(account, page);},
      ':account/:page': (account, page=1)=>{this.account(account, page);}
    };
  }
  home() {
    this.view = new Home();
  }
  account(account, page){
    this.view = this.view.update(page) || new AccountView(this, account, page) ;
  }
}
