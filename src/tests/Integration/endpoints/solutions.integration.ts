process.env.NODE_ENV = 'test';

import request from 'supertest';
import { start } from '../../../index';
import { Solution } from '../../../models/solutions.model';

describe("Solutions' Endpoints Tests", function() {
    beforeAll(async (done) => {
        this.app = await start();
        this.testerToken = '';

        request(this.app)
            .post('/users/signup')
            .send({ username: 'tester14', password: 'random', role: 'admin' })
            .end((error, response) => {
                this.testerToken = `Bearer ${response.text}`;
                done(error);
            })
        ;
    });

    afterAll((done) => {
        request(this.app)
            .delete('/users/')
            .set('Authorization', this.testerToken)
            .end((error) => {
                done(error);
            })
        ;
    });

    describe('POST /solutions/', () => {
        it('should create solution when everything is ok', (done) => {
            const mockedSolution: Partial<Solution> = {
                company: 'something3',
                business: 'something2'
            };

            request(this.app)
                .post('/solutions/')
                .set('Authorization', this.testerToken)
                .send(mockedSolution)
                .expect(201)
                .end((error, response) => {
                    if (error) return done(error);

                    request(this.app)
                    .get(`/solutions/${response.body.id}`)
                    .set('Authorization', this.testerToken)
                    .expect(200)
                    .end((error2, response2) => {
                        if (error2) return done(error2);

                        try {
                            expect(response2.body._id).toBe(response.body.id);
                            expect(response2.body.company).toBe(mockedSolution.company);
                            expect(response2.body.business).toBe(mockedSolution.business);

                            done();
                        } catch(error) {
                            done(error);
                        }
                    });
                })
            ;
        });
    });
});