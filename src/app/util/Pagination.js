import _ from 'lodash';

const getButtonFirstPage =(size, page, pagesShown)=>
  (getFirstPage(size, page, pagesShown)>1)
    ? [{text:'«', page:1, type:'text'}]
    : []

const getButtonPrevPage = (size, page=1, pagesShown=6)=>
  (getFirstPage(size, page, pagesShown)>1)
    ? [{text:'‹', page:parseInt(page)-1, type:'text'}]
    : []
const getButtonLastPage =(size, page=1, pagesShown=6)=>
  (isMoreThanEndMiddle(size, page, pagesShown))
  ? []
  : [{text:'»', page:getTotalPages(size, pagesShown), type:'text'}];

const getTotalPages = (size, pagesShown) =>
  Math.ceil(size/pagesShown)

const isMoreThanEndMiddle = (size, page=1, pagesShown=6)=>
  (page<(getTotalPages(size, pagesShown)-getMiddleFromPagination(pagesShown)))

const setActualPage = (page=1) =>
  {currentPage = page; return currentPage;};

const lessThanMiddle = (page, pagesShown)=>
  (page<getMiddleFromPagination(pagesShown))

const isinLastSectionPagination =(size, page=1, pagesShown=6)=>
  (page>=parseInt(getTotalPages(size, pagesShown)-pagesShown))

const getMiddleFromPagination =(pagesToShow=6) =>
  Math.ceil(pagesToShow/2)

///mal necesito hacer un buen test here please now!!!
const getFirstPage = (size, page=1,  pagesShown=6)=>
  (lessThanMiddle(page, pagesShown))
    ? 1
    : (isinLastSectionPagination(size, page, pagesShown))
      ? parseInt(getTotalPages(size, pagesShown) - pagesShown)
      : atMinium(Math.ceil( page -getMiddleFromPagination(pagesShown) + 1), 1)

const atMinium = (number, minium)=>
  (number<minium)
    ? minium
    : number


const getLastPage =(pagesShown=6)=>
    getFirstPage()+pagesShown

const Pages = (size, pagesShown=6)=>
  (pagesShown>=getTotalPages(size, pagesShown))
    ? getTotalPages(size, pagesShown)
    : pagesShown



const getPages =(size, page=1, pagesShown=6)=>{
  console.log(size, ' SIZE');
    let buttonFirstPAge = getButtonFirstPage(size, page, pagesShown);
    let buttonPrevPage =getButtonPrevPage(size, page, pagesShown);
    let buttons =  _.range(Pages(size, pagesShown)).map(
      (item)=> {
      return {
        type: 'number',
        text: getFirstPage(size, page, pagesShown)+item,
        page: getFirstPage(size, page, pagesShown)+item
      }});
    return _.concat(buttonFirstPAge, buttonPrevPage, buttons);
//  );

}



export {getPages, getFirstPage, getMiddleFromPagination, Pages,
  getTotalPages, isinLastSectionPagination, getButtonLastPage}
