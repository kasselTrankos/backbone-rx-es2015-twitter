import h from 'virtual-dom/h';
import _ from 'lodash';
import VNode from 'virtual-dom/vnode/vnode';
import VText from 'virtual-dom/vnode/vtext';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';
import htmlToDom from 'html-to-vdom';
import {TwitterText} from './../../util/Text';
const ListTweetsView = (el)=>{
  let content, prevContent, start, end;
  const convertHTML =  htmlToDom({
    VNode: VNode,
    VText: VText
  });
  content =  h('p', {className:'text-info'}, ['cargando Datos de tus cuentas']);
  let node = createElement(content);
  el.append(node);
  const htmlTweet = (tweet)=>{
    return h('div', {className: 'tweet-content box-shadow--2dp'}, [
      h('img', {
        className: 'img',
        src: tweet.get('user').profile_image_url
      }),
      h('p', {
        className:'tweet'
      }, [convertHTML(TwitterText(tweet.get('text')))])
    ]);
  }
  return (tweets={}, page=1, tweetsPerPage=10)=>{
    prevContent = content;
    start = (page - 1) * tweetsPerPage;
    end = page * tweetsPerPage;
    content = h('div', {className: 'list-accounts'}, [
      (tweets.size()===0)
        ? h('p', {className:'text-info'}, ['no hay ninguna cuenta introduce una please!!'])
        : _.map(_.slice(tweets.models, start, end), (el)=>htmlTweet(el))
    ]);
    let delta = diff(prevContent, content);
    node = patch(node, delta);
  }

}
export {ListTweetsView}
