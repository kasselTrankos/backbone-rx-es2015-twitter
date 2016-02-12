import _ from 'lodash';
let currentPage = 1;
const getTotalPages = (size, itemsPerPage) => Math.ceil(size/itemsPerPage)
const setActualPage = (page=1) =>{console.log(currentPage, ' erorr'); currentPage = page; return currentPage;};
const lessThanMiddle = ()=> (currentPage<=getMiddleFromPagination())
const isinLastSectionPagination =()=>(currentPage>=parseInt(getPages()-ShowPagesPagination))
const getMiddleFromPagination =(showPagesPagination=6) =>  Math.ceil(showPagesPagination/2)
const getFirstPage = (ShowPagesPagination=6)=> {
  return (lessThanMiddle()) ? currentPage :
  (isinLastSectionPagination()) ? parseInt(getTotalPages()-ShowPagesPagination)
  : Math.ceil(currentPage-getMiddleFromPagination())}
const getLastPage =(ShowPagesPagination=6)=> getFirstPage()+ShowPagesPagination
const getPages =(ShowPagesPagination=6)=> {
  return   _.range(ShowPagesPagination).map((i)=>getFirstPage(ShowPagesPagination)+i)
}

export {getPages}
