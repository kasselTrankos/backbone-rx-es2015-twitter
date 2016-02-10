import {View} from 'backbone';
import {HomeView} from './view/home.view';
import createRootNode from 'virtual-dom/create-element';

export default class Home extends View {

  tagName() {
    return 'div';
  }
  el() {
    return '#form';
  }
  initialize() {
    this.render();
    ///this.listenTo(this.model, "change", this.render);
  }
  render() {
    const node =  HomeView();
    this.$el.append(createRootNode(node));
    
  }
}
