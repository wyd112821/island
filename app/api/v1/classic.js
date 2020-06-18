const Router = require('koa-router')
const { Auth } = require('../../../middlewares/auth')

const router = new Router({
    prefix: '/v1/classic'
})

const { Flow } = require('../../models/flow')
const { Art } = require('../../models/art')

router.get('/latest', new Auth().m, async (ctx, next) => {
    const flow = await Flow.findOne({
        order: [
            ['index', 'DESC']
        ]
    })
    const art = await Art.getData(flow.art_id, flow.type)
    //art.dataValues.index = flow.index
    art.setDataValue('index', flow.index)
    ctx.body = art 
})

module.exports = router