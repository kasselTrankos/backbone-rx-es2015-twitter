import {Router} from 'backbone';
import Home from './../home';
import $ from 'jquery';

export default class Route extends Router{  
  routes(){
    return {
      '': () => { this.home(); }
    };
  }

  home() {
    console.log('Router#home was called!');
    this.view = new Home();
  }
}
