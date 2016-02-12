import _ from 'lodash';
let currentPage = 1;

const getButtonFirstPage =(page, ShowPagesPagination)=> (lessThanMiddle(page, ShowPagesPagination)) ? [] :[{text:'«', page:1, type:'text'}];

const getTotalPages = (size, itemsPerPage) =>
  Math.ceil(size/itemsPerPage)

const setActualPage = (page=1) =>
  {currentPage = page; return currentPage;};

const lessThanMiddle = (page, ShowPagesPagination)=>
  (page<=getMiddleFromPagination(ShowPagesPagination))

const isinLastSectionPagination =(ShowPagesPagination=6, page=1)=>
  (page>=parseInt(getPages()-ShowPagesPagination))

const getMiddleFromPagination =(showPagesPagination=6) =>
  Math.ceil(showPagesPagination/2)

const getFirstPage = (size, ShowPagesPagination=6, page=1)=> {
  return (lessThanMiddle(page)) ? 1 :
  (isinLastSectionPagination(ShowPagesPagination, page)) ? parseInt(getTotalPages(size, ShowPagesPagination)-ShowPagesPagination)
  : Math.ceil(page-getMiddleFromPagination())
};

const getLastPage =(ShowPagesPagination=6)=>
    getFirstPage()+ShowPagesPagination

const getPages =(size, ShowPagesPagination=6, page=1)=>
  _.concat(getButtonFirstPage(page, ShowPagesPagination), _.range(ShowPagesPagination)).map(
    (item)=>{
      if(item.text) return item
      else return {
        type: 'number',
        text: parseInt(getFirstPage(size, ShowPagesPagination, page))+item,
        page: parseInt(getFirstPage(size, ShowPagesPagination, page))+item
      }

    })



export {getPages}
