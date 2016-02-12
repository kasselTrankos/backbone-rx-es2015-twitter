import h from 'virtual-dom/h';
const ContentView = (accountName)=>{
  const content = h('div' , {clasName: 'container-fluid'},[
    h('h3', {className:'text-primary'}, [`Listado principal de cuentas de ${accountName}`])
  ]);
  return content;
}
export {ContentView}
