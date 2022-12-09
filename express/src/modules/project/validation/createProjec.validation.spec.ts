import request from 'supertest'
import { app } from '../../..'

jest.mock('../../user/service/isAuthenticated.service', () => ({
    isAuthenticatedService: jest.fn(() => true)
}))

describe('Create Project Validation Tests', () => {
    test('Create ok', async () => {
        await request(app)
            .post('/project')
            .set('username', 'test')
            .send({
                "cost": Math.random() * 1000,
                "deadline": new Date().toISOString(),
                "title": "test",
                "zip_code": "88010400"
            })
            .expect(201)
            .then((res) => {
                expect(res.body.error).toBeUndefined()
            })
    })

    test('Create without cost', async () => {
        await request(app)
            .post('/project')
            .send({
                "cost": null,
                "deadline": new Date().toISOString(),
                "title": "test",
                "zip_code": "88010400"
            })
            .expect(400)
            .then((res) => {
                expect(res.body.error).toBeDefined()
            })
    })

    test('Create without deadline', async () => {
        await request(app)
            .post('/project')
            .send({
                "cost": Math.random() * 1000,
                "deadline": null,
                "title": "test",
                "zip_code": "88010400"
            })
            .expect(400)
            .then((res) => {
                expect(res.body.error).toBeDefined()
            })
    })

    test('Create without title', async () => {
        await request(app)
            .post('/project')
            .send({
                "cost": Math.random() * 1000,
                "deadline": new Date().toISOString(),
                "title": null,
                "zip_code": "88010400"
            })
            .expect(400)
            .then((res) => {
                expect(res.body.error).toBeDefined()
            })
    })

    test('Create without zip_code', async () => {
        await request(app)
            .post('/project')
            .send({
                "cost": Math.random() * 1000,
                "deadline": new Date().toISOString(),
                "title": "test",
                "zip_code": null
            })
            .expect(400)
            .then((res) => {
                expect(res.body.error).toBeDefined()
            })
    })
})