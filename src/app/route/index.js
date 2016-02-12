import {Router} from 'backbone';
import Home from './../home';
import AccountView from './../tweet';
import $ from 'jquery';

export default class Route extends Router{
  constructor(){
    super();
    this.view = false;
  }
  routes(){
    return {
      '': () => { this.home(); },
      ':account': (account)=>{this.account(account, 1);},
      ':account/:page': (account, page=1)=>{this.account(account, page);}
    };
  }
  home() {
    this.view = new Home();
  }
  account(account, page){
    if(!this.view){
      this.view = new AccountView(this, account, page);
    }else{
      this.view.setPage(page)
    }
  }
}
