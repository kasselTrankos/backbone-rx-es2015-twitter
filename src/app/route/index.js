import {Router} from 'backbone';
import Home from './../home';
import AccountView from './../tweet';
import $ from 'jquery';
import h from 'virtual-dom/h';
import createRootNode from 'virtual-dom/create-element';

export default class Route extends Router{
  constructor(){
    super();

    this.view = false;
  }
  routes(){
    return {
      '': () => { this.home(); },
      ':account': (account)=>{this.account(account, 1);},
      ':account/:page': (account, page=1)=>{this.account(account, parseInt(page));}
    };
  }
  home() {
    /*if(!this.views.home){
      this.views.home = new Home();
    }*/

    this.createDOM();
    this.view = new Home(this);
  }
  account(account, page){

    if(!this.view.setPage){
      this.createDOM();
      this.view = new AccountView(this, account, page);
    }else{
      this.view.setPage(page)
    }
  }
  createDOM(){
    if(this.view) this.view.remove();
    if(document.getElementById('wrapper')){

    }else{
      const wrapper = h('div', {id: 'wrapper'});
      document.getElementById('contWrapper').appendChild(createRootNode(wrapper));
    }
  }
}
