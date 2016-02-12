import h from 'virtual-dom/h';
import _ from 'lodash';

import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';
import {TwitterText} from './../../util/Text';
import {getPages} from './../../util/Pagination';

const ListPagesView = (el, account, pagesShown=10)=>{
  let content, prevContent, pages;
  content =  h('p', {className:'text-info'}, ['Creando paginación']);
  let node = createElement(content);
  el.append(node);
  return (size, page=1)=>{
    prevContent = content;

    content = h('div', {className: 'list-accounts'}, [
      h('ul', {className: 'pagination'}, [
        _.map(getPages(size, pagesShown, page), (i)=>{
          return  h('li' ,[
            h('a', {
              className: (page===i)? 'active':'el',
              href: `/${account}/${i}`

            }, [i])
          ])
        })
      ])
    ]);
    let delta = diff(prevContent, content);
    node = patch(node, delta);


  }

}
export {ListPagesView}
