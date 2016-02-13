import h from 'virtual-dom/h';
const ContentView = (accountName, limit=10, page=1)=>{
  const content = h('div' , {clasName: 'container-fluid'},[
    h('div', {className:'row'}, [
      h('div', {className:'col-xs-6 col-md-8'}, [
        h('h3', {className:'col-md-8 text-primary'}, [`Tweets de ${accountName}`])
      ]),
      h('div', {className: 'col-xs-6 col-md-4'}, [
        h('a', {className:'home btn btn-info', href: '/'}, ['home'])
      ])
    ]),
    h('div', {className:'row'}, [
      h('div', {className:'col-md-2' }),
      h('div', {
        className:'col-md-8',
        id:'listTweets'
       })
    ]),
    h('div', {className:'row'}, [
      h('div', {className:'col-md-2' }),
      h('div', {
        className:'col-md-8',
        id:'pageTweets'
       })
    ])
  ]);
  return content;
}
export {ContentView}
