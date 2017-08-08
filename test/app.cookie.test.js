/**
 * Cookie持久化
 * @link https://github.com/tj/supertest/issues/46
 */
const app = require('../src/app')
const request = require('supertest');
const assert = require('power-assert')
const agent = request.agent(app)

/**
 * @example 示例一
 */
describe('POST /login succeed', function () {
    it('respond with json and set cookie', function () {
        agent.post('/login')
            .set('Accept', 'application/json')
            .send('password', '12345678')
            .expect(200)
            .expect('Content-type', /json/)
            .end(function (err, res) {
                assert(res.body.name === 'slaneyang')
                done()
            })
    })
})
describe('POST /user/info succeed', function () {
    it('respond with json and set cookie', function () {
        agent.get('/user/info')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-type', /json/)
            .end(function (err, res) {
                assert(res.body.name === 'slaneyang')
                done()
            })
    })
})
describe('POST /user/info failed', function () {
    it('respond with json and set cookie', function () {
        request(app)
            .get('/user/info')
            .set('Accept', 'application/json')
            .expect(403)
            .expect('Content-type', /json/)
            .end(function (err, res) {
                assert(res.body.success === 'failed')
                done()
            })
    })
})
// agent.post('/login').end('...');
// // then ..
// agent.post('create_topic').end('...'); // 此时的 agent 中有用户登陆后的 cookie




// /**
//  * @example 示例二
//  */
// let userCookie;
// request.post('login').end(function (err, res) {
//     userCookie = res.headers['Cookie']
// });
// // then ..
// request.post('create_topic')
//     .set('Cookie', userCookie)
//     .end('...')