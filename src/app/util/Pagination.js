import _ from 'lodash';
let currentPage = 1;

const getButtonFirstPage =(size, page, pagesToShow)=>
  (getFirstPage(size, pagesToShow, page)>1)
    ? [{text:'«', page:1, type:'text'}]
    : []

const getButtonPrevPage = (size, page, pagesToShow)=>
  (getFirstPage(size, pagesToShow, page)>1)
    ? [{text:'‹', page:parseInt(page)-1, type:'text'}]
    : []
const getButtonLastPage =(size, page, pagesToShow)=>
  (isMoreThanEndMiddle(size, page, pagesToShow)) ? [] :[{text:'»', page:size, type:'text'}];

const getTotalPages = (size, pagesToShow) =>
  Math.ceil(size/pagesToShow)

const isMoreThanEndMiddle = (size, page, pagesToShow)=>
  (page<(getTotalPages(size, pagesToShow)-getMiddleFromPagination(pagesToShow)))

const setActualPage = (page=1) =>
  {currentPage = page; return currentPage;};

const lessThanMiddle = (page, pagesToShow)=>
  (page<=getMiddleFromPagination(pagesToShow))

const isinLastSectionPagination =(size, pagesToShow=6, page=1)=>
  (page>=parseInt(getTotalPages(size, pagesToShow)-pagesToShow))

const getMiddleFromPagination =(pagesToShow=6) =>
  Math.ceil(pagesToShow/2)

const getFirstPage = (size, pagesToShow=6, page=1)=>(lessThanMiddle(page))
    ? 1
    : (isinLastSectionPagination(size, pagesToShow, page))
      ? parseInt(getTotalPages(size, pagesToShow)-pagesToShow)
      : Math.ceil(page-getMiddleFromPagination(pagesToShow))


const getLastPage =(pagesToShow=6)=>
    getFirstPage()+pagesToShow

const Pages = (page, size, pagesToShow)=>
  ((page+pagesToShow)<getTotalPages(size, pagesToShow))
    ? pagesToShow
    : getTotalPages(size, pagesToShow)



const getPages =(size, pagesToShow=6, page=1)=>{
    
    let buttonFirstPAge = getButtonFirstPage(size, page, pagesToShow);
    let buttonPrevPage =getButtonPrevPage(size, page, pagesToShow);
    let buttons =  _.range(Pages(page, size, pagesToShow)).map(
      (item)=> {
        let firstPage = ((getFirstPage(size, pagesToShow, page)<=0) ? 1 : getFirstPage(size, pagesToShow, page))
      return {
        type: 'number',
        text: firstPage+item,
        page: firstPage+item
      }});
    return _.concat(buttonFirstPAge, buttonPrevPage, buttons);
//  );

}



export {getPages}
