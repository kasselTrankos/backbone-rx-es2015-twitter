export const StoreSocket = (io)=>{
  const sockets = [];

  const exists = (account)=>{
    let store = false;
    sockets.map((elm)=>{
      if(elm.name===account) store = true;
    });
    return store;
  }
  const create =  (account)=>{
    let store = Store(account, sockets)
    if(store!==null) return store.of;
    ///io.connect(`/ws/${account}`);
    store = {
      name: account,
      of: io.of(`/${account}`)
    }
    sockets.push(store);
    return store.of;
  }
  return {
    create: create,
    exists: exists
  }
}
export const Store = (account, arr)=>{
  let store = null;
  arr.map((elm)=>{
    if(elm.name===account) store = elm;
  });
  return store;
}
