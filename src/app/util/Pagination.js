import _ from 'lodash';
let currentPage = 1;
const getTotalPages = (size, itemsPerPage) => Math.ceil(size/itemsPerPage)
const setActualPage = (page=1) =>{currentPage = page; return currentPage;};
const lessThanMiddle = (page)=> (page<=getMiddleFromPagination())
const isinLastSectionPagination =(ShowPagesPagination=6, page=1)=>(page>=parseInt(getPages()-ShowPagesPagination))
const getMiddleFromPagination =(showPagesPagination=6) =>  Math.ceil(showPagesPagination/2)
const getFirstPage = (size, ShowPagesPagination=6, page=1)=> {
  return (lessThanMiddle(page)) ? page :
  (isinLastSectionPagination(ShowPagesPagination, page)) ? parseInt(getTotalPages(size, ShowPagesPagination)-ShowPagesPagination)
  : Math.ceil(page-getMiddleFromPagination())}
const getLastPage =(ShowPagesPagination=6)=> getFirstPage()+ShowPagesPagination
const getPages =(size, ShowPagesPagination=6, page=1)=>
  _.range(ShowPagesPagination).map((i)=>parseInt(getFirstPage(size, ShowPagesPagination, page))+i)


export {getPages}
