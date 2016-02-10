import h from 'virtual-dom/h';
const HomeView = ()=>{
  const content = h("form", [
    h("h3", {'className': 'blue'}, ['Form given data']),
    //{ render: TodoList, data: state.items },
    h("div", {'className':'form-group'}, [
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
  return content;
}
export {HomeView}
