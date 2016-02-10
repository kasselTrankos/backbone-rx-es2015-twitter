import h from 'virtual-dom/h';
import _ from 'lodash';
const ListAccountView = (buttons=[])=>{
  const content = h("div", [
    (buttons.length===0)
      ? h('p', {className:'text-info'}, ['no hay ninguna cuenta introduce una please!!'])
      : _.map(buttons, Button)
  ]);
  const Button = (button)=> {
    return h('button', {className:'btn btn-success', type: 'button'}, [button.name]);
  }
  return content;
}
export {ListAccountView}
