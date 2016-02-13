import mocha from 'mocha';
import chai from 'chai';
import {getFirstPage, getMiddleFromPagination,
  isLessThanEnd,
  getTotalPages, isInLastMiddle, Pages,
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
    expect(isInLastMiddle(size, page, showPages)).to.not.be.true;
    done();
  });

  it('expect in last section of pagination when page is 78', (done)=>{
    page = 78;
    expect(isInLastMiddle(size, page, showPages)).to.be.true;
    done();
  });

  it('assert first page in paginaton to be 4, when in page 7', (done)=>{
    page = 7;
    assert.equal(4, getFirstPage(size, page, showPages));
    done();
  });
  it('assert getMiddleFromPagination equal a 4 when showPages is 7 and page 1', (done)=>{
    page =1;
    assert.equal(4, getMiddleFromPagination(showPages));
    done();
  });

  it('assert first page in paginaton to be 1, when in page 4', (done)=>{
    page = 24;
    assert.equal(21, getFirstPage(size, page , showPages));
    done();
  });
  it('expect pages equal 2 when size 9', (done)=>{
    page = 1;
    size = 9;
    expect(Pages(size, page, showPages)).to.equal(1);
    done();
  });
  it('expect button last page to.have.property text', (done)=>{
    page =1;
    size = 368;
    expect(getButtonLastPage(size, page, showPages)[0]).to.have.property('text');
    done();
  });
  it('expect page 80 isLessThanEnd to not be true', (done)=>{
    page  = 80;
    size = 581;
    expect(isLessThanEnd(size, page, showPages)).to.not.be.true;
    done();
  });
  it('expect getButtonLastPage length is 0 page is 80', (done)=>{
    page = 80;
    expect(getButtonLastPage(size, page, showPages)).to.have.length(0);
    done();
  });
  it('expect first page is 1 when got size 26 an is in page 4', (done)=>{
    page = 4;
    size = 26;
    assert.equal(1, getFirstPage(size, page , showPages));
    done();
  });

});
