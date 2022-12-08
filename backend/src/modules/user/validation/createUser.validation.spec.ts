import request from 'supertest'
import { app } from '../../..'
import { WeakPassword } from '../../../shared/utils/constants'

describe('User Validation Tests', () => {
    test('ok', async () => {
        await request(app)
            .post('/users')
            .send({ name: 'test', username: String(Date.now()), password: 'Password1!' })
            .expect(201)
            .then((res) => {
                expect(res.body.error).toBeUndefined()
            })
    })

    test('no username', async () => {
        await request(app)
            .post('/users')
            .send({ username: ' ', password: 'Password1!' })
            .expect(400)
            .then((res) => {
                expect(res.body.error).toBeDefined()
            })
    })

    test('no password', async () => {
        await request(app)
            .post('/users')
            .send({ username: 'username', password: ' ' })
            .expect(400).then((res) => {
                expect(res.body.error).toBeDefined()
            })
    })

    test('weak password', async () => {
        await request(app)
            .post('/users')
            .send({ username: 'username', password: '12345678' })
            .expect(400).then((res) => {
                expect(res.body.error).toBe(WeakPassword)
            })
    })
})