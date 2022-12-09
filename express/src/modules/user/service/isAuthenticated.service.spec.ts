import { jwtSign } from "../../../shared/utils/crypto"
import { isAuthenticatedService } from "./isAuthenticated.service"

describe('isAuthenticatedService ', () => {
    it('should return true if user is authenticated', () => {
        const user = {
            user_id: 1,
            username: 'username',
            name: 'name',
        }
        const req = {
            headers: { 'authorization': `Bearer ${jwtSign(user)}` },
        } as any

        const res = isAuthenticatedService(req)

        expect(res).toBe(true)
        expect(req.headers.username).toBe(user.username)
        expect(req.headers.name).toBe(user.name)
        expect(req.headers.user_id).toBe(user.user_id)
    })

    it('should return false if user is not authenticated', () => {
        const req = {
            headers: { token: 'INVALID JWT' },
        } as any

        const res = isAuthenticatedService(req)

        expect(res).toBe(false)
        expect(req.headers.username).toBe(undefined)
        expect(req.headers.name).toBe(undefined)
        expect(req.headers.user_id).toBe(undefined)

    })
})
