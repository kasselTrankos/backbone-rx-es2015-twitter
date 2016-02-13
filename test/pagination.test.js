import mocha from 'mocha';
import chai from 'chai';
import {getFirstPage, getMiddleFromPagination,
  getTotalPages, isinLastSectionPagination, Pages,
  getButtonLastPage} from './../src/app/util/Pagination';
describe('Pagination', function () {
  let size=561, showPages =7, page = 7
  let assert = chai.assert;
  let expect = chai.expect;
  it('assert total pages equal 81', (done)=>{
    assert.equal(81, getTotalPages(size, showPages));
    done();
  });
  it('expect not in last section of pagination when page is 73', (done)=>{
    page = 73;
    expect(isinLastSectionPagination(size, page, showPages)).to.not.be.true;
    done();
  });

  it('expect  in last section of pagination when page is 74', (done)=>{
    page = 74;
    expect(isinLastSectionPagination(size, page, showPages)).to.be.true;
    done();
  });

  it('assert first page in paginaton to be 4, when in page 7', (done)=>{
    page = 7;
    assert.equal(4, getFirstPage(size, page, showPages));
    done();
  });


  it('assert getMiddleFromPagination equal a 4 when showPages is 7', (done)=>{
    assert.equal(4, getMiddleFromPagination(showPages))
    done();
  });
  it('expect to be true to show last page when page is 10', (done)=>{
    page = 10;
    expect(getButtonLastPage(size, page, showPages)).to.be.true;
  });
  it('assert first page in paginaton to be 1, when in page 4', (done)=>{
    page = 4;
    assert.equal(1, getFirstPage(size, page, showPages));
    done();
  });
  it('assert first page in paginaton to be 2, when in page 5', (done)=>{
    page = 5;
    assert.equal(2, getFirstPage(size, page , showPages));
    done();
  });
  it('expect  pages equal 2 when size 9', (done)=>{
    page = 1;
    size = 9;
    expect(Pages(size, page, showPages)).to.equal(1);
    done();
  });

});
