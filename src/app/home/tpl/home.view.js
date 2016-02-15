import h from 'virtual-dom/h';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';

const HomeView = (el)=>{
  let content, prevContent;
  content = h('p', ['Pintando contenido espera por favor']);
  let node = createElement(content);
  el.append(node);
  return (err)=>{
    prevContent = content;
    let classFormGroup = 'form-group';
    if(err) classFormGroup+=' has-error';
    content = h('form', {method: 'POST', id:'accountSave'}, [
      h("h3", {'className': 'blue'}, ['Añade cuenta de twitter']),
      //{ render: TodoList, data: state.items },
      h("div", {'className':classFormGroup}, [
        h('label', {'for':'twitterAccount'}, ['Cuenta de Twitter']),
        h("input", {
          className: 'form-control',
          id: 'twitterAccount',
          name:'text',
          placeholder:'Twiitter account'
        }),
      ]),
      h("button",{
        type:'submit',
        className:'btn btn-default'
      },['Guardar'])
    ]);
    let delta = diff(prevContent, content);
    node = patch(node, delta);
  }
}
export {HomeView}
