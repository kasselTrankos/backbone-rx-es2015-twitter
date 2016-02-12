import h from 'virtual-dom/h';
const ContentView = (accountName)=>{
  const content = h('div' , {clasName: 'container-fluid'},[
    h('h3', {className:'text-primary'}, [`Listado principal de cuentas de ${accountName}`]),
    h('div', {className:'row'}, [
      h('div', {className:'col-md-2' }),
      h('div', {className:'col-md-8', id:'listTweets' })
    ])
  ]);
  return content;
}
export {ContentView}
