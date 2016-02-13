import mocha from 'mocha';
import chai from 'chai';
import {getFirstPage, getMiddleFromPagination,
  getTotalPages, isinLastSectionPagination} from './../src/app/util/Pagination';
describe('Pagination', function () {
  let size=100, showPages =7, page = 7
  let assert = chai.assert;
  let expect = chai.expect;
  before(()=>{

  });
  it('assert total pages equal 15', (done)=>{
    assert.equal(15, getTotalPages(size, showPages));
    done();
  });
  it('expect not in last section of pagination', (done)=>{
    expect(isinLastSectionPagination(size, showPages, page)).to.not.be.true;
    done();
  })
  it('assert first page in paginaton to be 4, when in page 7', (done)=>{
    assert.equal(4, getFirstPage(size, showPages, page));
    done();
  });
  it('assert first page in paginaton to be 1, when in page 4', (done)=>{
    page = 4;
    assert.equal(1, getFirstPage(size, showPages, page));
    done();
  });
  it('assert first page in paginaton to be 2, when in page 5', (done)=>{
    page = 5;
    assert.equal(2, getFirstPage(size, showPages, page));
    done();
  });
  it('assert getMiddleFromPagination equal a 4 when showPages is 7', (done)=>{
    assert.equal(4, getMiddleFromPagination(showPages))
    done();
  });
});
