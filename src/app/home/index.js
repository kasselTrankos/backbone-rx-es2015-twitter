import {View} from 'backbone';
import {HomeView} from './view/home.view';

export default class Home extends View {
  constructor(){
    super();
    this.tagName = 'div';
    this.el = '#form';
    this.events = {};

  }
  initialize() {
    this.render();
    ///this.listenTo(this.model, "change", this.render);
  }
  render() {
    return new HomeView();
  }
}
