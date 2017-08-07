const app = require('../src/app')
const request = require('supertest');
const should = require('should')

// 测试后端api
describe('GET /user', function () {
    it('respond with json', function (done) {
        request(app)
            .get('/user')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                res.body.name.should.be.equal('slane');
                done();
            });
    });
});