import _ from 'lodash';
let currentPage = 1;

const getButtonFirstPage =(page, ShowPagesPagination)=>
  (lessThanMiddle(page, ShowPagesPagination)) ? [] :[{text:'«', page:1, type:'text'}];

const getButtonPrevPage = (page, ShowPagesPagination)=>
  (lessThanMiddle(page, ShowPagesPagination)) ? [] :[{text:'‹', page:parseInt(page)-1, type:'text'}];

const getButtonLastPage =(size, page, ShowPagesPagination)=>
  (isMoreThanEndMiddle(size, page, ShowPagesPagination)) ? [] :[{text:'»', page:size, type:'text'}];

const getTotalPages = (size, itemsPerPage) =>
  Math.ceil(size/itemsPerPage)

const isMoreThanEndMiddle = (size, page, ShowPagesPagination)=>
  (page<(getTotalPages(size, ShowPagesPagination)-getMiddleFromPagination(ShowPagesPagination)))

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

const getPages =(size, ShowPagesPagination=6, page=1)=>{
    console.log(page, 'calle');
    let buttonFirstPAge = getButtonFirstPage(page, ShowPagesPagination);
    let buttonPrevPage =getButtonPrevPage(page, ShowPagesPagination);
    let buttons =  _.range(ShowPagesPagination).map(
      (item)=> {
      return {
        type: 'number',
        text: parseInt(getFirstPage(size, ShowPagesPagination, page))+item,
        page: parseInt(getFirstPage(size, ShowPagesPagination, page))+item
      }});
    return _.concat(buttonFirstPAge, buttonPrevPage, buttons);
//  );

}



export {getPages}
