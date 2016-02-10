import VNode from 'virtual-dom/vnode/vnode';
import VText from 'virtual-dom/vnode/vtext';
import h from 'virtual-dom/h';
const HomeView = ()=>{
  const content = h("div", [
    h("h3", {'className': 'blue'}, ['Form given data']),
    //{ render: TodoList, data: state.items },
    h("div", { "data-submit": "addTodo" }, [
      h("input", { value: 'state.text', name: "text" }),
      h("button", "Add # " + 'state.items.length + 1')
    ])
  ]);
  return content;

    const form = new VNode('form', {
      action: '/account',
      method:'POST',
      className:'row'
    });
    const node =  new VNode('p', {
        className: "greeting"
    }, [
        new VText("Hello " + String('vera esta encasa!!!'))
    ]);
    co
  return node;
}
export {HomeView}
