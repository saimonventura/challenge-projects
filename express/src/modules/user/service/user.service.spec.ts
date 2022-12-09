
import { InvalidCredentials } from "../../../shared/utils/constants"
import { md5Hash } from "../../../shared/utils/crypto"
import { loginUserService } from "./loginUser.service"


describe('User Service Tests', () => {
    test('loginUserService sucess', async () => {
        const req = {
            body: { username: 'username', password: 'password' },
        } as any
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
            cookie: jest.fn().mockReturnThis(),
        } as any
        const user = {
            id: 1,
            username: 'username',
            password: md5Hash('password'),
        } as any

        await loginUserService(req, res, user)

        expect(res.cookie).toBeCalled()
        expect(res.status).toBeCalledWith(200)
        expect(res.json).toBeCalledWith({ token: expect.any(String) })
    })

    test('loginUserService wrong password', async () => {
        const req = {
            body: { username: 'username', password: '1234' },
        } as any
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
            cookie: jest.fn().mockReturnThis(),
        } as any
        const user = {
            id: 1,
            username: 'username',
            password: md5Hash('password'),
        } as any

        await loginUserService(req, res, user)

        expect(res.cookie).not.toBeCalled()
        expect(res.status).toBeCalledWith(401)
        expect(res.json).toBeCalledWith({ error: InvalidCredentials })
    })
})
