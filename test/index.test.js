const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

const expect = chai.expect;
chai.use(chaiHttp);

describe('User', () => {
    it('should return 200 status code', done => {
        chai.request(server)
            .get('/users')
            .end((error, result) => {
                expect(result.status).eql(200);
                done();
            });
    });
    it('should return 200 status code', done => {
        chai.request(server)
            .get('/users/reytama')
            .end((error, result) => {
                expect(result.status).eql(200);
                done();
            });
    });
    it('should return 200 status code', done => {
        chai.request(server)
            .get('/users/abc')
            .end((error, result) => {
                expect(result.status).eql(200);
                done();
            });
    });
});
