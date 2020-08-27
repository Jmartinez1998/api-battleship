'use strict'
const User = use('App/Models/User')
class UserController {
    async login({ request, auth, response }) {
        const data = request.only(User.Datapassw)
        const token = await auth.withRefreshToken().attempt(data.email, data.password, true)
        const user = await User.query().where('email', data.email).fetch()
        try {
            return response.ok({
                user,
                token
            })
        }
        catch(err) {
            console.error(err)
        }
    }
}

module.exports = UserController
