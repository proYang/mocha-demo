const add = require('../src/add')
const should = require('should')

// 基本测试
describe('add函数测试', function () {
    it('1+1=2', function () {
        add(1, 1).should.be.equal(2)
    })
})