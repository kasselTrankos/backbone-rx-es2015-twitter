import h from 'virtual-dom/h';
import _ from 'underscore';
const ListAccountView = (buttons={})=>{
  
  const content = h("div", [
    (buttons.size()===0)
      ? h('p', {className:'text-info'}, ['no hay ninguna cuenta introduce una please!!'])
      : _.map(buttons.models, (el)=>h('button', {className:'btn btn-success', type: 'button'}, [el.get('name')]))
  ]);
  return content;
}
export {ListAccountView}
