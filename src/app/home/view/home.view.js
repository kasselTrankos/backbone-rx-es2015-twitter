import VNode from 'virtual-dom/vnode/vnode';
import VText from 'virtual-dom/vnode/vtext';
const HomeView = ()=>{

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

  return node;
}
export {HomeView}
