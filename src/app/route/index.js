import {Router} from 'backbone';
import Home from './../home';
import AccountView from './../account';
import $ from 'jquery';

export default class Route extends Router{
  routes(){
    return {
      '': () => { this.home(); },
      ':account': ()=>{this.account();}
    };
  }
  home() {
    this.view = new Home();
  }
  account(){
    this.view = new AccountView();
  }
}
