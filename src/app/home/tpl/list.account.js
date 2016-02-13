import h from 'virtual-dom/h';
import _ from 'underscore';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';
const ListAccountView = (el)=>{
  let content, prevContent;
  content =  h('p', {className:'text-info'}, ['cargando Datos de tus cuentas']);
  let node = createElement(content);
  el.append(node);
  return (buttons={})=>{
    prevContent = content;
    content = h('div', {className: 'list-accounts'}, [
      (buttons.size()===0)
        ? h('p', {className:'text-info'}, ['no hay ninguna cuenta introduce una please!!'])
        : _.map(buttons.models, (el)=>h('a', {
          className:'btn btn-success goto-account',
          type: 'button',
          href: `/${el.get('name')}`
        }, [el.get('name')]))
    ]);
    let delta = diff(prevContent, content);
    node = patch(node, delta);
  }

}
export {ListAccountView}
