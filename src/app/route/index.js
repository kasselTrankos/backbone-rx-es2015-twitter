import {Router} from 'backbone';
import Home from './../home';
import AccountView from './../tweet';
import $ from 'jquery';

export default class Route extends Router{
  routes(){
    return {
      '': () => { this.home(); },
      ':account': (account)=>{this.account(account);}
    };
  }
  home() {
    this.view = new Home();
  }
  account(account){
    this.view = new AccountView(account);
  }
}
