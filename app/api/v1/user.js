const bcrypt = require('bcryptjs')
const Router = require('koa-router')

const {success} = require('../../lib/help')
const {RegisterValidator} = require('../../validators/validator')
const {User} = require('../../models/user')

const router = new Router({
    prefix: '/v1/user'
})

//注册
router.post('/register', async (ctx) => {
    const v = await new RegisterValidator().validate(ctx)
    
    const user = {
        email: v.get('body.email'),
        password: v.get('body.password2'),
        nickname: v.get('body.nickname')
    }
    User.create(user)
    success()
})

module.exports = router
